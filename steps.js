window.steps = [
  {
    id: 'two-step', name: 'Two-step', aliases: ['2-step', 'two step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Transfère le poids d’un côté à l’autre sur un rebond souple. Garde les genoux légers et laisse les épaules suivre le groove.',
    video: 'https://www.youtube.com/watch?v=xvmNPLFoDEc', videoLabel: 'Voir le 2-step',
    poses: [
      { caption: 'Pas à droite', shift: 7, lean: 3, arms: [[-18, 5], [18, 12]], armJoints: [[[-11, 6], [-18, 5]], [[10, 5], [18, 12]]], legs: [[-3, 29], [18, 29]], legJoints: [[[-3, 15], [-3, 29]], [[10, 15], [18, 29]]] },
      { caption: 'Ramène le pied gauche', shift: 7, lean: 3, arms: [[-15, 10], [15, 10]], armJoints: [[[-9, 6], [-15, 10]], [[9, 6], [15, 10]]], legs: [[22, 29], [18, 29]], legJoints: [[[12, 15], [22, 29]], [[10, 15], [18, 29]]] },
      { caption: 'Pas à gauche', shift: -7, lean: -3, arms: [[-18, 12], [18, 5]], armJoints: [[[-10, 5], [-18, 12]], [[11, 6], [18, 5]]], legs: [[-17, 29], [3, 29]], legJoints: [[[-9, 15], [-17, 29]], [[2, 15], [3, 29]]] }
    ]
  },
  {
    id: 'bart-simpson', name: 'Bart Simpson', aliases: ['bart'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: 'Variante glissée du Two-step',
    description: 'Pars du two-step avec rebond, puis fais glisser le pied qui rejoint l’autre. Tourne le bassin vers le déplacement ; les bras partent à l’opposé.',
    video: 'https://www.youtube.com/watch?v=lG7DS0oDcaQ', videoLabel: 'Voir le tutoriel',
    poses: [
      { caption: 'Plie et pars', view: 'profile', shift: 0, lean: 0, arms: [[-16, 5], [16, 5]], armJoints: [[[-9, 9], [-16, 5]], [[9, 9], [16, 5]]], legs: [[-5, 30], [5, 30]], legJoints: [[[5, 15], [-5, 30]], [[10, 15], [5, 30]]] },
      { caption: 'Glisse à droite', view: 'profile', shift: 8, lean: 4, arms: [[-25, -5], [-12, 8]], armJoints: [[[-13, 3], [-25, -5]], [[-2, 3], [-12, 8]]], legs: [[-3, 30], [23, 26]], legJoints: [[[4, 15], [-3, 30]], [[11, 13], [23, 26]]] },
      { caption: 'Glisse à gauche', view: 'profile', facing: 'left', shift: -8, lean: -4, arms: [[-25, -5], [-12, 8]], armJoints: [[[-13, 3], [-25, -5]], [[-2, 3], [-12, 8]]], legs: [[-3, 30], [23, 26]], legJoints: [[[4, 15], [-3, 30]], [[11, 13], [23, 26]]] }
    ]
  },
  {
    id: 'running-man', name: 'Running Man', aliases: ['running man step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Alterne les genoux : l’un monte pendant que l’autre pied glisse vers l’arrière, puis inverse. Les bras accompagnent comme une course sur place.',
    video: 'https://www.youtube.com/watch?v=lYpRasK4c9k', videoLabel: 'Voir le Running Man',
    poses: [
      { caption: 'Monte le genou droit', view: 'profile', shift: 0, lean: 2, arms: [[18, -4], [-17, 5]], armJoints: [[[8, -1], [18, -4]], [[-9, 1], [-17, 5]]], legs: [[-3, 31], [18, 2]], legJoints: [[[5, 15], [-3, 31]], [[11, -8], [18, 2]]] },
      { caption: 'Monte le genou gauche', view: 'profile', shift: 2, lean: 2, arms: [[-17, 5], [18, -4]], armJoints: [[[-9, 1], [-17, 5]], [[8, -1], [18, -4]]], legs: [[18, 2], [-3, 31]], legJoints: [[[11, -8], [18, 2]], [[5, 15], [-3, 31]]] },
      { caption: 'Monte le genou droit', view: 'profile', shift: 0, lean: 2, arms: [[18, -4], [-17, 5]], armJoints: [[[8, -1], [18, -4]], [[-9, 1], [-17, 5]]], legs: [[-3, 31], [18, 2]], legJoints: [[[5, 15], [-3, 31]], [[11, -8], [18, 2]]] }
    ]
  },
  {
    id: 'happy-feet', name: 'Happy Feet', aliases: ['heel toe'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Pivote le pied droit sur le talon et le gauche sur la pointe vers la droite, puis inverse. Garde les genoux souples ; les petits traits orange indiquent l’orientation des orteils.',
    video: 'https://www.youtube.com/watch?v=S0vC0Yfet-w', videoLabel: 'Voir Happy Feet',
    poses: [
      { caption: 'Pieds à plat', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-12, 29], [12, 29]], legJoints: [[[-8, 15], [-12, 29]], [[8, 15], [12, 29]]], footVectors: [[-3, 7], [3, 7]] },
      { caption: 'Pivote à droite', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-22, 33], [12, 29]], legJoints: [[[-12, 15], [-22, 33]], [[6, 15], [12, 29]]], footVectors: [[7, 3], [8, 2]] },
      { caption: 'Pivote à gauche', shift: 0, lean: 0, arms: [[-16, 10], [16, 10]], legs: [[-12, 29], [22, 33]], legJoints: [[[-6, 15], [-12, 29]], [[12, 15], [22, 33]]], footVectors: [[-8, 2], [-7, 3]] }
    ]
  }
];
