window.steps = [
  {
    id: 'two-step', name: 'Two-step', aliases: ['2-step', 'two step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Transfère le poids d’un côté à l’autre sur un rebond souple. Garde les genoux légers et laisse les épaules suivre le groove.',
    video: 'https://www.youtube.com/watch?v=xvmNPLFoDEc', videoLabel: 'Voir le 2-step',
    illustration: { src: 'illustrations/two-step.svg', view: "Pieds vus de face, en miroir",
      alt: "Fais un pas à droite et ramène le pied gauche. Fais un pas à gauche et ramène le pied droit." }
  },
  {
    id: 'bart-simpson', name: 'Bart Simpson', aliases: ['bart'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: 'Variante glissée du Two-step',
    description: 'Fléchis les genoux et tourne-les dans le sens du pas. Les bras partent à l’opposé. Rassemble les pieds avant de repartir de l’autre côté.',
    video: 'https://www.youtube.com/watch?v=lG7DS0oDcaQ', videoLabel: 'Voir le tutoriel',
    illustration: { src: 'illustrations/bart-simpson.svg', view: "De face, en miroir",
      alt: "Fais un pas à droite, genoux souples et bras vers la gauche. Rapproche les pieds et ramène les bras. Repars vers la gauche, bras vers la droite." }
  },
  {
    id: 'running-man', name: 'Running Man', aliases: ['running man step'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Monte un genou, puis pose ce pied devant pendant que l’autre glisse en arrière. Alterne les côtés. Les bras peuvent accompagner comme pour une course sur place.',
    video: 'https://www.youtube.com/watch?v=lYpRasK4c9k', videoLabel: 'Voir le Running Man',
    illustration: { src: 'illustrations/running-man.svg', view: "Vue de profil",
      alt: "Monte le genou droit en appui sur le pied gauche. Pose le droit devant pendant que le gauche glisse en arrière. Monte le genou gauche, puis inverse." }
  },
  {
    id: 'happy-feet', name: 'Happy Feet', aliases: ['heel toe'], style: 'hip-hop', styleLabel: 'Hip-hop / new-style', derivation: null,
    description: 'Pivote vers la droite autour du talon droit et de la pointe gauche. Reviens pieds à plat, puis inverse les appuis pour pivoter vers la gauche.',
    video: 'https://www.youtube.com/watch?v=S0vC0Yfet-w', videoLabel: 'Voir Happy Feet',
    illustration: { src: 'illustrations/happy-feet.svg', view: "Pieds vus de dessus",
      alt: "Pivote à droite en gardant la pointe gauche et le talon droit fixes. Reviens à plat, puis pivote à gauche autour du talon gauche et de la pointe droite." }
  },
  {
    id: 'smurf', name: 'Smurf', aliases: ['The Smurf', 'Old School Smurf'], styleLabel: 'Hip-hop / old school',
    description: 'Sur un petit rebond vers le bas, laisse un bras plié passer devant le buste, puis alterne. Les pieds restent presque en place dans la version de Buddha Stretch.',
    illustration: { src: 'illustrations/smurf.svg', view: 'Vue de face',
      alt: 'De face, fléchis légèrement les genoux sur le temps. Un bras plié passe devant le buste, puis l’autre prend le relais. Les pieds restent presque en place.' }
  },
  {
    id: 'the-prep', name: 'The Prep', aliases: ['Prep', 'Pretty Boys'], styleLabel: 'Hip-hop / old school',
    description: 'Bascule les épaules en arrière et lève le talon avant. Change de diagonale et inverse la hauteur des bras.',
    illustration: { src: 'illustrations/prep.svg', view: 'Vue de trois quarts',
      alt: 'Pose un pied devant en diagonale. Ramène les épaules vers l’arrière en levant le talon avant, un avant-bras haut et l’autre bas. Change de diagonale et inverse les bras.' }
  },
  {
    id: 'the-wop', name: 'The Wop', aliases: ['Wop'], styleLabel: 'Hip-hop / old school',
    description: 'Pieds écartés, fléchis les genoux en remontant les bras ensemble, puis redresse-toi en balançant les bras vers le bas.',
    illustration: { src: 'illustrations/wop.svg', view: 'Vue de face',
      alt: 'Pieds écartés, plie les genoux en levant les bras ensemble. Sur le rebond, redresse-toi en les balançant vers le bas.' }
  },
  {
    id: 'cabbage-patch', name: 'Cabbage Patch', styleLabel: 'Hip-hop / old school',
    description: 'Fais tourner les deux poings ensemble devant la poitrine. Garde le rebond et lève le talon du côté où passent les mains.',
    illustration: { src: 'illustrations/cabbage-patch.svg', view: 'Bras vus de dessus',
      alt: 'Les deux poings dessinent ensemble un cercle horizontal, de droite à devant puis à gauche avant de revenir près du buste.' }
  },
  {
    id: 'reebok', name: 'Reebok', styleLabel: 'Hip-hop / old school',
    description: 'Lève deux fois le genou droit vers l’intérieur. Enchaîne trois appuis droit, gauche, droit, puis recommence de l’autre côté.',
    illustration: { src: 'illustrations/reebok.svg', view: 'Bassin et appuis en miroir',
      alt: 'Deux levées du genou droit, puis trois appuis droit, gauche, droit. Recommence en levant le genou gauche.' }
  },
  {
    id: 'roger-rabbit', name: 'Roger Rabbit', styleLabel: 'Hip-hop / middle school',
    description: 'Lance un pied en arrière et pose-le derrière l’autre. Sur ce nouvel appui, libère le pied qui était devant, puis inverse.',
    illustration: { src: 'illustrations/roger-rabbit.svg', view: 'Vue de profil',
      alt: 'Lance le pied droit derrière toi, pose-le et libère le pied gauche. Lance alors le pied gauche derrière toi. Alterne sur un petit rebond.' }
  },
  {
    id: 'steve-martin', name: 'Steve Martin', styleLabel: 'Hip-hop / middle school',
    description: 'Alterne talon derrière et genou devant. Au demi-tour, la jambe qui donnait le coup de talon passe devant, genou levé.',
    illustration: { src: 'illustrations/steve-martin.svg', view: 'Profil et demi-tour',
      alt: 'Ramène le talon gauche derrière, monte le genou droit devant, puis ramène à nouveau le talon gauche derrière. Pivote pour monter le genou gauche devant, puis inverse.' }
  },
  {
    id: 'fila-rambo', name: 'Fila', aliases: ['Rambo', 'The Fila'], styleLabel: 'Hip-hop / old school',
    description: 'Pose le pied gauche devant en laissant descendre le bras droit. Reviens sur le pied droit et rebondis en frappant des mains au-dessus de la tête.',
    illustration: { src: 'illustrations/fila.svg', view: 'Vue de profil',
      alt: 'Face à droite, avance le pied gauche et laisse descendre le bras droit. Recule sur le pied droit, fais un petit saut et frappe des mains au-dessus de la tête.' }
  },
  {
    id: 'party-machine', name: 'Party Machine', styleLabel: 'Hip-hop / middle school',
    description: 'Sur le « et », replie la jambe libre derrière. Sur le temps, saute latéralement sur la jambe d’appui et lance la jambe libre sur le côté. Alterne.',
    illustration: { src: 'illustrations/party-machine.svg', view: 'Jambes de face, en miroir',
      alt: 'Saute sur le pied droit, le gauche plié derrière. Saute vers la droite en lançant le gauche sur le côté. Inverse les deux appuis de l’autre côté.' }
  },
  {
    id: 'biz-markie', name: 'Biz Markie', styleLabel: 'Hip-hop / middle school',
    description: 'Saute en levant un bras, puis balaie en diagonale devant le buste. À la réception, relève les épaules, puis recommence de l’autre côté.',
    illustration: { src: 'illustrations/biz-markie.svg', view: 'Corps entier, de face',
      alt: 'Saute bras levé, balaie ce bras en diagonale et remonte les épaules à la réception. Alterne les côtés.' }
  },
  {
    id: 'patty-duke', name: 'Patty Duke', styleLabel: 'Hip-hop / old school',
    description: 'Dans cette variante, tape de la pointe devant, puis fais un petit saut sur le pied d’appui en balançant un bras, main ouverte. Pivote légèrement et inverse.',
    illustration: { src: 'illustrations/patty-duke.svg', view: 'Vue de trois quarts',
      alt: 'Pointe devant. Petit saut sur le pied arrière avec un balancement du bras, main ouverte. Pivote et fais de même de l’autre côté.' }
  },
  {
    id: 'harlem-shake', name: 'Harlem Shake', aliases: ['Harlem Shake original'], styleLabel: 'Hip-hop / new school',
    description: 'Sur un petit rebond, alterne les accents d’épaules vers l’avant. Garde les bras souples et laisse-les suivre le buste.',
    illustration: { src: 'illustrations/harlem-shake.svg', view: 'Épaules et buste',
      alt: 'Une épaule avance pendant que l’autre recule. Inverse rapidement et laisse les bras suivre le buste.' }
  },
  {
    id: 'humpty-dance', name: 'Humpty Dance', styleLabel: 'Hip-hop / middle school',
    description: 'Sur le « et », saute et croise le pied droit devant le gauche. Rouvre au temps 1 et plie les genoux à la réception. Continue à rebondir avec le bassin.',
    illustration: { src: 'illustrations/humpty-dance.svg', view: 'De face, en miroir',
      alt: 'Pied droit croisé devant le gauche, puis pieds écartés avec les genoux fléchis à la réception. Petits rebonds du bassin avant de reprendre.' }
  },
  {
    id: 'dougie', name: 'Dougie', styleLabel: 'Hip-hop / new school',
    description: 'Balance ton poids d’un côté puis de l’autre, les genoux souples. Tu peux faire passer une main au-dessus de la tête pendant le balancement.',
    illustration: { src: 'illustrations/dougie.svg', view: 'De face, en miroir',
      alt: 'Charge un pied puis l’autre en gardant les genoux souples. Sur le second appui, une main balaie au-dessus de la tête.' }
  },
  {
    id: 'bankhead-bounce', name: 'Bankhead Bounce', styleLabel: 'Hip-hop / new school',
    description: 'Fais rebondir les épaules vers le haut, avant-bras fléchis près du visage ; croise les bras sur un temps puis ouvre-les sur le suivant.',
    illustration: { src: 'illustrations/bankhead-bounce.svg', view: 'Buste de face, en deux temps',
      alt: 'Deux dessins de face : épaules relevées, bras croisés devant le buste puis ouverts avec les poings près du visage.' }
  },
  {
    id: 'a-town-stomp-atl-stomp', name: 'A-Town Stomp', aliases: ['ATL Stomp'], styleLabel: 'Hip-hop / new school',
    description: 'Deux petits kicks en diagonale d’un côté, saut latéral et réception des deux pieds, puis miroir de l’autre côté.',
    illustration: { src: 'illustrations/a-town-stomp-atl-stomp.svg', view: 'De face, en alternance',
      alt: 'Trois phases du A-Town Stomp : deux kicks vers la droite, réception sautée sur les deux pieds, puis deux kicks vers la gauche.' }
  },
  {
    id: 'walk-it-out', name: 'Walk It Out', styleLabel: 'Hip-hop / new school',
    description: 'Pas droit puis gauche avec un rebond bas : à chaque appui, les deux pointes, les genoux et le bassin pivotent du côté du pas.',
    illustration: { src: 'illustrations/walk-it-out.svg', view: 'De face, en miroir',
      alt: 'Deux positions du Walk It Out : pas droit et pivot des deux pieds à droite, puis pas gauche et pivot des deux pieds à gauche, genoux fléchis.' }
  },
  {
    id: 'monastery-monestary', name: 'Monastery', aliases: ['Monestary'], styleLabel: 'Hip-hop / new school',
    description: 'Sur un two-step rebondi, pose un pied de côté puis touche de l’autre en rentrant le genou ; accompagne ce genou avec les bras et l’épaule, puis inverse.',
    illustration: { src: 'illustrations/monastery-monestary.svg', view: 'Corps entier de face, en miroir',
      alt: 'Deux dessins de face : pas de côté avec genou du pied touché tourné vers l’intérieur, bras et épaule accompagnant, puis mouvement inversé.' }
  },
  {
    id: 'shoulder-lean', name: 'Shoulder Lean', styleLabel: 'Hip-hop / new school',
    description: 'Penche le buste d’un côté en levant l’épaule de ce côté, puis inverse au rythme du rebond.',
    illustration: { src: 'illustrations/shoulder-lean.svg', view: 'De face, en miroir',
      alt: 'Deux phases du Shoulder Lean : le buste penche à droite avec l’épaule droite haute, puis à gauche avec l’épaule gauche haute.' }
  },
  {
    id: 'chicken-noodle-soup', name: 'Chicken Noodle Soup', styleLabel: 'Hip-hop / new school',
    description: 'Alterne les coups de pied de côté, les poings poussés vers le bas, puis croise les poignets devant toi.',
    illustration: { src: 'illustrations/chicken-noodle-soup.svg', view: 'De face, en alternance',
      alt: 'Trois phases du Chicken Noodle Soup : pied droit lancé de côté et poings bas, poignets croisés devant le corps, puis pied gauche lancé de côté.' }
  },
  {
    id: 'rockaway-lean-back', name: 'Rockaway', aliases: ['Lean Back'], styleLabel: 'Hip-hop / new school',
    description: 'Bras croisés et appuis au sol, rejette légèrement l’épaule droite et le buste en arrière sur le temps, puis reviens au centre.',
    illustration: { src: 'illustrations/rockaway-lean-back.svg', view: 'De profil',
      alt: 'Deux vues de profil du Rockaway : bras croisés au centre, puis épaule droite et buste légèrement rejetés en arrière.' }
  },
  {
    id: 'run-it', name: 'Run It', styleLabel: 'Hip-hop / new school',
    description: 'Avance un pied sur la pointe, fais pivoter les deux talons vers l’extérieur en pliant les genoux, ramène les talons droits puis recommence avec l’autre pied.',
    illustration: { src: 'illustrations/run-it.svg', view: 'Pieds vus de dessus, en trois temps',
      alt: 'Trois dessins vus de dessus : un pied avance, les talons tournent vers l’extérieur autour des pointes, puis l’autre pied avance.' }
  },
  {
    id: 'cat-daddy', name: 'Cat Daddy', styleLabel: 'Hip-hop / new school',
    description: 'Lance chaque bras devant le buste en penchant du côté opposé, puis fais deux cercles des bras en descendant sur les genoux.',
    illustration: { src: 'illustrations/cat-daddy.svg', view: 'De face, en trois temps',
      alt: 'Trois phases du Cat Daddy : bras droit devant le buste, bras gauche, puis cercles des deux bras avec flexion des genoux.' }
  },
  {
    id: 'brooklyn-bounce-bk-bounce', name: 'Brooklyn Bounce', aliases: ['BK Bounce', 'The Brooklyn'], styleLabel: 'Hip-hop / middle school', derivation: 'Variante du Criss Cross',
    description: 'Petit rebond : ouvre les pieds, croise-les dans un saut souple, tourne les pointes vers l’intérieur puis rouvre.',
    illustration: { src: 'illustrations/brooklyn-bounce-bk-bounce.svg', view: 'Jambes de face',
      alt: 'Trois positions du Brooklyn Bounce : pieds écartés, jambes croisées en réception fléchie, puis pointes rapprochées avant de rouvrir.' }
  },
  {
    id: 'bernie-lean', name: 'Bernie Lean', styleLabel: 'Hip-hop / new school',
    description: 'Penche le buste et la tête en arrière, puis laisse les bras tourner librement en alternance pendant de petits pas souples.',
    illustration: { src: 'illustrations/bernie-lean.svg', view: 'De profil',
      alt: 'Deux phases du Bernie Lean : buste et tête en arrière, bras relâchés qui tournent à tour de rôle, genoux souples.' }
  },
  {
    id: 'tone-wop-tone-whop', name: 'Tone Wop', aliases: ['Tone Whop'], styleLabel: 'Litefeet',
    description: 'Fais un petit pas, pivote le pied sur un rebond, puis reviens ; ouvre les bras avant de les ramener pour claquer des doigts sur la torsion. Alterne les côtés.',
    illustration: { src: 'illustrations/tone-wop-tone-whop.svg', view: 'Corps entier de face, en trois temps',
      alt: 'Trois dessins de face : petit pas avec bras ouverts, torsion du pied avec mains rapprochées pour un claquement, puis retour et changement de côté.' }
  }
];

// Noms du répertoire à illustrer. Les entrées terminées sont prises dans la liste ci-dessus.
const catalogGroups = {
  'Bases et grooves': 'Bounce|Rock|Roll|Skate|Step Touch|Cross Step|Kick Ball Change|Grapevine|Heel-Toe',
  'Hip-hop / old school': 'The Prep|The Wop|Cabbage Patch|Reebok|Gucci|Fila (Rambo)|Patty Duke|Pee-wee Herman|The Freak|Gigolo|James Brown (Good Foot)|Baseball Bat|Roller Skate|Holly Pill',
  'Hip-hop / middle school': 'Roger Rabbit|Steve Martin|Party Machine|Brooklyn Bounce (BK Bounce)|Criss Cross|Biz Markie|The Alf|Robocop|Humpty Dance|Kid ’n Play Kick Step|Bobby Brown (Cold Duck)|Hammer Dance|New School Smurf|Tootsee Roll|Shamrock|Wu-Tang',
  'Hip-hop / new school': 'Harlem Shake|Bankhead Bounce|A-Town Stomp (ATL Stomp)|Monastery (Monestary)|Chicken Head|Walk It Out|Run It|Chicken Noodle Soup|Tone Wop (Tone Whop)|Shoulder Lean|Rockaway (Lean Back)|Motorcycle (Yung Joc)|Swag Surfin’|Crank That (Soulja Boy)|Crank Dat Batman|Pop, Lock & Drop It|Stanky Legg|Dougie|Cat Daddy|Bernie Lean',
  'Danses sociales récentes': 'Whip|Nae Nae|Milly Rock|Shmoney Dance|Dab|Hit the Quan|Hit Dem Folks|Shoot|Billy Bounce|Woah|Bust Down|Juju on That Beat|Floss|Futsal Shuffle|Toosie Slide|Griddy',
  Litefeet: 'Bad One|Rev Up|Lock In|Tic Tac Toe|Ankle Breaks|Aunt Jackie',
  'Jerkin’': 'Jerk|Reject|Pin Drop|Dip',
  Drill: 'Woo Walk|Get Sturdy',
  'Emprunts au dancehall': 'Butterfly|Pepper Seed'
};

for (const [styleLabel, names] of Object.entries(catalogGroups)) {
  for (const name of names.split('|')) {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    if (!window.steps.some(step => step.id === id)) {
      window.steps.push({ id, name, styleLabel });
    }
  }
}
