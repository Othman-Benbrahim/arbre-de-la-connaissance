"""Génère cas_medias.js (const MEDIAS) depuis les tables du dépôt du bot (donnees/medias/*.csv).

    uv run python ../arbre-de-la-connaissance/generer_medias.py      # lancé depuis le dépôt du bot
"""
import csv
import json
from pathlib import Path

ICI = Path(__file__).resolve().parent
BOT = Path.cwd() / "donnees" / "medias"
titres = list(csv.DictReader((BOT / "proprietaires-france.csv").open(encoding="utf-8")))
plateformes = list(csv.DictReader((BOT / "plateformes.csv").open(encoding="utf-8")))
data = {"source": "d'après « Médias français, qui possède quoi ? », Le Monde diplomatique et Acrimed, version 21.1, décembre 2025",
        "titres": [{k: r[k] for k in ("media", "groupe", "proprietaire_de_controle", "nature", "part_pct")} for r in titres],
        "plateformes": [{k: r[k] for k in ("plateforme", "proprietaire", "controle", "siege", "modele")} for r in plateformes]}
(ICI / "cas_medias.js").write_text("const MEDIAS = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
print(f"cas_medias.js : {len(titres)} titres, {len(plateformes)} plateformes")
