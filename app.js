(() => {
  "use strict";
  const D = DONNEES;
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.getElementById("graphe");
  const fiche = document.getElementById("fiche");
  const parCode = Object.fromEntries(D.cartes.map(c => [c.code, c]));
  const parNom = Object.fromEntries(D.cartes.map(c => [c.nom, c]));
  const FORCE = { F: "forte", M: "moyenne", f: "faible" };

  // Thème (préférence gardée dans ce navigateur seulement)
  const racine = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) racine.dataset.theme = t; } catch (e) {}
  document.getElementById("theme").addEventListener("click", () => {
    const sombre = racine.dataset.theme ? racine.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    racine.dataset.theme = sombre ? "light" : "dark";
    try { localStorage.setItem("theme", racine.dataset.theme); } catch (e) {}
  });
  document.getElementById("version").textContent = D.version_skill;

  // Graphe : 16 cartes sur un cercle, liens de la matrice en courbes
  const R = 270, pos = {};
  D.cartes.forEach((c, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / D.cartes.length;
    pos[c.code] = [R * Math.cos(a), R * Math.sin(a)];
  });
  const el = (n, at) => { const e = document.createElementNS(NS, n); for (const k in at) e.setAttribute(k, at[k]); return e; };
  const defs = el("defs", {});
  for (const [id, coul] of [["fl", "var(--lien)"], ["fl-s", "var(--accent)"], ["fl-e", "var(--chaud)"]]) {
    const m = el("marker", { id, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" });
    m.appendChild(el("path", { d: "M0,0 L10,5 L0,10 z", fill: coul }));
    defs.appendChild(m);
  }
  svg.appendChild(defs);
  const gL = el("g", {}), gN = el("g", {});
  svg.append(gL, gN);
  const liens = D.liens.map(l => {
    const [x1, y1] = pos[l.source], [x2, y2] = pos[l.cible];
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const k = 0.35;                                   // courbure vers le centre
    const cx = mx * (1 - k), cy = my * (1 - k);
    // raccourcir pour ne pas entrer dans le cercle d'arrivée
    const dx = x2 - cx, dy = y2 - cy, d = Math.hypot(dx, dy) || 1, r = 30;
    const ex = x2 - (dx / d) * r, ey = y2 - (dy / d) * r;
    const sx0 = cx - x1, sy0 = cy - y1, sd = Math.hypot(sx0, sy0) || 1;
    const sx = x1 + (sx0 / sd) * r, sy = y1 + (sy0 / sd) * r;
    const p = el("path", { d: `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`, class: `lien ${l.force}`, "marker-end": "url(#fl)" });
    gL.appendChild(p);
    return { ...l, p };
  });
  const noeuds = {};
  D.cartes.forEach(c => {
    const [x, y] = pos[c.code];
    const g = el("g", { class: "noeud", transform: `translate(${x},${y})`, tabindex: 0, role: "button", "aria-label": c.nom });
    g.appendChild(el("circle", { r: 26 }));
    const t = el("text", { class: "glyphe" }); t.textContent = c.glyphe; g.appendChild(t);
    const ly = y > 10 ? 44 : -36;
    const n = el("text", { class: "nom", y: ly }); n.textContent = c.nom; g.appendChild(n);
    g.addEventListener("mouseenter", () => montrer(c.code));
    g.addEventListener("click", () => montrer(c.code, true));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); montrer(c.code, true); } });
    gN.appendChild(g);
    noeuds[c.code] = g;
  });

  let fixe = null;
  svg.addEventListener("mouseleave", () => { if (fixe) montrer(fixe); else effacer(); });
  function effacer() {
    liens.forEach(l => { l.p.classList.remove("sort", "entre", "eteint"); l.p.setAttribute("marker-end", "url(#fl)"); });
    Object.values(noeuds).forEach(n => n.classList.remove("actif", "eteint"));
  }
  function montrer(code, fixer) {
    if (fixer) fixe = code;
    const voisins = new Set([code]);
    liens.forEach(l => {
      const s = l.source === code, e = l.cible === code;
      l.p.classList.toggle("sort", s); l.p.classList.toggle("entre", e); l.p.classList.toggle("eteint", !s && !e);
      l.p.setAttribute("marker-end", s ? "url(#fl-s)" : e ? "url(#fl-e)" : "url(#fl)");
      if (s) voisins.add(l.cible); if (e) voisins.add(l.source);
    });
    Object.entries(noeuds).forEach(([k, n]) => { n.classList.toggle("actif", k === code); n.classList.toggle("eteint", !voisins.has(k)); });
    remplir(parCode[code]);
  }
  function puces(liste, cls) {
    if (!liste.length) return "<span class='puce'>aucune</span>";
    return liste.map(([c, f]) => `<button class="puce ${cls}" data-code="${c}" title="force ${FORCE[f] || ""}">${parCode[c].glyphe} ${parCode[c].nom}${f ? " · " + f : ""}</button>`).join("");
  }
  function remplir(c) {
    const sort = D.liens.filter(l => l.source === c.code).map(l => [l.cible, l.force]);
    const entre = D.liens.filter(l => l.cible === c.code).map(l => [l.source, l.force]);
    const vois = c.voisines.map(n => parNom[n] ? [parNom[n].code, ""] : null).filter(Boolean);
    fiche.innerHTML = `
      <div class="g" aria-hidden="true">${c.glyphe}</div>
      <h3>${c.nom}</h3>
      <p class="def">${c.definition.charAt(0).toUpperCase() + c.definition.slice(1)}.</p>
      <dl>
        <div><dt>Structure mathématique</dt><dd>${c.maths}</dd></div>
        <div><dt>Agit sur</dt><dd class="puces">${puces(sort, "sort")}</dd></div>
        <div><dt>Reçoit l'action de</dt><dd class="puces">${puces(entre, "entre")}</dd></div>
        <div><dt>Voisines à distinguer</dt><dd class="puces">${puces(vois, "")}</dd></div>
        ${c.inertie ? `<div><dt>Inertie sur trois mois</dt><dd>${c.inertie}</dd></div>` : ""}
      </dl>
      ${c.transitions && c.transitions.length ? `<details class="dyn"><summary>Ce qu'elle tend à produire ensuite</summary>
        <ul>${c.transitions.map(t => `<li><b>${t.vers}</b>${t.force ? ` <span class="force">${t.force}</span>` : ""}${t.mecanisme ? ` — ${t.mecanisme}` : ""}</li>`).join("")}</ul>
        ${c.freins ? `<p><b>Frein :</b> ${c.freins}</p>` : ""}
        ${c.bascule ? `<p><b>Indicateurs de bascule :</b> ${c.bascule}</p>` : ""}
        ${c.entrees ? `<p><b>Y mènent souvent :</b> ${c.entrees}</p>` : ""}
      </details>` : ""}`;
    fiche.querySelectorAll("[data-code]").forEach(b => b.addEventListener("click", () => montrer(b.dataset.code, true)));
  }
  montrer("SEU", true);

  // Strates
  const RANGEE = {
    1: ["Sans intention", "--r1"], 2: ["Sans intention", "--r1"], 11: ["Sans intention", "--r1"],
    3: ["Agents et groupes", "--r2"], 4: ["Agents et groupes", "--r2"], 5: ["Agents et groupes", "--r2"],
    6: ["Institutions", "--r3"], 7: ["Institutions", "--r3"], 8: ["Institutions", "--r3"], 13: ["Domaine ajouté (0.5.0)", "--r5"],
    9: ["Artefacts et durée", "--r4"], 10: ["Artefacts et durée", "--r4"], 12: ["Artefacts et durée", "--r4"],
  };
  const grille = document.getElementById("grille-strates"), det = document.getElementById("detail-strate");
  D.strates.forEach(s => {
    const [rg, k] = RANGEE[s.n] || ["", "--r5"];
    const b = document.createElement("button");
    b.className = "strate"; b.style.setProperty("--k", `var(${k})`); b.setAttribute("aria-pressed", "false");
    const chiffre = D.strates_chiffrees.includes(s.n);
    b.innerHTML = `<span class="n">${String(s.n).padStart(2, "0")}</span><span class="t">${s.nom}</span><span class="r">${rg}</span>${chiffre ? '<span class="chiffre">chiffrée</span>' : ""}`;
    b.addEventListener("click", () => {
      grille.querySelectorAll(".strate").forEach(x => x.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      det.classList.add("ouvert");
      det.innerHTML = `<h3>${s.n} · ${s.nom}</h3>
        <p><b>Couvre :</b> ${s.couvre}</p>
        <p><b>Ce qui compte comme fait :</b> ${s.faits}</p>
        <p>${chiffre ? "Seule strate où le chiffre est ouvert : 13 des 16 cartes y ont un équivalent sourcé." : "Lecture scellée sans chiffre officiel : le chiffre s'ouvrira seulement si un critère fixé à l'avance est rempli."}</p>`;
    });
    grille.appendChild(b);
  });

  // Incompatibilités et tensions
  const li = (h) => { const e = document.createElement("li"); e.innerHTML = h; return e; };
  D.incompatibilites.forEach(x => document.getElementById("incompat").appendChild(li(`<b>${x.paire}</b><span>${x.fondement}</span>`)));
  D.tensions.forEach(x => document.getElementById("tensions").appendChild(li(`<b>${x.paire}</b><span>signale souvent : ${x.signale}</span>`)));

  // Fondements
  const T = THEORIE;
  document.getElementById("regle-import").textContent = "« " + T.regle_importation + " »";
  const fam = document.getElementById("familles"), app = document.getElementById("apports");
  T.fondements.forEach((f, i) => {
    const b = document.createElement("button");
    b.className = "famille"; b.style.setProperty("--k", `var(${f.couleur})`); b.setAttribute("aria-pressed", "false");
    b.innerHTML = `<span class="t">${f.famille}</span><span class="r">${f.apports.length} apports</span>`;
    b.addEventListener("click", () => ouvrirFamille(i));
    fam.appendChild(b);
  });
  function ouvrirFamille(i) {
    fam.querySelectorAll(".famille").forEach((x, j) => x.setAttribute("aria-pressed", String(i === j)));
    const f = T.fondements[i];
    app.innerHTML = f.apports.map(a => `<article style="--k:var(${f.couleur})"><h3>${a.source}</h3><p>${a.idee}</p><p class="fonde"><b>A fondé :</b> ${a.fonde}</p></article>`).join("");
  }
  ouvrirFamille(0);

  // Logique du calcul
  document.getElementById("logique").innerHTML = T.logique.map(l => `<li><b>${l.titre}</b><code>${l.formule}</code><p>${l.texte}</p></li>`).join("");
  document.getElementById("limites").innerHTML = "<li class='titre-lim'>Limites déclarées</li>" + T.limites.map(x => `<li>${x}</li>`).join("");

  // Maquette du moteur (même strate, apparition, sans base de cas)
  const M = D.moteur, selC = document.getElementById("cible"), fIn = document.getElementById("f"), srcBox = document.getElementById("sources");
  D.cartes.forEach(c => { const o = document.createElement("option"); o.value = c.code; o.textContent = `${c.glyphe} ${c.nom}`; selC.appendChild(o); });
  selC.value = "SEU";
  const pct = x => (100 * x).toLocaleString("fr-FR", { maximumFractionDigits: 1 }) + " %";
  function sourcesDe(code) { return D.liens.filter(l => l.cible === code); }
  function dessinerSources() {
    const s = sourcesDe(selC.value);
    srcBox.innerHTML = s.length ? "<p class='sous'>Cartes ancrées (sources de la carte visée selon la matrice) :</p>" + s.map(l =>
      `<label class="src"><input type="checkbox" value="${l.source}" data-f="${l.force}"> ${parCode[l.source].glyphe} ${parCode[l.source].nom} <span class="force">${FORCE[l.force]} · λ ${String(M.lambda_[l.force]).replace(".", ",")}</span></label>`).join("")
      : "<p class='sous'>Aucune carte de la matrice ne fait apparaître celle-ci.</p>";
    srcBox.querySelectorAll("input").forEach(i => i.addEventListener("change", calculer));
    calculer();
  }
  function calculer() {
    const f = fIn.value / 100;
    document.getElementById("f-val").textContent = pct(f);
    let LR = 1; const actives = [];
    srcBox.querySelectorAll("input:checked").forEach(i => { LR *= M.lambda_[i.dataset.f]; actives.push(parCode[i.value].nom); });
    const LRc = Math.min(LR, M.plafond_LR);
    let p = f * LRc / (1 - f + f * LRc);
    if (p > f) p = Math.min(p, Math.max(f, M.plafond_p0));
    document.getElementById("out-f").textContent = pct(f);
    document.getElementById("out-p").textContent = pct(p);
    document.getElementById("barre-f").style.width = pct(f).replace(",", ".").replace(" %", "%");
    document.getElementById("barre-p").style.width = (100 * p) + "%";
    document.getElementById("out-detail").textContent = actives.length
      ? `Produit des λ : ${LR.toLocaleString("fr-FR", { maximumFractionDigits: 2 })}${LR > M.plafond_LR ? " (plafonné à " + M.plafond_LR + ")" : ""}. Cote multipliée, jamais divisée : sans les freins, une carte ancrée ne peut que faire monter p.`
      : "Aucune carte ancrée : p = f. C'est le taux de base, le bras B.";
  }
  selC.addEventListener("change", dessinerSources); fIn.addEventListener("input", calculer);
  dessinerSources();

  // Hypothèses
  const ST = { essai: "Essai pré-enregistré", ombre: "En ombre", piste: "Piste, non construite", adopte: "Adopté", clos: "Clos sans adoption" };
  const filtres = document.getElementById("filtres"), liste = document.getElementById("liste-hyp");
  let filtre = "tout";
  ["tout", "essai", "ombre", "piste", "adopte", "clos"].forEach(k => {
    const b = document.createElement("button");
    const n = k === "tout" ? T.hypotheses.length : T.hypotheses.filter(h => h.statut === k).length;
    b.className = "filtre"; b.dataset.k = k; b.textContent = `${k === "tout" ? "Toutes" : ST[k]} (${n})`;
    b.addEventListener("click", () => { filtre = k; afficherHyp(); });
    filtres.appendChild(b);
  });
  function afficherHyp() {
    filtres.querySelectorAll(".filtre").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === filtre)));
    liste.innerHTML = T.hypotheses.filter(h => filtre === "tout" || h.statut === filtre).map(h =>
      `<article class="hyp ${h.statut}"><span class="statut">${ST[h.statut]}</span><h3>${h.titre}</h3>
        <p class="q">${h.question}</p><p><b>Origine :</b> ${h.inspiration}</p><p><b>Règle :</b> ${h.critere}</p></article>`).join("");
  }
  afficherHyp();

  // Mécanismes (catalogue du bot) et sources des signaux faibles
  const EM = { observatoire: "Observatoire", preenregistre: "Pré-enregistré", propose: "Proposé", rejete: "Rejeté" };
  const fm = document.getElementById("filtres-meca"), lm = document.getElementById("liste-meca");
  let filtreM = "tout";
  ["tout", "observatoire", "preenregistre", "propose", "rejete"].forEach(k => {
    const b = document.createElement("button");
    const n = k === "tout" ? T.mecanismes.length : T.mecanismes.filter(m => m.etat === k).length;
    b.className = "filtre"; b.dataset.k = k; b.textContent = `${k === "tout" ? "Tous" : EM[k]} (${n})`;
    b.addEventListener("click", () => { filtreM = k; afficherMeca(); });
    fm.appendChild(b);
  });
  function afficherMeca() {
    fm.querySelectorAll(".filtre").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === filtreM)));
    lm.innerHTML = T.mecanismes.filter(m => filtreM === "tout" || m.etat === filtreM).map(m =>
      `<article class="hyp meca ${m.etat}"><span class="statut">${m.code} · ${EM[m.etat]}</span><h3>${m.titre}</h3>
        <p><b>Indicateur :</b> ${m.indicateur}</p><p><b>Sens :</b> ${m.sens}</p><p>${m.note}</p></article>`).join("");
  }
  afficherMeca();
  document.getElementById("sources-ouvertes").innerHTML = T.sources.map(f =>
    `<div class="famille-source"><h4>${f.famille}</h4><ul>${f.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("");
})();
