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
