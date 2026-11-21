# Plan d’implémentation : Répertoire de pas hip-hop V1

**Spécification source :** [docs/specs/hip-hop-steps-v1.md](../docs/specs/hip-hop-steps-v1.md)  
**Suite du projet :** [Enrichissement du répertoire illustré](illustrations.md).

## Aperçu

Créer un petit site statique en français, sans dépendance obligatoire, qui présente des fiches de pas consultables par recherche. Les données resteront séparées de l’interface et les silhouettes seront des schémas SVG simples et accessibles. La V1 couvre le hip-hop/new-style uniquement. Le site fonctionnera localement dans un navigateur ; son déploiement public ou privé pourra être décidé après la V1.

## Décisions d’architecture

- **Site statique HTML, CSS et JavaScript natifs :** adapté à un répertoire consultable, simple à modifier et sans serveur ni compte requis.
- **Données séparées dans un fichier JavaScript ou JSON :** chaque entrée garde un identifiant, ses noms, son style, ses éventuelles dérivations, son URL vidéo et les poses illustrées.
- **Illustrations en SVG :** choisir l’angle ou le détail le plus lisible pour chaque pas. Le site accepte les dessins autonomes et les poses articulées intégrées.
- **Commencer hors ligne pour la vidéo :** liens YouTube ajoutés au fil de la vérification ; le dessin et les informations doivent suffire à comprendre l’entrée.
- **Partage :** livrer une page locale fonctionnelle ; sélectionner un hébergement et une visibilité avant publication si nécessaire.

## Ordre de réalisation

### Phase 1 : socle et premier exemple

1. Définir la structure de données et les conventions des fiches.
2. Créer la page statique, son style sobre et le composant de fiche.
3. Ajouter le Two-step et le Bart Simpson avec séquences de 2–3 poses en traits.
4. Représenter les articulations de base, accepter des articulations supplémentaires par pose et permettre l’orientation de profil.

**Point de contrôle :** les deux fiches s’affichent clairement sur mobile et ordinateur, et une personne peut comprendre les poses sans ouvrir une vidéo.

### Phase 2 : recherche et enrichissement

5. Ajouter la recherche par nom.
6. Compléter le premier lot avec d’autres pas simples de hip-hop/new-style.
7. Ajouter les liens YouTube vérifiés quand ils sont disponibles, sans bloquer l’ajout des fiches sur ce point.

**Point de contrôle :** rechercher un nom ou une variante fonctionne, y compris avec des fiches sans vidéo ou sans dérivation connue.

### Phase 3 : accessibilité et remise

7. Vérifier l’usage au clavier, les libellés accessibles, les liens et les petits écrans ; corriger les problèmes visibles.
8. Ajouter un README bref expliquant comment ouvrir et enrichir le répertoire.

**Point de contrôle final :** tous les critères de la spécification sont couverts et le mode de partage est documenté, sans publication publique sans choix explicite de visibilité.

## Risques et réponses

| Risque | Impact | Réponse |
|---|---|---|
| Noms ou filiations variables selon les communautés | Attribution trompeuse | Documenter les variantes et laisser la filiation vide ou incertaine lorsqu’elle n’est pas établie. |
| Dessins trop abstraits pour aider à reproduire le pas | Valeur d’entraînement faible | Garder 2–3 poses distinctes, utiliser une flèche seulement si elle clarifie la direction, et affiner au fil de l’usage. |
| Liens vidéo indisponibles ou de qualité inégale | Fiche moins utile | Traiter la vidéo comme complément ; vérifier les URL et ne pas retarder les fiches pour cette raison. |
| Partage difficile depuis un fichier local | Groupe ne peut pas facilement consulter | Livrer un site statique autonome et choisir ensuite un hébergement en fonction de la visibilité souhaitée. |

## Questions ouvertes

- Le partage doit-il être privé au groupe ou accessible publiquement ? À décider avant le déploiement.
- Après le Two-step et le Bart Simpson, quels pas simples précis ajouter ? Le choix peut se faire à l’enrichissement du catalogue.

## Liste de tâches

La liste de tâches détaillée et vérifiable est dans [tasks/todo.md](todo.md).
