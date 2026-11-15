const list = document.querySelector('#steps-list');
const search = document.querySelector('#search');
const empty = document.querySelector('#empty-state');
const count = document.querySelector('#step-count');

function defaultJoints(endpoint, side, limb) {
  const bend = limb === 'arm' ? 3 : -2;
  return [[endpoint[0] / 2 + (side === 0 ? 2 : -2), endpoint[1] / 2 + bend], endpoint];
}

function articulatedLimb(anchor, joints) {
  const points = [anchor, ...joints];
  const path = points.map(point => point.join(',')).join(' ');
  return `<polyline points="${path}"></polyline>${joints.map((point, index) => `<circle class="joint ${index === joints.length - 1 ? 'joint-end' : ''}" cx="${point[0]}" cy="${point[1]}" r="${index === joints.length - 1 ? 1.8 : 2.2}"></circle>`).join('')}`;
}

function figure(pose, x) {
  const y = 25;
  const [leftArm, rightArm] = pose.arms;
  const [leftLeg, rightLeg] = pose.legs;
  const leftArmJoints = pose.armJoints?.[0] ?? defaultJoints(leftArm, 0, 'arm');
  const rightArmJoints = pose.armJoints?.[1] ?? defaultJoints(rightArm, 1, 'arm');
  const leftLegJoints = pose.legJoints?.[0] ?? defaultJoints(leftLeg, 0, 'leg');
  const rightLegJoints = pose.legJoints?.[1] ?? defaultJoints(rightLeg, 1, 'leg');
  const profile = pose.view === 'profile';
  const leftShoulder = profile ? [-4, 15] : [-7, 15];
  const rightShoulder = profile ? [4, 15] : [7, 15];
  const leftHip = profile ? [-2, 38] : [-3, 38];
  const rightHip = [3, 38];
  const profileScale = pose.facing === 'left' ? '-.78 1' : '.78 1';
  return `<g class="figure ${profile ? 'figure-profile' : ''}" transform="translate(${x + pose.shift} ${y}) rotate(${pose.lean} 0 35) scale(${profile ? profileScale : '1 1'})">
    <circle class="figure-head" cx="0" cy="0" r="7"></circle>
    ${profile ? '<path class="profile-nose" d="M6 -1 10 1 6 3"></path>' : ''}
    <path d="M0 8 L0 38"></path>
    <circle class="joint joint-core" cx="${leftShoulder[0]}" cy="15" r="2"></circle><circle class="joint joint-core" cx="${rightShoulder[0]}" cy="15" r="2"></circle>
    ${articulatedLimb(leftShoulder, leftArmJoints)}${articulatedLimb(rightShoulder, rightArmJoints)}
    <circle class="joint joint-core" cx="${leftHip[0]}" cy="38" r="2"></circle><circle class="joint joint-core" cx="${rightHip[0]}" cy="38" r="2"></circle>
    ${articulatedLimb(leftHip, leftLegJoints)}${articulatedLimb(rightHip, rightLegJoints)}
  </g>`;
}

function motionSvg(step) {
  const xs = [52, 150, 248];
  const views = [...new Set(step.poses.map(pose => pose.view === 'profile' ? 'profil' : 'face'))];
  const figures = step.poses.map((pose, index) => figure(pose, xs[index])).join('');
  return `<span class="motion-view">Vue ${views.join(' + ')}</span><svg viewBox="0 0 300 104" role="img" aria-labelledby="${step.id}-title ${step.id}-desc">
    <title id="${step.id}-title">Séquence du pas ${step.name}</title>
    <desc id="${step.id}-desc">Trois silhouettes schématiques montrant : ${step.poses.map(pose => pose.caption.toLowerCase()).join(', puis ')}.</desc>
    <defs><marker id="arrowhead-${step.id}" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="none" stroke="#e85a32" stroke-width="1.4"></path></marker></defs>
    <path class="pose-arrow" marker-end="url(#arrowhead-${step.id})" d="M82 65 L118 65 M180 65 L216 65"></path>
    ${figures}
  </svg>`;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('fr');
  const visible = window.steps.filter(step => [step.name, ...step.aliases, step.styleLabel].join(' ').toLocaleLowerCase('fr').includes(query));

  list.innerHTML = visible.map(step => `<article class="step-row" aria-labelledby="${step.id}-name">
    <div class="step-info">
      <span class="step-number">${String(window.steps.indexOf(step) + 1).padStart(2, '0')} / ${String(window.steps.length).padStart(2, '0')}</span>
      <h2 id="${step.id}-name">${step.name}</h2>
      <span class="style-tag">${step.styleLabel}</span>
      ${step.derivation ? `<p class="derivation">↳ ${step.derivation}</p>` : ''}
    </div>
    <div class="motion">
      ${motionSvg(step)}
      <div class="pose-captions" aria-hidden="true">${step.poses.map((pose, index) => `<span>${index + 1}. ${pose.caption}</span>`).join('')}</div>
    </div>
    <div class="source-cell">${step.video ? `<a class="source-link" href="${step.video}" target="_blank" rel="noopener noreferrer" aria-label="${step.videoLabel} pour ${step.name}, ouvre un nouvel onglet"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 3.5h8v8M12 4 4 12"></path></svg>${step.videoLabel}</a>` : '<span class="video-pending">Vidéo à ajouter</span>'}</div>
    <p class="step-note">${step.description}</p>
  </article>`).join('');

  count.textContent = `${visible.length} pas`;
  empty.hidden = visible.length !== 0;
}

search.addEventListener('input', render);
document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== search && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === 'Escape' && document.activeElement === search) {
    search.value = '';
    render();
    search.blur();
  }
});

render();
