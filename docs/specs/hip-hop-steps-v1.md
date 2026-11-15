# Spécification : Répertoire de pas hip-hop — V1

**Statut :** approuvée  
**Version :** V1

## Objectif

Construire une page web légère qui aide une personne à retrouver le nom d’un pas de danse, identifier son style et comprendre le mouvement afin de s’entraîner. La page doit pouvoir être partagée avec un groupe de danse amateur.

La V1 couvre uniquement le hip-hop / new-style. Elle constitue un répertoire de référence personnel, et non un cours structuré.

## Utilisateurs et scénarios

- Comme danseur, je peux retrouver un pas par son nom ou son nom alternatif.
- Comme danseur, je peux voir si un pas dérive d’un autre pas connu.
- Comme danseur, je peux ouvrir une vidéo de démonstration pour m’entraîner.
- Comme danseur, je peux comprendre rapidement l’idée du mouvement à partir de 2–3 silhouettes en traits.
- Comme propriétaire du répertoire, je peux partager la page avec mon groupe amateur.

## Contenu d’une fiche

Chaque entrée contient :

- nom du pas ;
- style associé : hip-hop / new-style ;
- relation de dérivation, si connue, avec le nom du pas source ;
- lien vers une vidéo de démonstration ;
- séquence de 2–3 silhouettes très simples, corps et membres représentés par des traits ;
- articulations visibles aux épaules, coudes, poignets, hanches, genoux et chevilles ; des articulations supplémentaires peuvent être placées individuellement lorsque le mouvement le demande ;
- vue de face par défaut, avec une vue de profil possible pour chaque silhouette lorsque l’angle explique mieux le pas ;
- courte explication en français du repère à suivre pendant l’entraînement ;
- flèches de direction ou de déplacement lorsque cela aide à expliquer le mouvement.

Une dérivation inconnue ou non établie doit être indiquée comme telle, et non devinée. Les noms alternatifs et les variantes peuvent être consignés si cela aide à retrouver un pas, sans les confondre avec des pas distincts.

## Fonctionnement et interface

- Présenter les pas sous forme de liste ou de grille de fiches compacte.
- Permettre de rechercher par nom et noms alternatifs.
- Garder la recherche utilisable sur écran mobile et ordinateur.
- Afficher les silhouettes et les informations principales sans obliger l’utilisateur à ouvrir la vidéo.
- Ouvrir le lien vidéo dans un nouvel onglet ou lecteur adapté.
- Utiliser une interface sobre, lisible et facile à partager ; aucune direction artistique poussée n’est requise.

## Exhaustivité et fiabilité du contenu

L’objectif est de couvrir le plus grand nombre de pas possible dans les styles de la V1. Le contenu sera enrichi progressivement en commençant par des pas simples, notamment le Two-step et le Bart Simpson, puis par d’autres pas simples des styles retenus. Comme les noms et filiations peuvent varier selon les communautés, éviter de présenter une origine incertaine comme un fait. La liste peut s’enrichir progressivement ; l’exhaustivité absolue n’est pas un critère binaire de livraison.

Le premier lot de travail comprend le Two-step, le Bart Simpson, le Running Man et Happy Feet. Cette sélection est un point de départ, pas une prétention à l’exhaustivité. Le popping et le locking ne font plus partie de la V1 ; la house reste différée.

## Hypothèses

- La page est destinée à fonctionner dans un navigateur moderne et à être partageable via un lien ou un hébergement statique.
- Le répertoire peut commencer avec un jeu de données local intégré au projet ; un compte utilisateur, une base de données et des contributions publiques ne sont pas nécessaires pour la V1.
- Les silhouettes sont des schémas explicatifs simples, pas des animations ni des illustrations détaillées.
- La page et ses libellés seront en français ; les noms usuels des pas peuvent rester dans leur langue d’usage.

## Pile technique et commandes

À définir après inspection du projet et choix de l’approche minimale. La spécification ne présume pas d’un framework ni de dépendances.

- Développement : à définir.
- Construction : à définir selon la pile retenue.
- Vérification : vérification manuelle de la recherche, des liens et de l’affichage responsive ; commandes automatisées à définir avec la pile.

## Structure du projet envisagée

À ajuster à la structure déjà présente dans le dépôt. Au minimum, séparer clairement :

- la page et ses styles ;
- les données des fiches de pas ;
- les dessins ou schémas associés ;
- la documentation du projet.

## Conventions de contenu et de code

- Garder les données des pas dans un format cohérent et facile à modifier.
- Utiliser des noms de champs explicites et des identifiants stables pour les entrées.
- Rendre les dessins lisibles à petite taille et fournir un texte alternatif ou une description accessible.
- Permettre à chaque pose de préciser son orientation et ses points d’articulation ; calculer les coudes et genoux par défaut si les coordonnées détaillées ne sont pas fournies.
- Garder les liens vidéo associés à la fiche concernée et afficher clairement le nom du pas.
- Les conventions de code précises dépendront de la pile existante ; éviter toute dépendance si les fonctions requises peuvent être réalisées simplement sans elle.

## Stratégie de vérification

- Vérifier que la recherche par nom et variante donne des résultats cohérents.
- Vérifier les fiches avec et sans dérivation renseignée.
- Vérifier qu’une fiche sans vidéo ne casse pas l’affichage.
- Vérifier que chaque séquence comporte 2–3 poses compréhensibles et que les flèches, si présentes, ont un sens clair.
- Parcourir la page sur écran étroit et large, au clavier et avec un lecteur d’écran pour les contrôles principaux.
- Contrôler les liens vidéo et les références de contenu avant livraison.

## Critères de réussite

- L’utilisateur peut retrouver chacun des pas du répertoire par son nom.
- Chaque fiche présente le nom, le style, une courte explication du mouvement, la relation de dérivation lorsqu’elle est établie et 2–3 silhouettes simples. Un lien YouTube peut compléter la fiche ; la collecte des vidéos n’est pas prioritaire par rapport à l’identification et à la compréhension des pas.
- Une entrée sans dérivation ou vidéo vérifiée reste présentée clairement sans information inventée ni interface cassée.
- La recherche et les fiches restent lisibles sur mobile et ordinateur.
- La page peut être partagée avec le groupe sans compte ni procédure de cours.
- Le contenu initial comprend quatre pas hip-hop/new-style simples ; la couverture peut ensuite être enrichie.

## Limites et décisions

### Toujours

- Conserver le périmètre hip-hop/new-style et le but d’entraînement personnel.
- Distinguer les faits établis des filiations ou appellations incertaines.
- Garder la page simple à parcourir et les données faciles à enrichir.

### Demander avant

- Ajouter la house au périmètre initial.
- Ajouter des comptes, une base distante, des contributions publiques ou un service payant.
- Introduire des dépendances importantes ou un hébergement nécessitant des coûts.

### Ne pas faire dans la V1

- Construire une plateforme de cours, des parcours pédagogiques ou des comptes d’élèves.
- Présenter des dessins schématiques comme des animations complètes.
- Inventer des filiations, des vidéos ou des faits historiques pour remplir des champs.

## Hors périmètre / suite possible

- Ajouter la house après validation de la V1.
- Réévaluer l’ajout de la house ultérieurement.
- Ne pas réintroduire le popping ou le locking dans la V1.
- Permettre à plusieurs personnes de proposer ou modifier des fiches.
- Développer des animations détaillées ou des tutoriels de cours.

## Priorité du premier lot

1. Ajouter le Two-step et le Bart Simpson comme premiers exemples.
2. Compléter avec d’autres pas simples de hip-hop/new-style.
3. Ajouter ou vérifier les liens YouTube ensuite ; la vidéo est utile, mais secondaire au démarrage.

## Questions ouvertes

- Quel mode de partage sera retenu : dépôt statique public, hébergement personnel ou page consultée localement ?
- Quels autres pas simples ajouter après le premier lot de quatre ?
