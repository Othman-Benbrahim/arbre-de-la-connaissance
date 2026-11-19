// Étude de cas : qui possède l'information (titres français et plateformes). Données : cas_medias.js.
(function () {
  if (typeof MEDIAS === "undefined") return;
  const svg = document.getElementById("cas-medias");
  if (!svg) return;
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a, t) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (t) e.textContent = t; return e; };
  const NATURES = { etat: "État", milliardaire: "Milliardaire", famille: "Famille", banque_mutualiste: "Banque mutualiste",
                    fondation: "Fondation", ordre_religieux: "Ordre religieux" };
  const COUL = { etat: "var(--accent)", milliardaire: "var(--chaud)", famille: "#a0603a", banque_mutualiste: "var(--accent2)",
                 fondation: "#6b7fa6", ordre_religieux: "#8a6fa0" };
  // propriétaire → titres, regroupés par nature
  const parProp = new Map();
  for (const t of MEDIAS.titres) {
    const k = t.proprietaire_de_controle;
    if (!parProp.has(k)) parProp.set(k, { nature: t.nature, titres: [] });
    parProp.get(k).titres.push(t);
  }
  const ordre = Object.keys(NATURES);
  const props = [...parProp.entries()].sort((a, b) => ordre.indexOf(a[1].nature) - ordre.indexOf(b[1].nature) || b[1].titres.length - a[1].titres.length);
  const H = 18, haut = MEDIAS.titres.length * H + 40, X0 = 10, X1 = 170, X2 = 520, X3 = 600;
  svg.setAttribute("viewBox", `0 0 900 ${haut}`);
  let y = 30, yp = 30;
  const pasProp = (haut - 40) / props.length;
  // colonne natures : chaque nature en face du milieu du bloc de ses propriétaires
  const yNat = {};
  ordre.forEach(n => {
    const ys = props.map(([, p], i) => p.nature === n ? 30 + (i + 0.5) * pasProp : null).filter(v => v !== null);
    if (ys.length) yNat[n] = ys.reduce((a, b) => a + b, 0) / ys.length;
  });
  ordre.forEach(n => {
    const nb = MEDIAS.titres.filter(t => t.nature === n).length;
    if (!nb) return;
    svg.append(el("circle", { cx: X0 + 8, cy: yNat[n], r: 6, fill: COUL[n] }));
    svg.append(el("text", { x: X0 + 20, y: yNat[n] + 4, class: "cas-nat" }, `${NATURES[n]} (${nb})`));
  });
  for (const [nom, p] of props) {
    const ym = yp + pasProp / 2;
    svg.append(el("path", { d: `M${X0 + 140},${yNat[p.nature]} C${X1 - 40},${yNat[p.nature]} ${X1 - 40},${ym} ${X1},${ym}`, class: "cas-lien", stroke: COUL[p.nature] }));
    svg.append(el("text", { x: X1 + 4, y: ym + 4, class: "cas-prop" }, nom.length > 52 ? nom.slice(0, 50) + "…" : nom));
    for (const t of p.titres) {
      const yt = y + H / 2;
      svg.append(el("path", { d: `M${X2},${ym} C${X2},${ym} ${X3 - 30},${yt} ${X3},${yt}`, class: "cas-lien", stroke: COUL[p.nature] }));
      svg.append(el("text", { x: X3 + 6, y: yt + 4, class: "cas-titre" }, t.media + (t.part_pct ? ` · ${t.part_pct} %` : "")));
      y += H;
    }
    yp += pasProp;
  }
  // plateformes
  const ul = document.getElementById("cas-plateformes");
  for (const p of MEDIAS.plateformes) {
    const li = document.createElement("li");
    li.innerHTML = `<b>${p.plateforme}</b> — ${p.proprietaire} <span class="sous">(${p.controle} ; ${p.siege} ; ${p.modele})</span>`;
    ul.append(li);
  }
  const s = document.getElementById("cas-source");
  if (s) s.textContent = "Source : " + MEDIAS.source + ". Les pourcentages ne sont repris que là où la carte les donne sans ambiguïté.";
  // chiffres de concentration
  const n = MEDIAS.titres.length, prive = MEDIAS.titres.filter(t => ["milliardaire", "famille"].includes(t.nature)).length;
  const b = document.getElementById("cas-bilan");
  if (b) b.textContent = `${n} titres, ${parProp.size} propriétaires de contrôle ; ${prive} titres (${Math.round(100 * prive / n)} %) appartiennent à un milliardaire ou à une famille.`;
})();
