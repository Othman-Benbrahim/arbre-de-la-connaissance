# Arbre de la connaissance

Page de présentation de l'**alphabet situationnel** : 16 structures transversales (cartes), 13 strates, la matrice de
leurs liens, et la méthode du bot de prévision qui les met à l'épreuve : le catalogue des mécanismes, l'observatoire
inductif et les sources des signaux faibles (mise à jour du 19 novembre 2026, avec la cartographie des écosystèmes).

- `index.html`, `style.css`, `app.js` : la page, sans dépendance ni étape de construction.
- `theorie.js` : rédigé à la main depuis le README du bot, ses pré-enregistrements et son catalogue des mécanismes.
- `ecosystemes.js` : généré par `generer_ecosystemes.py` depuis les fiches d'écosystèmes du bot (`cd ../metac-bot-template &&
  uv run python ../arbre-de-la-connaissance/generer_ecosystemes.py`). Ne pas le modifier à la main. `carte.js` dessine la
  section « Cartographie » (vue d'ensemble, un écosystème du micro au macro, les niveaux, les flux à mesurer).
- `donnees.js` : généré depuis le skill [`alphabet-situationnel`](https://github.com/Othman-Benbrahim/alphabet-situationnel)
  (index des cartes, fiches des strates, matrice du moteur). Ne pas le modifier à la main.

Publication : Settings → Pages → « Deploy from a branch », branche `main`, dossier `/`.

Les chiffres sont publiés tels qu'ils sont, négatifs compris (décision d'auteur du 2026-11-14).
