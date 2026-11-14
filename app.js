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
      </dl>`;
    fiche.querySelectorAll("[data-code]").forEach(b => b.addEventListener("click", () => montrer(b.dataset.code, true)));
  }
  montrer("SEU", true);

  // Strates
  const RANGEE = {
    1: ["Sans intention", "--r1"], 2: ["Sans intention", "--r1"], 11: ["Sans intention", "--r1"],
    3: ["Agents et groupes", "--r2"], 4: ["Agents et groupes", "--r2"], 5: ["Agents et groupes", "--r2"],
    6: ["Institutions", "--r3"], 7: ["Institutions", "--r3"], 8: ["Institutions", "--r3"], 13: ["Institutions", "--r3"],
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
        <p>${chiffre ? "Strate où le chiffre est ouvert." : "Lecture scellée sans chiffre officiel : le chiffre s'ouvrira seulement si un critère fixé à l'avance est rempli."}</p>`;
    });
    grille.appendChild(b);
  });
})();
