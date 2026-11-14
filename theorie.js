// Rédigé à la main depuis apports-theoriques.md (skill), README-alphabet.md (bot), essais.py, preenregistrements/
// et les notes de référence du projet. Les chiffres sont dans index.html (« Où en est le projet »), négatifs compris.
const THEORIE = {

 // Règle d'importation du skill : un concept n'entre que s'il ajoute un contrôle.
 regle_importation: "Un concept n'entre que s'il ajoute un contrôle : un champ qui peut rester vide, un test qui peut échouer, une commande. S'il n'ajoute qu'un mot, il appauvrit le système.",

 // familles → apports. « fonde » = ce que l'apport a mis dans le skill ou le bot.
 fondements: [
  { famille: "Structures", couleur: "--r1", apports: [
   { source: "Donald Brown, Human Universals (1991)", idee: "Des conduites présentes dans toutes les sociétés connues.", fonde: "Le registre anthropologique de chaque carte, quand il existe." },
   { source: "Hystérésis, graphes, ordres partiels, oscillateurs…", idee: "Chaque carte nomme une structure mathématique précise.", fonde: "Les 16 cartes ; aucune propriété mathématique ne se transfère sans démonstration propre." },
   { source: "Axelrod (1984) ; Gouldner (1960) ; Scott (1972)", idee: "Jeux répétés, obligation réciproque sous asymétrie.", fonde: "RÉCIPROCITÉ, et sa tension documentée avec HIÉRARCHIE." },
   { source: "David (1985) ; Arthur (1989)", idee: "Dépendance au chemin, rendements croissants.", fonde: "TRACE·MÉMOIRE et son inertie forte." },
   { source: "Anderson (1972), « More is different »", idee: "Le changement d'échelle fait apparaître des propriétés nouvelles.", fonde: "ÉMERGENCE ~ CROISSANCE requalifiée en tension, non en incompatibilité." },
   { source: "Verhulst (1838) ; Gompertz (1825) ; Kleene (1938)", idee: "Croissance jusqu'à une capacité ; auto-référence.", fonde: "CROISSANCE ; RÉCURSIVITÉ." }
  ]},
  { famille: "Signe et preuve", couleur: "--r2", apports: [
   { source: "Peirce : l'interprétant", idee: "Un signe ne renvoie à son objet que par un mécanisme qui l'interprète.", fonde: "Le champ « garantie » (mécanisme, attendu, ce qui contredirait), requis pour un ancrage fort." },
   { source: "Van Evera (1997) ; Collier (2011), process tracing", idee: "Tests du cerceau, du pistolet fumant, double.", fonde: "Le choix fort/faible : un fait suffisant donne F, un fait qui remplit seulement le marqueur donne f." },
   { source: "Heuer, analyse des hypothèses concurrentes", idee: "Chercher ce qui départage, pas ce qui confirme.", fonde: "Les questions discriminantes entre cartes voisines ; une question décorative est refusée." },
   { source: "« The Corroboration Illusion » (2026)", idee: "Un modèle prend tout texte pertinent pour une preuve forte.", fonde: "Provenance des ancrages forts vérifiée par du code, en ombre." }
  ]},
  { famille: "Causalité", couleur: "--r3", apports: [
   { source: "Pearl, l'échelle de la causalité", idee: "Association, intervention, contrefactuel : trois barreaux.", fonde: "Le barreau déclaré de chaque transition ; l'écart C − B est un contraste du dispositif, jamais un contrefactuel." },
   { source: "Murphy, Probabilistic Machine Learning (2026)", idee: "Multiplier des indices suppose leur indépendance ; des causes convergentes forment un collider.", fonde: "Le calcul nommé exactement (score log-linéaire) ; ombres du tempérage, des médiateurs et de l'ablation." },
   { source: "Poole & Mackworth, Artificial Intelligence (3ᵉ éd.)", idee: "Le noisy-or : chaque cause seule produirait l'événement avec sa chance propre.", fonde: "L'ombre « noisy-or » : les cartes lues comme des causes plutôt que des indices." },
   { source: "Wong, Goodman, Tenenbaum et al. (2023)", idee: "Traduire le langage en programme probabiliste.", fonde: "Le programme génératif en ombre ; le traducteur des liens affirmés par les textes ; la pépinière d'arêtes candidates." },
   { source: "Desclés & Guentchéva (1998)", idee: "La causalité relie deux situations sans exiger d'agent ; elle se distingue de la causativité et de la transitivité.", fonde: "Note du projet : pas de correspondance un mot → une carte, le contexte décide ; contrôle et effectuation séparés. Gestes proposés, sans effet sur les probabilités." },
   { source: "Aristote, les quatre causes (via une note du projet)", idee: "Matérielle, formelle, efficiente, finale.", fonde: "Un constat : l'alphabet ne code que la cause formelle, la forme d'une situation. Prédire à partir de la forme seule est une thèse forte, non démontrée : c'est précisément l'hypothèse mise à l'épreuve." }
  ]},
  { famille: "Prévision et mesure", couleur: "--r4", apports: [
   { source: "Tetlock ; tournois de prévision", idee: "Sceller avant de savoir, comparer à un témoin, scorer.", fonde: "Prévisions scellées, trois bras comparés, score de Brier et perte log." },
   { source: "Murphy (1973)", idee: "Décomposer le Brier : fiabilité, résolution, incertitude.", fonde: "La lecture de la calibration dans le rapport de score." },
   { source: "Decker & Tresp (2026)", idee: "Calibré en moyenne peut cacher de gros écarts par sous-groupe.", fonde: "Calibration par source, strate, horizon et lecteur, en ombre." },
   { source: "Krippendorff ; accord entre codeurs", idee: "Un codage ne vaut que s'il est reproductible par un autre codeur.", fonde: "L'accord entre lecteurs sur les mêmes questions ; le contrôle de continuité entre fournisseurs." },
   { source: "Balestriero & LeCun (2026)", idee: "Une représentation robuste est invariante aux vues.", fonde: "Test d'invariance : la même situation lue sur deux jeux de sources disjoints." }
  ]},
  { famille: "Rigueur des essais", couleur: "--r5", apports: [
   { source: "Gelman & Loken ; Mayo (via E. Tower, 2026)", idee: "Les chemins qui bifurquent ; le regard répété qui s'arrête au premier succès.", fonde: "La règle d'adoption commune : compter les essais, corriger le risque, regarder à date fixe." },
   { source: "Dunn (1961), correction de Bonferroni", idee: "Le risque se partage entre les essais menés en parallèle.", fonde: "Risque de 5 % divisé par le nombre d'essais ouverts." },
   { source: "Neirz, Allende & Saavedra (2026)", idee: "Le bootstrap sur un seul échantillon réutilise la même coïncidence.", fonde: "Les doubles permutés des liens ; la stabilité reste descriptive." },
   { source: "S. Goedecke, « Writing is no longer proof of work » (2026)", idee: "Un texte ne prouve plus l'effort ni l'antériorité.", fonde: "La date du commit fait foi pour les pré-enregistrements, pas le texte." },
   { source: "Lv et al. (ICML 2026) ; Blair, Procaccia & Tambe (NeurIPS 2026)", idee: "Généraliser au monde ouvert ; plongements de préférences.", fonde: "Monde synthétique : effacement des noms, triplets durs, négation. Limite : ce monde est tiré du modèle du skill lui-même." }
  ]},
  { famille: "Vocabulaire et complexité", couleur: "--r2", apports: [
   { source: "ANSI/NISO Z39.19 ; ISO 25964", idee: "Vocabulaires contrôlés et facettes pour les domaines neufs et transversaux.", fonde: "Une hypothèse à l'étude, non tranchée : une forêt à facettes (structures × domaines) plutôt qu'un arbre à tronc unique. Et une règle : le vocabulaire et les lectures ne se confondent pas." },
   { source: "Snowden, Cynefin", idee: "Le complexe ne se décompose pas en branches.", fonde: "Le tiers de POLARITÉ demandé au lecteur ; d'autres pistes de Snowden en ombre." },
   { source: "Pearl, Murphy, Heuer : ce qui est refusé", idee: "Ontologies « irréductibles », normativité sans marqueur, théâtre théorique.", fonde: "Refusés : ils rendraient le système moins réfutable." }
  ]}
 ],

 // Logique du calcul, de la question à la probabilité.
 logique: [
  { titre: "Fréquence de référence (bras B)", texte: "On part d'un taux de base : la fréquence de l'événement dans une classe de cas comparables. Quand une série de données mesure exactement le critère, c'est un compte fait par le code. Sinon, c'est la médiane de trois estimations du modèle sur trois sources : le code refait l'arithmétique, mais la classe est choisie par le modèle. B n'est donc pas un témoin indépendant de C, et une erreur de classe touche les deux à la fois.", formule: "f" },
  { titre: "Multiplicateurs stipulés", texte: "Chaque carte ancrée qui, selon la matrice, fait apparaître la carte visée apporte un multiplicateur fixé par l'auteur selon la force du lien. Ces valeurs sont des hypothèses de travail, jamais estimées sur des données.", formule: "λ : forte 3 · moyenne 1,8 · faible 1,2" },
  { titre: "Combinaison", texte: "Le calcul publié est un score log-linéaire : il ajoute les log-multiplicateurs à la cote de la fréquence. Une autre strate abaisse le lien d'un cran ; des sources redondantes ne comptent qu'une fois. L'effet des cartes est plafonné.", formule: "logit p = logit f + Σ log λ" },
  { titre: "Persistance et disparition", texte: "Pour une carte déjà présente, la probabilité qu'elle persiste vient de son inertie sur trois mois, ramenée à la fenêtre de la question. La disparition est le complément.", formule: "r = inertie^(jours / 91,3)" },
  { titre: "Sensibilité", texte: "Chaque calcul est refait sous des variantes des paramètres et de la classe de référence. Si la bande obtenue traverse 50 %, la réponse est déclarée « non identifiée ».", formule: "bande de sensibilité" },
  { titre: "Ce qui est posté", texte: "C (la lecture) n'est posté que dans les strates où le chiffre est ouvert, et seulement par décision datée. Aujourd'hui : B là où C est estimé, B pour une absence de structure, A (le modèle seul) quand il n'y a pas de taux de base honnête.", formule: "C ⟶ B ⟶ A" }
 ],
 limites: [
  "Tous les multiplicateurs étant ≥ 1, une carte ne peut que faire monter la probabilité d'une apparition : C gagne sur les OUI et perd sur les NON. Les freins et la correction symétrique, en ombre, testent l'autre sens.",
  "Multiplier les indices n'est exact que s'ils sont indépendants sachant l'événement ; des causes convergentes violent cette hypothèse.",
  "Une bande de sensibilité étroite ne dit pas que la matrice est juste : une transition fausse la déplace à peine.",
  "La règle publiée (le produit) contredit le modèle du monde du skill (un noisy-or) dès que deux cartes ou plus sont lues : le produit surestime. Dans le monde simulé, même un lecteur parfait ne bat pas le taux de base avec le produit ; les variantes en ombre, oui.",
  "Le monde simulé est tiré du modèle génératif du skill : il mesure la capacité du lecteur à retrouver l'ontologie du skill, pas la validité de cette ontologie."
 ],

 // Hypothèses abordées. statut : adopte | ombre | essai | clos
 hypotheses: [
  { titre: "Plan et lecture sans la matrice", statut: "essai", inspiration: "Constat du registre : le lecteur recopie les liens de la matrice qu'on lui montre.", question: "Le lecteur lit-il la situation, ou obéit-il à la consigne ?", critere: "Pré-enregistré : jugé sur les 50 premières lectures d'un seul lecteur." },
  { titre: "B autorégressif pour les séries", statut: "essai", inspiration: "Décision d'auteur : le but est la meilleure prévision, pas de prouver C contre B.", question: "Un modèle AR(1) des variations fait-il un meilleur taux de base que le compte ?", critere: "Pré-enregistré : au moins 100 questions de jeux jamais vus, intervalle corrigé." },
  { titre: "États nuls d'absence", statut: "essai", inspiration: "Constat exploratoire : quand aucune structure n'apparaît, l'événement survient moins que prévu.", question: "Faut-il diviser la cote de B quand la lecture constate une absence ?", critere: "Pré-enregistré : 30 questions, intervalle corrigé." },
  { titre: "Liens appris sur les issues", statut: "clos", inspiration: "Les multiplicateurs sont stipulés ; les apprendre ?", question: "Des liens carte → événement estimés sur les issues font-ils mieux que la matrice ?", critere: "Clos le 14 novembre 2026 : non adopté, aucun gain sur le jugement." },
  { titre: "B posté là où C est estimé", statut: "adopte", inspiration: "Au banc, en strate 7, C faisait moins bien que B.", question: "Que poster tant que C n'a pas fait ses preuves ?", critere: "Décision d'auteur du 14 novembre 2026 ; C reste calculé et scellé." },
  { titre: "Freins (arêtes inhibitrices)", statut: "ombre", inspiration: "Une structure peut borner le mécanisme d'une autre.", question: "Six liens qui font baisser la probabilité corrigent-ils le biais à la hausse ?", critere: "Sortis du calcul publié, enregistrés en ombre." },
  { titre: "Correction symétrique", statut: "ombre", inspiration: "Le moteur ne compte que les cartes présentes.", question: "Une carte contredite par les faits doit-elle faire baisser autant qu'elle aurait fait monter ?", critere: "Scellée à chaque lecture, scorée à part." },
  { titre: "Décalage appris (correction du biais)", statut: "ombre", inspiration: "Le biais à la hausse de C mesuré sur les tests rétrospectifs.", question: "Un décalage fixe de la cote corrige-t-il C ?", critere: "Proposé seulement s'il gagne hors échantillon ; ne touche jamais le bras posté." },
  { titre: "Les cartes comme causes (noisy-or)", statut: "ombre", inspiration: "Poole & Mackworth.", question: "Lire les cartes comme des causes plutôt que des indices change-t-il p ?", critere: "En ombre. Sur 337 lectures résolues : perte log 0,736 contre 0,769 pour C, mais 0,631 pour B." },
  { titre: "Tempérage des multiplicateurs", statut: "ombre", inspiration: "Murphy (2026).", question: "Élever le produit à une puissance fixée d'avance limite-t-il la surconfiance ?", critere: "En ombre ; α fixé avant mesure." },
  { titre: "Programme génératif", statut: "ombre", inspiration: "Wong, Goodman, Tenenbaum et al. (2023).", question: "Un modèle génératif conditionné sur la lecture et les rejets fait-il mieux ?", critere: "En ombre. Sur 221 lectures résolues : perte log 0,670 contre 0,805 pour C, mais 0,595 pour B. Il améliore C sans battre le taux de base." },
  { titre: "Ombre combinée", statut: "ombre", inspiration: "Décision d'auteur du 15 novembre 2026, après un audit externe.", question: "Le génératif, appliqué à la lecture sans matrice et corrigé par la symétrie, réduit-il les deux défauts mesurés : le lecteur qui recopie et C qui ne peut que monter ?", critere: "En ombre depuis la version 0.10.103, descriptif. Limite déclarée : le génératif compte déjà les candidates contredites, la symétrie peut les recompter ; les deux composantes sont gardées à part." },
  { titre: "Médiateurs et ablation", statut: "ombre", inspiration: "Murphy ; Pearl.", question: "Que vaut chaque carte retirée seule ? Une arête lue comme effet total écarte-t-elle son médiateur ?", critere: "Sondes du moteur, jamais publiées." },
  { titre: "Nouveau départ à contexte vide", statut: "ombre", inspiration: "Billet « idea basins » : la deuxième correction ne sauvait aucun dossier.", question: "Une lecture neuve, sans l'historique, réussit-elle là où la correction échoue ?", critere: "En ombre, à la deuxième correction." },
  { titre: "Contradicteur", statut: "ombre", inspiration: "Un second modèle qui critique la lecture.", question: "Une critique indépendante améliore-t-elle C ?", critere: "Scellé et jamais posté tant qu'il ne fait pas mieux." },
  { titre: "Invariance du lecteur", statut: "ombre", inspiration: "Balestriero & LeCun (2026).", question: "Le lecteur trouve-t-il les mêmes cartes sur deux jeux de sources disjoints ?", critere: "Sur une part des questions, tirée par question." },
  { titre: "Test de négation", statut: "ombre", inspiration: "Robustesse des agents au monde ouvert.", question: "La lecture d'une question niée est-elle cohérente avec l'originale ?", critere: "Sur une part des questions binaires." },
  { titre: "Tâches refaites par le code", statut: "ombre", inspiration: "Rendre au code ce qui est au code.", question: "Le code peut-il filtrer les recherches et ancrer certaines cartes directement dans les séries ?", critere: "Adoptable seulement s'il ne fait perdre aucun fait ancré." },
  { titre: "Présélection par plongement", statut: "ombre", inspiration: "Un petit modèle range les cartes par similarité.", question: "La présélection retrouve-t-elle les cartes choisies par le lecteur ?", critere: "Enregistrée à côté, sans effet sur la lecture." },
  { titre: "Calibration par sous-groupe", statut: "ombre", inspiration: "Decker & Tresp (2026).", question: "La calibration tient-elle par source, strate, horizon et lecteur ?", critere: "Descriptif, hors critère." },
  { titre: "Chiffrer hors strate 7", statut: "ombre", inspiration: "Le chiffre n'est ouvert qu'en géopolitique.", question: "Les lectures des autres strates, chiffrées et scellées, battent-elles B ?", critere: "C exploratoire par strate ; levée selon un critère fixé le 4 novembre 2026." },
  { titre: "Plusieurs lecteurs, plusieurs fournisseurs", statut: "adopte", inspiration: "Contrainte d'auteur du 14 novembre 2026.", question: "Comment changer de modèle sans mélanger les séries ?", critere: "Le lecteur, c'est le modèle et sa version ; contrôle de continuité à chaque bascule." }
 ]
};
