window.steps = [
  {
    id: 'two-step', name: 'Two-step', aliases: ['2-step', 'two step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Transfère le poids d’un côté à l’autre sur un rebond souple. Garde les genoux légers et laisse les épaules suivre le groove.',
    video: 'https://www.youtube.com/watch?v=xvmNPLFoDEc', videoLabel: 'Voir le 2-step',
    poses: [
      { caption: 'Départ', shift: 0, lean: 0, arms: [[-15, 10], [15, 10]], armJoints: [[[-9, 6], [-15, 10]], [[9, 6], [15, 10]]], legs: [[-12, 29], [12, 29]], legJoints: [[[-9, 15], [-12, 29]], [[9, 15], [12, 29]]] },
      { caption: 'Appui à droite', shift: 7, lean: 3, arms: [[-18, 5], [18, 12]], armJoints: [[[-11, 6], [-18, 5]], [[10, 5], [18, 12]]], legs: [[-5, 29], [17, 29]], legJoints: [[[-3, 15], [-5, 29]], [[11, 14], [17, 29]]] },
      { caption: 'Appui à gauche', shift: -7, lean: -3, arms: [[-18, 12], [18, 5]], armJoints: [[[-10, 5], [-18, 12]], [[11, 6], [18, 5]]], legs: [[-17, 29], [5, 29]], legJoints: [[[-11, 14], [-17, 29]], [[3, 15], [5, 29]]] }
    ]
  },
  {
    id: 'bart-simpson', name: 'Bart Simpson', aliases: ['bart'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: 'Variante glissée du Two-step',
    description: 'Pars du two-step avec rebond, puis fais glisser le pied qui rejoint l’autre. Tourne le bassin vers le déplacement ; les bras partent à l’opposé.',
    video: 'https://www.youtube.com/watch?v=lG7DS0oDcaQ', videoLabel: 'Voir le tutoriel',
    poses: [
      { caption: 'Plie et pars', view: 'profile', shift: 0, lean: 0, arms: [[-16, 5], [16, 5]], armJoints: [[[-9, 9], [-16, 5]], [[9, 9], [16, 5]]], legs: [[-5, 30], [5, 30]], legJoints: [[[-2, 15], [-5, 30]], [[2, 15], [5, 30]]] },
      { caption: 'Glisse à droite', view: 'profile', shift: 8, lean: 4, arms: [[-25, -5], [-12, 8]], armJoints: [[[-13, 3], [-25, -5]], [[-2, 3], [-12, 8]]], legs: [[-3, 30], [23, 26]], legJoints: [[[-1, 15], [-3, 30]], [[11, 13], [23, 26]]] },
      { caption: 'Glisse à gauche', view: 'profile', facing: 'left', shift: -8, lean: -4, arms: [[12, 8], [25, -5]], armJoints: [[[2, 3], [12, 8]], [[13, 3], [25, -5]]], legs: [[-23, 26], [3, 30]], legJoints: [[[-11, 13], [-23, 26]], [[1, 15], [3, 30]]] }
    ]
  },
  {
    id: 'running-man', name: 'Running Man', aliases: ['running man step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Alterne les genoux : l’un monte pendant que l’autre pied glisse vers l’arrière, puis inverse. Les bras accompagnent comme une course sur place.',
    video: 'https://www.youtube.com/watch?v=lYpRasK4c9k', videoLabel: 'Voir le Running Man',
    poses: [
      { caption: 'Pied arrière levé', view: 'profile', shift: 0, lean: 2, arms: [[18, -4], [-17, 5]], armJoints: [[[8, -1], [18, -4]], [[-9, 1], [-17, 5]]], legs: [[-3, 31], [18, 15]], legJoints: [[[-1, 15], [-3, 31]], [[11, 7], [18, 15]]] },
      { caption: 'Change d’appui', view: 'profile', shift: 2, lean: 2, arms: [[-17, 5], [18, -4]], armJoints: [[[-9, 1], [-17, 5]], [[8, -1], [18, -4]]], legs: [[18, 15], [-3, 31]], legJoints: [[[11, 7], [18, 15]], [[-1, 15], [-3, 31]]] },
      { caption: 'Alterne encore', view: 'profile', shift: 0, lean: 2, arms: [[18, -4], [-17, 5]], armJoints: [[[8, -1], [18, -4]], [[-9, 1], [-17, 5]]], legs: [[-3, 31], [18, 15]], legJoints: [[[-1, 15], [-3, 31]], [[11, 7], [18, 15]]] }
    ]
  },
  {
    id: 'happy-feet', name: 'Happy Feet', aliases: ['heel toe'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Fais pivoter talon et pointe en alternance, avec de petits changements d’appui. Le jeu des pieds reste léger ; ajoute le groove du haut du corps ensuite.',
    video: 'https://www.youtube.com/watch?v=S0vC0Yfet-w', videoLabel: 'Voir Happy Feet',
    poses: [
      { caption: 'Pieds parallèles', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-12, 29], [12, 29]], legJoints: [[[-8, 15], [-12, 29]], [[8, 15], [12, 29]]] },
      { caption: 'Pointe ouverte', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-20, 28], [8, 30]], legJoints: [[[-12, 15], [-20, 28]], [[6, 15], [8, 30]]] },
      { caption: 'Inverse l’appui', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-8, 30], [20, 28]], legJoints: [[[-6, 15], [-8, 30]], [[12, 15], [20, 28]]] }
    ]
  }
];
