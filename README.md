# Steps — Répertoire de danse

Petit site statique de pas hip-hop/new-style. Les fiches sont dans `steps.js` et peuvent être enrichies directement.

## Ouvrir le site

Ouvrir `index.html` dans un navigateur moderne. Le site n’a pas besoin de serveur ni d’installation. Une connexion internet est nécessaire pour les polices personnalisées et les vidéos YouTube.

## Ajouter un pas

Copier une entrée existante dans `steps.js`, choisir un `id` unique, puis ajouter un nom, le style hip-hop/new-style, une description, une éventuelle dérivation, une URL vidéo et trois poses. Chaque pose indique une légende et la position approximative des bras et des jambes sous forme de petits vecteurs de traits. La vue est de face par défaut ; mettre `view: 'profile'` quand un angle de côté explique mieux l’appui ou le déplacement, puis `facing: 'left'` si la silhouette doit regarder à gauche (à droite par défaut). `armJoints` et `legJoints` sont des chaînes de points `[dx, dy]` — une chaîne pour chaque côté, mesurée depuis l’épaule ou la hanche — et peuvent contenir autant de points d’articulation que le geste demande. Sans ces chaînes, les coudes et genoux sont placés automatiquement. Les champs `video` et `derivation` peuvent rester vides lorsqu’ils ne sont pas établis.

Pour montrer un pivot de pied, une pose peut préciser `footVectors` : un vecteur `[dx, dy]` par pied, depuis la cheville jusqu’à la pointe. Les silhouettes sont des repères simplifiés pour mémoriser l’ordre des positions ; elles ne remplacent pas une démonstration complète. Les noms et variantes peuvent changer d’une scène ou d’un danseur à l’autre.

## Partager

Le dossier peut être publié comme site statique après avoir choisi si le lien doit être public ou réservé au groupe. Aucun hébergement n’est configuré ni aucune page publiée pour le moment. Le partage local du fichier `index.html` fonctionne aussi, mais les liens externes et les polices nécessitent une connexion internet.

## Premières références

- [Two-step hip-hop — Howcast sur YouTube](https://www.youtube.com/watch?v=xvmNPLFoDEc)
- [Bart Simpson — tutoriel sur YouTube](https://www.youtube.com/watch?v=lG7DS0oDcaQ)
- [Running Man — Howcast sur YouTube](https://www.youtube.com/watch?v=lYpRasK4c9k)
- [Happy Feet — tutoriel sur YouTube](https://www.youtube.com/watch?v=S0vC0Yfet-w)
- [Description du Bart Simpson par STEEZY](https://www.steezy.co/posts/how-to-do-the-bart-simpson)
