"""Génère ecosystemes.js (données de la section « Cartographie ») depuis les fiches d'écosystèmes du bot.

Source : metac-bot-template/ecosystemes/*.yaml et ecosystemes/niveaux.yaml, lus par le module ecosystemes.py du bot
(mêmes validations, mêmes axes lus en grandeurs). Ne pas modifier ecosystemes.js à la main.

    cd ../metac-bot-template && uv run python ../arbre-de-la-connaissance/generer_ecosystemes.py
"""
from __future__ import annotations

import json
import subprocess
import sys
from datetime import date
from pathlib import Path

ICI = Path(__file__).resolve().parent
BOT = Path.cwd()
sys.path.insert(0, str(BOT))
import ecosystemes as ec  # noqa: E402


def main() -> int:
    fiches = ec.charger(BOT / "ecosystemes")
    erreurs = [e for f in fiches.values() for e in ec.valider(f)]
    if erreurs:
        print("\n".join(erreurs))
        return 1
    s = ec.assembler(fiches)
    cat = ec.niveaux(BOT / "ecosystemes" / "niveaux.yaml")
    niveaux = sorted(({"id": k, "nom": v["nom"], "rang": v.get("rang", 5), "taille": v.get("taille"), "vitesse": v.get("vitesse"),
                       "inertie": v.get("inertie"), "propres": v.get("relations_propres") or []} for k, v in cat["niveaux"].items()),
                     key=lambda n: (n["rang"], n["id"]))
    themes = [{"id": t, "nom": f.get("nom", t), **{k: (f.get("declaration") or {}).get(k) for k in
               ("but", "limites", "observateur", "espace", "temps", "vitesse", "taille")}} for t, f in fiches.items()]
    comps = [{"id": n["id"], "theme": n["theme"], "nom": n["nom"], "org": n.get("organisation"),
              "taille": n["axes"].get("taille"), "vitesse": n["niveau"].get("vitesse"), "espace": n["niveau"].get("espace"),
              "acteurs": [{"nom": a.get("nom"), "taille": a.get("taille"), "facette": a.get("facette"), "org": a.get("organisation")}
                          for a in n.get("acteurs") or []],
              "traces": [{"source": t.get("source"), "statut": t.get("statut"), "adaptateur": t.get("adaptateur")} for t in n["traces"]]}
             for n in s["noeuds"]]
    rel = [{k: r.get(k) for k in ("de", "vers", "forme", "effet", "retour", "style", "delai", "force", "intensite", "coupure",
                                    "statut", "texte")} for r in s["relations"]]
    try:
        version = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=BOT, capture_output=True, text=True).stdout.strip()
    except Exception:
        version = ""
    data = {"date": date.today().isoformat(), "version_bot": version, "bilan": s["bilan"], "niveaux": niveaux,
            "facettes": cat["facettes"], "themes": themes, "compartiments": comps, "relations": rel, "ponts": s["ponts"]}
    (ICI / "ecosystemes.js").write_text("// Généré par generer_ecosystemes.py depuis les fiches d'écosystèmes du bot. Ne pas modifier à la main.\n"
                                        "const ECO = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n",
                                        encoding="utf-8")
    print(f"ecosystemes.js : {len(themes)} fiches, {len(comps)} compartiments, {len(rel)} relations, {len(niveaux)} niveaux")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
