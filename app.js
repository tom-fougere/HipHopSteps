const list = document.querySelector('#steps-list');
const search = document.querySelector('#search');
const empty = document.querySelector('#empty-state');
const count = document.querySelector('#step-count');
const filters = [...document.querySelectorAll('.filter')];
let activeStyle = 'all';

function figure(pose, x) {
  const y = 28;
  const [leftArm, rightArm] = pose.arms;
  const [leftLeg, rightLeg] = pose.legs;
  return `<g class="figure" transform="translate(${x + pose.shift} ${y}) rotate(${pose.lean} 0 35)">
    <circle class="figure-head" cx="0" cy="0" r="7"></circle>
    <path d="M0 8 L0 38 M-7 15 L${-7 + leftArm[0]} ${15 + leftArm[1]} M7 15 L${7 + rightArm[0]} ${15 + rightArm[1]} M-3 38 L${-3 + leftLeg[0]} ${38 + leftLeg[1]} M3 38 L${3 + rightLeg[0]} ${38 + rightLeg[1]}"></path>
  </g>`;
}

function motionSvg(step) {
  const xs = [52, 150, 248];
  const figures = step.poses.map((pose, index) => figure(pose, xs[index])).join('');
  return `<svg viewBox="0 0 300 92" role="img" aria-labelledby="${step.id}-title ${step.id}-desc">
    <title id="${step.id}-title">Séquence du pas ${step.name}</title>
    <desc id="${step.id}-desc">Trois silhouettes schématiques montrant : ${step.poses.map(pose => pose.caption.toLowerCase()).join(', puis ')}.</desc>
    <defs><marker id="arrowhead-${step.id}" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="none" stroke="#e85a32" stroke-width="1.4"></path></marker></defs>
    <path class="pose-arrow" marker-end="url(#arrowhead-${step.id})" d="M82 65 L118 65 M180 65 L216 65"></path>
    ${figures}
  </svg>`;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('fr');
  const visible = window.steps.filter(step => {
    const matchesStyle = activeStyle === 'all' || step.style === activeStyle;
    const searchable = [step.name, ...step.aliases, step.styleLabel].join(' ').toLocaleLowerCase('fr');
    return matchesStyle && searchable.includes(query);
  });

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

filters.forEach(button => button.addEventListener('click', () => {
  activeStyle = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('is-active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  render();
}));

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

document.querySelectorAll('.filter span').forEach(counter => { counter.textContent = String(counter.closest('.filter').dataset.filter === 'all' ? window.steps.length : window.steps.filter(step => step.style === counter.closest('.filter').dataset.filter).length).padStart(2, '0'); });
render();
