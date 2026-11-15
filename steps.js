/* Each pose stores short limb vectors from the shoulder and hips for the SVG stick figure. */
window.steps = [
  {
    id: 'two-step', name: 'Two-step', aliases: ['2-step', 'two step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Transfère le poids d’un côté à l’autre sur un rebond souple. Garde les genoux légers et laisse les épaules suivre le groove.',
    video: 'https://www.youtube.com/watch?v=xvmNPLFoDEc',
    videoLabel: 'Voir le 2-step',
    poses: [
      { caption: 'Départ', shift: 0, lean: 0, arms: [[-17, 8], [17, 8]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Appui à droite', shift: 8, lean: 3, arms: [[-18, 4], [19, 12]], legs: [[-4, 31], [24, 28]] },
      { caption: 'Appui à gauche', shift: -8, lean: -3, arms: [[-19, 12], [18, 4]], legs: [[-24, 28], [4, 31]] }
    ]
  },
  {
    id: 'bart-simpson', name: 'Bart Simpson', aliases: ['bart'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: 'Variante glissée du Two-step',
    description: 'Pars d’un two-step avec rebond, puis fais glisser le pied qui rejoint l’autre. Tourne le bassin vers le déplacement ; les bras partent à l’opposé.',
    video: 'https://www.youtube.com/watch?v=lG7DS0oDcaQ', videoLabel: 'Voir le tutoriel',
    poses: [
      { caption: 'Plie et pars', shift: 0, lean: 0, arms: [[-18, 2], [18, 2]], legs: [[-10, 30], [10, 30]] },
      { caption: 'Glisse à droite', shift: 9, lean: 7, arms: [[-27, -7], [-13, 8]], legs: [[-2, 31], [25, 26]] },
      { caption: 'Glisse à gauche', shift: -9, lean: -7, arms: [[13, 8], [27, -7]], legs: [[-25, 26], [2, 31]] }
    ]
  },
  {
    id: 'fresno', name: 'Fresno', aliases: ['the fresno'], style: 'popping', styleLabel: 'Popping', derivation: null,
    description: 'Balance le poids d’un pied à l’autre avec un léger angle du corps. Ajoute un hit net dans les bras au moment de chaque appui.',
    video: 'https://www.youtube.com/watch?v=8sb1gmkNf0k', videoLabel: 'Voir le Fresno',
    poses: [
      { caption: 'Centre', shift: 0, lean: 0, arms: [[-20, 8], [20, 8]], legs: [[-14, 28], [14, 28]] },
      { caption: 'Hit à droite', shift: 8, lean: 4, arms: [[-25, -12], [25, -12]], legs: [[-7, 30], [23, 27]] },
      { caption: 'Hit à gauche', shift: -8, lean: -4, arms: [[-25, -12], [25, -12]], legs: [[-23, 27], [7, 30]] }
    ]
  },
  {
    id: 'pop-hit', name: 'Pop / hit', aliases: ['pop', 'hit', 'contraction'], style: 'popping', styleLabel: 'Popping', derivation: null,
    description: 'Relâche, puis contracte brièvement les muscles pour créer un accent visible. Le hit est précis et bref ; le reste du corps reste contrôlé.',
    video: null,
    poses: [
      { caption: 'Relâche', shift: 0, lean: 0, arms: [[-20, 12], [20, 12]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Hit', shift: 0, lean: 0, arms: [[-26, -8], [26, -8]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Relâche', shift: 0, lean: 0, arms: [[-20, 12], [20, 12]], legs: [[-12, 29], [12, 29]] }
    ]
  },
  {
    id: 'wave', name: 'Wave', aliases: ['arm wave', 'vague'], style: 'popping', styleLabel: 'Popping', derivation: null,
    description: 'Fais voyager une vague d’une main à l’autre : poignet, coude, épaule, puis le bras opposé. Une articulation mène à la suivante.',
    video: null,
    poses: [
      { caption: 'Poignet', shift: 0, lean: 0, arms: [[-26, -3], [18, 14]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Coude', shift: 0, lean: 0, arms: [[-24, 11], [22, -8]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Épaule', shift: 0, lean: 0, arms: [[-17, -9], [27, 4]], legs: [[-12, 29], [12, 29]] }
    ]
  },
  {
    id: 'lock', name: 'Lock', aliases: ['locking stop'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Passe d’un mouvement ouvert à un arrêt net : bras pliés et position tenue un instant. Le contraste entre mouvement et pause fait le lock.',
    video: null,
    poses: [
      { caption: 'Ouvert', shift: 0, lean: 0, arms: [[-22, -12], [22, -12]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Verrouille', shift: 0, lean: 0, arms: [[-22, 3], [22, 3]], legs: [[-14, 28], [14, 28]] },
      { caption: 'Tiens le lock', shift: 0, lean: 0, arms: [[-20, 4], [20, 4]], legs: [[-14, 28], [14, 28]] }
    ]
  },
  {
    id: 'point', name: 'Point', aliases: ['pointing', 'uncle sam point'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Marque une direction avec un bras tendu et un geste franc. Le regard et le torse appuient le point, puis tu reviens dans le groove.',
    video: null,
    poses: [
      { caption: 'Prépare', shift: 0, lean: 0, arms: [[-18, 10], [18, 8]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Pointe', shift: 0, lean: 2, arms: [[-18, 10], [29, -8]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Relâche', shift: 0, lean: 0, arms: [[-18, 8], [18, 8]], legs: [[-12, 29], [12, 29]] }
    ]
  },
  {
    id: 'wrist-roll', name: 'Wrist roll', aliases: ['wrist rolls', 'roulé de poignet'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Fais rouler les poignets l’un autour de l’autre avec une rotation continue des avant-bras. Garde le mouvement lisible et rebondis dans le rythme.',
    video: null,
    poses: [
      { caption: 'Mains devant', shift: 0, lean: 0, arms: [[-15, 12], [15, 12]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Croise', shift: 0, lean: 0, arms: [[-5, 15], [5, 15]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Déroule', shift: 0, lean: 0, arms: [[-15, 12], [15, 12]], legs: [[-12, 29], [12, 29]] }
    ]
  },
  {
    id: 'running-man', name: 'Running Man', aliases: ['running man step'], style: 'hip-hop', styleLabel: 'Hip-hop / party dance', derivation: null,
    description: 'Alterne les genoux : l’un monte pendant que l’autre pied glisse vers l’arrière, puis inverse. Les bras accompagnent comme une course sur place.',
    video: 'https://www.youtube.com/watch?v=lYpRasK4c9k', videoLabel: 'Voir le Running Man',
    poses: [
      { caption: 'Pied au sol', shift: 0, lean: 0, arms: [[-18, 0], [18, 10]], legs: [[-12, 30], [14, 14]] },
      { caption: 'Monte le genou', shift: 2, lean: 0, arms: [[-18, 10], [18, 0]], legs: [[-12, 14], [14, 30]] },
      { caption: 'Inverse', shift: 0, lean: 0, arms: [[-18, 0], [18, 10]], legs: [[-12, 30], [14, 14]] }
    ]
  },
  {
    id: 'happy-feet', name: 'Happy Feet', aliases: ['heel toe'], style: 'hip-hop', styleLabel: 'Hip-hop / party dance', derivation: null,
    description: 'Fais pivoter talon et pointe en alternance, avec de petits changements d’appui. Le jeu des pieds reste léger ; ajoute le groove du haut du corps ensuite.',
    video: 'https://www.youtube.com/watch?v=S0vC0Yfet-w', videoLabel: 'Voir Happy Feet',
    poses: [
      { caption: 'Pieds parallèles', shift: 0, lean: 0, arms: [[-18, 10], [18, 10]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Pointe ouverte', shift: 0, lean: 0, arms: [[-18, 10], [18, 10]], legs: [[-22, 25], [8, 30]] },
      { caption: 'Inverse l’appui', shift: 0, lean: 0, arms: [[-18, 10], [18, 10]], legs: [[-8, 30], [22, 25]] }
    ]
  },
  {
    id: 'dime-stop', name: 'Dime stop', aliases: ['dime stopping'], style: 'popping', styleLabel: 'Popping', derivation: null,
    description: 'Arrête le mouvement net, comme si le corps était immobilisé en un instant, puis repars proprement. Le contraste se joue dans la précision de l’arrêt.',
    video: null,
    poses: [
      { caption: 'En mouvement', shift: -5, lean: -3, arms: [[-24, 8], [20, -4]], legs: [[-16, 27], [15, 29]] },
      { caption: 'Arrêt net', shift: 0, lean: 0, arms: [[-22, -10], [22, 7]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Repars', shift: 5, lean: 3, arms: [[-20, -4], [24, 8]], legs: [[-15, 29], [16, 27]] }
    ]
  },
  {
    id: 'muscle-man', name: 'Muscle man', aliases: ['uplock', 'up lock'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Lance les deux bras vers le haut avec une énergie ample, puis marque une position forte. Le mouvement peut servir d’annonce avant un lock.',
    video: null,
    poses: [
      { caption: 'Bras bas', shift: 0, lean: 0, arms: [[-18, 12], [18, 12]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Monte les bras', shift: 0, lean: 0, arms: [[-23, -16], [23, -16]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Marque', shift: 0, lean: 0, arms: [[-18, -13], [18, -13]], legs: [[-14, 28], [14, 28]] }
    ]
  },
  {
    id: 'pace', name: 'Pace', aliases: ['keeping time'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Marque le tempo avec un bras envoyé sur le côté, puis alterne. Le geste sert aussi à relier les autres mouvements au rythme.',
    video: null,
    poses: [
      { caption: 'Centre', shift: 0, lean: 0, arms: [[-18, 9], [18, 9]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Bras à droite', shift: 0, lean: 0, arms: [[-18, 9], [30, 0]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Bras à gauche', shift: 0, lean: 0, arms: [[-30, 0], [18, 9]], legs: [[-12, 29], [12, 29]] }
    ]
  },
  {
    id: 'scooby-doo', name: 'Scooby Doo', aliases: ['scooby-doo step'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Lance les bras dans un uplock, puis enchaîne un kick et un pas. Garde l’accent du haut du corps lisible pendant le changement de pied.',
    video: null,
    poses: [
      { caption: 'Uplock', shift: 0, lean: 0, arms: [[-23, -16], [23, -16]], legs: [[-12, 29], [12, 29]] },
      { caption: 'Kick', shift: 4, lean: 3, arms: [[-18, 5], [20, -10]], legs: [[-12, 29], [24, 18]] },
      { caption: 'Change de pied', shift: -2, lean: 0, arms: [[-20, -10], [18, 5]], legs: [[-20, 18], [12, 29]] }
    ]
  },
  {
    id: 'scoobot', name: 'Scoobot', aliases: ['scoo bot'], style: 'locking', styleLabel: 'Locking', derivation: null,
    description: 'Fais un pas avec une jambe et un bras en opposition, change de côté, puis ajoute le croisé et le roulé de poignets selon la variante.',
    video: 'https://www.youtube.com/watch?v=vuPZ6UW4sKQ', videoLabel: 'Voir le Scoobot',
    poses: [
      { caption: 'Bras et jambe', shift: 0, lean: 0, arms: [[-20, 8], [25, -4]], legs: [[-12, 29], [20, 25]] },
      { caption: 'Change de côté', shift: 3, lean: 0, arms: [[-25, -4], [20, 8]], legs: [[-20, 25], [12, 29]] },
      { caption: 'Croise et roule', shift: 0, lean: 0, arms: [[-12, 5], [12, 5]], legs: [[-12, 29], [12, 29]] }
    ]
  }
];
