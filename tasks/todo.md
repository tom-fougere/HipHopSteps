# Tâches — Répertoire de pas hip-hop V1

## Phase 1 : socle et premier exemple

### Tâche 1 : Définir le format des fiches

**Description :** créer un modèle de données cohérent et deux entrées initiales (Two-step et Bart Simpson), en gardant dérivations et vidéos optionnelles.

**Critères d’acceptation :**
- [x] Une fiche décrit identifiant, nom, variantes éventuelles, style, dérivation éventuelle, URL vidéo et poses.
- [x] Le modèle peut représenter une dérivation ou une vidéo inconnue sans valeur inventée.
- [x] Les entrées initiales contiennent exactement 2–3 poses chacune.

**Vérification :** charger les données dans le navigateur ou les valider avec une vérification légère ; contrôler les champs des deux fiches.
**Dépendances :** aucune.
**Fichiers probables :** `data/steps.js` ou `data/steps.json`.
**Taille estimée :** petite.

### Tâche 2 : Créer la page statique et ses fiches

**Description :** construire l’interface lisible qui charge les données et rend chaque entrée, y compris les schémas SVG en traits.

**Critères d’acceptation :**
- [x] Le site s’ouvre localement sans serveur applicatif.
- [x] Les fiches montrent le nom, le style, la dérivation quand elle est connue et le lien vidéo quand il existe.
- [x] Chaque fiche rend ses 2–3 silhouettes et des flèches éventuelles dans un SVG accessible.

**Vérification :** ouvrir la page dans un navigateur et vérifier les deux exemples, avec champs facultatifs présents et absents.
**Dépendances :** tâche 1.
**Fichiers probables :** `index.html`, `styles.css`, `app.js`, `assets/steps/`.
**Taille estimée :** moyenne.

**Point de contrôle après tâches 1–2 :** confirmer la compréhension visuelle des premières fiches sur écran mobile et large.

## Phase 2 : recherche et enrichissement

### Tâche 3 : Ajouter la recherche et les filtres

**Description :** permettre de chercher par nom et de filtrer le répertoire par style.

**Critères d’acceptation :**
- [x] La recherche trouve un pas par son nom et ses variantes.
- [x] Les trois styles peuvent être sélectionnés indépendamment.
- [x] Un état vide clair apparaît quand aucun pas ne correspond.

**Vérification :** essayer recherche exacte, recherche partielle, chaque filtre de style et combinaison recherche/filtre.
**Dépendances :** tâche 2.
**Fichiers probables :** `index.html`, `app.js`, `styles.css`.
**Taille estimée :** petite.

### Tâche 4 : Compléter un premier lot de pas simples

**Description :** ajouter des pas simples représentatifs du hip-hop/new-style, popping et locking, en complément du Two-step et du Bart Simpson.

**État du premier lot :** Two-step, Bart Simpson, Running Man, Happy Feet, Fresno, Pop / hit, Wave, Dime stop, Lock, Point, Wrist roll, Muscle man, Pace, Scooby Doo et Scoobot.

**Critères d’acceptation :**
- [x] Les trois styles inclus ont des entrées représentatives.
- [x] Chaque entrée ajoutée a un nom, un style et une séquence de 2–3 poses compréhensible.
- [x] Les relations de dérivation incertaines ne sont pas affirmées comme des faits.

**Vérification :** parcourir chaque fiche et filtrer les entrées par style ; vérifier les références disponibles.
**Dépendances :** tâches 1–3.
**Fichiers probables :** `data/steps.js` ou `data/steps.json`, `assets/steps/` si les dessins sont séparés.
**Taille estimée :** moyenne.

### Tâche 5 : Ajouter les vidéos YouTube vérifiées

**Description :** compléter progressivement les entrées avec des démonstrations vidéo YouTube pertinentes.

**Critères d’acceptation :**
- [ ] Les liens présents ouvrent une démonstration qui correspond au nom du pas.
- [ ] Les fiches sans lien restent utilisables et ne présentent pas de lien factice.
- [ ] L’utilisateur comprend que la vidéo est un complément à la séquence visuelle.

**Vérification :** ouvrir chaque URL ajoutée et contrôler le pas montré.
**État :** liens YouTube ajoutés pour Two-step, Bart Simpson, Fresno, Running Man, Happy Feet et Scoobot ; vérification vidéo encore à faire et liens des autres fiches à ajouter progressivement.
**Dépendances :** tâches 1–4.
**Fichiers probables :** `data/steps.js` ou `data/steps.json`.
**Taille estimée :** moyenne, dépend du nombre de références disponibles.

**Point de contrôle après tâches 3–5 :** essayer recherche, filtres, cas incomplets et navigation vidéo sur les trois styles.

## Phase 3 : accessibilité et remise

### Tâche 6 : Vérifier la présentation et l’accessibilité

**Description :** corriger les problèmes d’affichage responsive, de contraste, de clavier et de description des schémas.

**Critères d’acceptation :**
- [ ] Contrôles utilisables au clavier avec focus visible.
- [ ] Les schémas ont un titre ou une description compréhensible par lecteur d’écran.
- [ ] Les filtres et les fiches restent lisibles sur petit et grand écran.

**Vérification :** navigation clavier et inspection manuelle sur largeur mobile et ordinateur.
**Dépendances :** tâches 2–5.
**Fichiers probables :** `index.html`, `styles.css`, `app.js`.
**Taille estimée :** petite.

### Tâche 7 : Documenter l’ouverture et le partage

**Description :** expliquer comment ouvrir la page, ajouter un pas et préparer un partage selon la visibilité décidée.

**Critères d’acceptation :**
- [x] Un README décrit comment utiliser et enrichir le site.
- [x] Les options de partage et leurs implications de visibilité sont indiquées.
- [x] Aucun déploiement n’est effectué avant le choix de visibilité.

**Vérification :** suivre le README depuis un nouvel onglet ou navigateur et vérifier que les étapes sont suffisantes.
**Dépendances :** tâches 1–6.
**Fichiers probables :** `README.md`.
**Taille estimée :** petite.

**Point de contrôle final :** vérifier tous les critères de `docs/specs/hip-hop-steps-v1.md` et confirmer le mode de partage avant déploiement.
