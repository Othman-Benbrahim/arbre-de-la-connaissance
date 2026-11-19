// Section « Cartographie des écosystèmes » : lit ECO (ecosystemes.js, généré depuis les fiches du bot).
(() => {
  if (typeof ECO === "undefined") return;
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const NS = "http://www.w3.org/2000/svg";
  const el = (n, a = {}) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
  const niv = Object.fromEntries(ECO.niveaux.map(n => [n.id, n]));
  const theme = Object.fromEntries(ECO.themes.map(t => [t.id, t]));
  const comp = Object.fromEntries(ECO.compartiments.map(c => [c.id, c]));
  const FORMES = {
    competition: ["compétition", "− / −"], predation: ["prédation", "+ / −"], mutualisme: ["mutualisme", "+ / +"],
    commensalisme: ["commensalisme", "+ / 0"], amensalisme: ["amensalisme", "− / 0"], neutralisme: ["neutralisme", "0 / 0"],
    forcage: ["forçage", "sens unique"], contrainte: ["contrainte", "borne"], ambivalent: ["ambivalent", "±"]
  };
  const FACETTES = { personne: "personne", statut: "statut", ideologie: "idéologie", collectif: "collectif", non_humain: "non humain" };
  const STATUT_TRACE = { collecte: "collectée chaque nuit", a_brancher: "à brancher", fermee: "fermée", inconnue: "inconnue" };
  const TAILLE = ["", "micro", "méso", "macro"];
  const tailleTxt = t => !t ? "—" : (t[0] === t[1] ? TAILLE[t[0]] : `${TAILLE[t[0]]} à ${TAILLE[t[1]]}`);

  // ---- bilan
  const B = ECO.bilan;
  const traces = ECO.compartiments.flatMap(c => c.traces);
  const collectees = ECO.compartiments.filter(c => c.traces.some(t => t.statut === "collecte")).length;
  const lus = ECO.compartiments.filter(c => c.etat).length;
  const vifs = ECO.compartiments.filter(c => c.etat && Math.abs(c.etat.z) >= 1.5).length;
  const mesurees = ECO.relations.filter(r => r.statut === "verifie").length;
  $("eco-bilan").innerHTML = [
    [B.themes, "écosystèmes décrits"], [B.compartiments, "compartiments"], [B.relations, "relations typées"],
    [B.relations_avec_intensite, "avec une règle d'intensité"], [ECO.niveaux.length, "niveaux d'organisation"],
    [collectees, "compartiments rattachés à une collecte"], [lus, "lus aujourd'hui par une série"],
    [vifs, "loin de leur habitude (écart ≥ 1,5)"], [mesurees, "forces mesurées sur les données"]
  ].map(([n, t]) => `<div><b>${n}</b><span>${t}</span></div>`).join("");
  $("eco-date").textContent = `Données du ${ECO.date} (bot ${ECO.version_bot}).`;

  // ---- onglets
  document.querySelectorAll("#cartographie .onglet").forEach(b => b.addEventListener("click", () => ouvrirOnglet(b.dataset.vue)));
  function ouvrirOnglet(v) {
    document.querySelectorAll("#cartographie .onglet").forEach(b => b.setAttribute("aria-selected", b.dataset.vue === v));
    document.querySelectorAll("#cartographie .vue").forEach(d => d.hidden = d.id !== "vue-" + v);
  }

  // ---- vue d'ensemble : les fiches et leurs ponts
  function ensemble() {
    const svg = $("eco-themes"); svg.innerHTML = "";
    const ids = ECO.themes.map(t => t.id);
    const attente = [...new Set(ECO.ponts.filter(p => !p.resolu).map(p => p.vers.split(":")[0]))];
    const tous = ids.concat(attente);
    const pos = {};
    ids.forEach((t, i) => { const a = 2 * Math.PI * i / ids.length - Math.PI / 2; pos[t] = [270 * Math.cos(a), 270 * Math.sin(a)]; });
    attente.forEach((t, i) => { const a = 2 * Math.PI * (i + .5) / attente.length - Math.PI / 2; pos[t] = [120 * Math.cos(a), 120 * Math.sin(a)]; });
    const paires = {};
    ECO.ponts.forEach(p => { const a = p.de.split(":")[0], b = p.vers.split(":")[0]; if (a === b) return;
      const k = [a, b].sort().join("|"); paires[k] = (paires[k] || 0) + 1; });
    const gL = el("g"); svg.appendChild(gL);
    Object.entries(paires).forEach(([k, n]) => { const [a, b] = k.split("|");
      gL.appendChild(el("line", { x1: pos[a][0], y1: pos[a][1], x2: pos[b][0], y2: pos[b][1], class: "pont" + (attente.includes(a) || attente.includes(b) ? " attente" : ""),
        "stroke-width": Math.min(1 + n * .9, 6), "data-a": a, "data-b": b })); });
    tous.forEach(t => {
      const g = el("g", { class: "th" + (attente.includes(t) ? " attente" : ""), tabindex: 0, transform: `translate(${pos[t][0]},${pos[t][1]})` });
      g.appendChild(el("circle", { r: attente.includes(t) ? 7 : 11 }));
      let tx;
      if (attente.includes(t)) tx = el("text", { y: 19 });
      else {                                   // étiquette posée à l'extérieur du cercle, selon l'angle
        const [x, y] = pos[t], r = Math.hypot(x, y) || 1, c = x / r, s = y / r;
        tx = el("text", { x: c * 20, y: s * 20 + 4, "text-anchor": c > .3 ? "start" : c < -.3 ? "end" : "middle" });
      }
      tx.textContent = theme[t] ? theme[t].nom.split(" (")[0].split(" et fronts")[0] : t.replace(/-/g, " ");
      g.appendChild(tx);
      if (!attente.includes(t)) {
        g.addEventListener("click", () => { choisirTheme(t); ouvrirOnglet("theme"); });
        g.addEventListener("keydown", e => { if (e.key === "Enter") { choisirTheme(t); ouvrirOnglet("theme"); } });
      }
      g.addEventListener("mouseenter", () => gL.querySelectorAll("line").forEach(l => l.classList.toggle("vif", l.dataset.a === t || l.dataset.b === t)));
      svg.appendChild(g);
    });
  }

  // ---- un écosystème : compartiments rangés du micro (gauche) au macro (droite)
  const sel = $("eco-choix");
  ECO.themes.slice().sort((a, b) => a.nom.localeCompare(b.nom, "fr")).forEach(t => sel.add(new Option(t.nom, t.id)));
  sel.addEventListener("change", () => choisirTheme(sel.value));
  function choisirTheme(t) {
    sel.value = t;
    const th = theme[t];
    $("eco-decl").innerHTML = `<p><b>But.</b> ${esc(th.but)}</p><p><b>Limites.</b> ${esc(th.limites)}</p>
      <p class="sous"><b>Regard</b> : ${esc(th.observateur)} · <b>espace</b> : ${esc(th.espace)} · <b>temps</b> : ${esc(th.temps)} · <b>vitesse</b> : ${esc(th.vitesse)} · <b>taille</b> : ${esc(th.taille)}</p>`;
    const cs = ECO.compartiments.filter(c => c.theme === t);
    const rangs = [...new Set(cs.map(c => (niv[c.org] || {}).rang || 5))].sort((a, b) => a - b);
    const col = {}; rangs.forEach((r, i) => col[r] = i);
    const parCol = {}; cs.forEach(c => { const r = (niv[c.org] || {}).rang || 5; (parCol[r] = parCol[r] || []).push(c); });
    const L = 1000, H = Math.max(420, 70 * Math.max(...Object.values(parCol).map(v => v.length)) + 90);
    const svg = $("eco-carte"); svg.innerHTML = ""; svg.setAttribute("viewBox", `0 0 ${L} ${H}`);
    const pas = L / rangs.length, pos = {};
    rangs.forEach(r => {
      const x = pas * col[r] + pas / 2;
      const titre = el("text", { x, y: 26, class: "col" }); titre.textContent = parCol[r].map(c => (niv[c.org] || {}).id).filter((v, i, a) => a.indexOf(v) === i).map(o => (niv[o] || { nom: o }).nom.split(" (")[0]).join(" · ");
      svg.appendChild(titre);
      parCol[r].forEach((c, i) => pos[c.id] = [x, 80 + i * ((H - 110) / Math.max(parCol[r].length, 1)) + 20]);
    });
    const fl = el("text", { x: 14, y: H - 10, class: "axe" }); fl.textContent = "micro"; svg.appendChild(fl);
    const fr = el("text", { x: L - 14, y: H - 10, class: "axe", "text-anchor": "end" }); fr.textContent = "macro"; svg.appendChild(fr);
    svg.appendChild(el("line", { x1: 70, y1: H - 14, x2: L - 70, y2: H - 14, class: "fleche-axe" }));
    const gR = el("g"); svg.appendChild(gR);
    ECO.relations.filter(r => r.de.startsWith(t + ":") && r.vers.startsWith(t + ":")).forEach(r => {
      const [x1, y1] = pos[r.de], [x2, y2] = pos[r.vers];
      const d = r.de === r.vers ? `M${x1 - 20},${y1 - 14} C${x1 - 70},${y1 - 70} ${x1 + 70},${y1 - 70} ${x1 + 20},${y1 - 14}`
        : `M${x1},${y1} Q${(x1 + x2) / 2 + (y2 - y1) * .18},${(y1 + y2) / 2 - (x2 - x1) * .18} ${x2},${y2}`;
      gR.appendChild(el("path", { d, class: `rel ${r.forme}${r.intensite ? " intense" : ""}`, "data-de": r.de, "data-vers": r.vers }));
    });
    cs.forEach(c => {
      const [x, y] = pos[c.id];
      const ta = c.taille || [2, 2];
      const g = el("g", { class: `cp t${ta[0]}${ta[1]}`, tabindex: 0, transform: `translate(${x},${y})` });
      const w = Math.min(pas - 14, 190);
      g.appendChild(el("rect", { x: -w / 2, y: -19, width: w, height: 38, rx: 10 }));
      const t1 = el("text", { y: -2, class: "n" }); t1.textContent = c.nom.length > 30 ? c.nom.slice(0, 29) + "…" : c.nom; g.appendChild(t1);
      const t2 = el("text", { y: 13, class: "s" }); t2.textContent = `${tailleTxt(c.taille)}${c.etat ? " · ● " + (c.etat.z > 0 ? "+" : "") + String(c.etat.z).replace(".", ",") : ""}`; g.appendChild(t2);
      if (c.etat && Math.abs(c.etat.z) >= 1.5) g.classList.add("vif");
      g.addEventListener("click", () => detail(c.id));
      g.addEventListener("keydown", e => { if (e.key === "Enter") detail(c.id); });
      svg.appendChild(g);
    });
    detail(cs[0].id);
  }
  function detail(id) {
    const c = comp[id], n = niv[c.org] || {};
    document.querySelectorAll("#eco-carte .cp").forEach(g => g.classList.remove("actif"));
    document.querySelectorAll("#eco-carte .rel").forEach(p => { p.classList.toggle("sort", p.dataset.de === id); p.classList.toggle("entre", p.dataset.vers === id && p.dataset.de !== id); });
    const sortantes = ECO.relations.filter(r => r.de === id), entrantes = ECO.relations.filter(r => r.vers === id && r.de !== id);
    const ponts = ECO.ponts.filter(p => p.de === id || p.vers === id);
    const rel = (r, autre) => `<li><span class="forme ${r.forme}">${(FORMES[r.forme] || [r.forme])[0]}</span> ${esc(comp[autre] ? comp[autre].nom : autre)}
      <span class="sous">· effet ${esc(r.effet)}${r.retour ? " / retour " + esc(r.retour) : ""} · ${esc(r.delai || "")} · force ${esc(r.force || "?")}${r.intensite ? " · intensité " + esc(r.intensite.regle) + " (" + esc(r.intensite.mesure) + ")" : ""}${r.style ? " · style " + esc(r.style) : ""}</span>
      <p>${esc(r.texte || "")}</p></li>`;
    $("eco-detail").innerHTML = `<p class="num">${esc(n.nom || c.org || "niveau non déclaré")}</p><h3>${esc(c.nom)}</h3>
      <p class="sous">taille ${tailleTxt(c.taille)} · vitesse ${esc(c.vitesse)} · espace ${esc(c.espace)}</p>
      ${c.acteurs.length ? `<h4>Acteurs, chacun à son échelle</h4><ul class="acteurs">${c.acteurs.map(a => `<li><b>${esc(a.nom)}</b> <span class="badge">${esc(a.taille)}</span>${a.facette ? `<span class="badge f">${FACETTES[a.facette] || esc(a.facette)}</span>` : ""}</li>`).join("")}</ul>` : ""}
      ${c.etat ? `<h4>État du jour</h4><p class="etat-jour ${Math.abs(c.etat.z) >= 1.5 ? "vif" : ""}">Écart à son habitude : <b>${(c.etat.z > 0 ? "+" : "") + String(c.etat.z).replace(".", ",")}</b> · dernière valeur ${String(c.etat.derniere_valeur).replace(".", ",")} le ${esc(c.etat.dernier_jour)} <span class="sous">· ${esc(c.etat.adaptateur)}</span></p>` : ""}
      <h4>Traces</h4><ul class="traces">${c.traces.map(t => `<li class="${t.statut}">${esc(t.source)} <span class="sous">· ${STATUT_TRACE[t.statut] || esc(t.statut)}</span></li>`).join("") || "<li>aucune</li>"}</ul>
      ${sortantes.length ? `<h4>Agit sur</h4><ul class="rels">${sortantes.map(r => rel(r, r.vers)).join("")}</ul>` : ""}
      ${entrantes.length ? `<h4>Subit</h4><ul class="rels">${entrantes.map(r => rel(r, r.de)).join("")}</ul>` : ""}
      ${ponts.length ? `<h4>Ponts vers d'autres écosystèmes</h4><ul class="ponts-liste">${ponts.map(p => { const autre = p.de === id ? p.vers : p.de; const ok = !!comp[autre];
        return `<li>${ok ? `<button data-aller="${esc(autre)}">${esc(theme[autre.split(":")[0]].nom)} · ${esc(comp[autre].nom)}</button>` : `<span class="sous">${esc(autre)} (fiche à écrire)</span>`} <span class="sous">· ${p.type === "meme" ? "même phénomène" : "influence"}${p.nature ? " · " + esc(p.nature) : ""}</span></li>`; }).join("")}</ul>` : ""}
      <p class="sous avert">Relations « à vérifier » : forces et délais sont qualitatifs tant que les données ne les ont pas mesurés.</p>`;
    $("eco-detail").querySelectorAll("[data-aller]").forEach(b => b.addEventListener("click", () => { choisirTheme(b.dataset.aller.split(":")[0]); detail(b.dataset.aller); }));
    const g = [...document.querySelectorAll("#eco-carte .cp")].find(g => g.querySelector("text.n") && comp[id] && g.querySelector("text.n").textContent.startsWith(c.nom.slice(0, 20)));
    if (g) g.classList.add("actif");
  }

  // ---- les niveaux, du micro au macro
  const formes = {}; ECO.relations.forEach(r => formes[r.forme] = (formes[r.forme] || 0) + 1);
  const parNiv = {}; ECO.compartiments.forEach(c => parNiv[c.org] = (parNiv[c.org] || 0) + 1);
  $("eco-niveaux").innerHTML = ECO.niveaux.map(n => `<li style="--rang:${n.rang}"><div class="nv-tete"><b>${esc(n.nom)}</b>
    <span class="sous">rang ${n.rang} · ${esc(n.taille)} · ${esc(n.vitesse)} · inertie ${String(n.inertie).replace(".", ",")} · ${parNiv[n.id] || 0} compartiment(s)</span></div>
    <p>${n.propres.map(esc).join(" · ")}</p></li>`).join("");
  $("eco-formes").innerHTML = Object.entries(FORMES).filter(([k]) => formes[k]).map(([k, [nom, signe]]) =>
    `<li><span class="forme ${k}">${nom}</span> <span class="sous">${signe} · ${formes[k]} relation(s)</span></li>`).join("");

  ensemble();
  choisirTheme(ECO.themes.find(t => t.id === "ormuz") ? "ormuz" : ECO.themes[0].id);
  ouvrirOnglet("ensemble");
})();
