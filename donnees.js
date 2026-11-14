// Généré depuis le skill alphabet-situationnel 0.7.77 (cartes-index.md, strates.md, matrice du moteur)
const DONNEES = {
 "version_skill": "0.7.77",
 "cartes": [
  {
   "code": "SEU",
   "nom": "SEUIL",
   "glyphe": "⊥",
   "definition": "franchissement d'une valeur critique après lequel le retour à l'état antérieur est impossible, ou ne peut plus se faire par le même chemin",
   "maths": "hystérésis (bistabilité : l'aller et le retour basculent à des valeurs différentes du paramètre)",
   "voisines": [
    "TRANSFORMATION",
    "CONTRAINTE",
    "POLARITÉ",
    "TRACE·MÉMOIRE"
   ]
  },
  {
   "code": "REC",
   "nom": "RÉCIPROCITÉ",
   "glyphe": "⊗",
   "definition": "un transfert entre deux parties crée l'obligation d'un contre-transfert entre les mêmes parties",
   "maths": "jeux répétés et stratégies conditionnelles (donnant-donnant, Axelrod 1984)",
   "voisines": [
    "COMMUNAUTÉ",
    "RÉSEAU",
    "RÉSONANCE",
    "HIÉRARCHIE"
   ]
  },
  {
   "code": "PER",
   "nom": "PÉRIODICITÉ",
   "glyphe": "↻",
   "definition": "retour d'un même état à intervalles réguliers, entretenu par la dynamique du système ou imposé par un forçage extérieur (calendrier, saison, échéance)",
   "maths": "orbites périodiques, cycles limites, oscillateurs autonomes ou forcés",
   "voisines": [
    "RÉCURSIVITÉ",
    "TRACE·MÉMOIRE",
    "RÉSONANCE"
   ]
  },
  {
   "code": "RCS",
   "nom": "RÉCURSIVITÉ",
   "glyphe": "↺",
   "definition": "le système prend sa propre opération ou sa propre représentation pour objet, et cette prise modifie l'opération qu'elle observe",
   "maths": "points fixes d'applications auto-référentielles (théorème de récursion, Kleene 1938)",
   "voisines": [
    "PÉRIODICITÉ",
    "ÉMERGENCE"
   ]
  },
  {
   "code": "EME",
   "nom": "ÉMERGENCE",
   "glyphe": "⊙",
   "definition": "une régularité collective (norme, convention, rôle, format, ordre) apparaît des interactions locales, sans avoir été prescrite par un agent central et sans être présente dans les composants pris isolément",
   "maths": "auto-organisation",
   "voisines": [
    "TRANSFORMATION",
    "RÉCURSIVITÉ",
    "CROISSANCE",
    "INCERTITUDE"
   ]
  },
  {
   "code": "HIE",
   "nom": "HIÉRARCHIE",
   "glyphe": "✦",
   "definition": "relation d'ordre entre positions — pour les paires concernées, l'une prime sur l'autre (autorité, validation, préséance), et l'ordre est au moins partiellement transitif",
   "maths": "ordres partiels",
   "voisines": [
    "RÉSEAU",
    "CONTRAINTE",
    "PROPORTION",
    "RÉCIPROCITÉ"
   ]
  },
  {
   "code": "RES",
   "nom": "RÉSEAU",
   "glyphe": "⊛",
   "definition": "topologie des liens — quels éléments sont reliés, par quels chemins un flux peut passer, où sont les ponts et les trous",
   "maths": "graphes",
   "voisines": [
    "COMMUNAUTÉ",
    "HIÉRARCHIE",
    "RÉCIPROCITÉ"
   ]
  },
  {
   "code": "POL",
   "nom": "POLARITÉ",
   "glyphe": "⥀",
   "definition": "un champ s'organise autour de deux pôles qui se définissent l'un par l'autre",
   "maths": "involution (groupe Z₂)",
   "voisines": [
    "CONTRAINTE",
    "SEUIL"
   ]
  },
  {
   "code": "INC",
   "nom": "INCERTITUDE",
   "glyphe": "Ø",
   "definition": "pour les acteurs de la situation, plusieurs états futurs ou cachés restent possibles, et cette indétermination organise leurs conduites (attente, couverture, recherche d'information, arrangements provisoires)",
   "maths": "distribution de probabilité sur un espace d'états non réduit",
   "voisines": [
    "CONTRAINTE",
    "ÉMERGENCE"
   ]
  },
  {
   "code": "CTR",
   "nom": "CONTRAINTE",
   "glyphe": "⊘",
   "definition": "une règle ou une limite retire des options de l'espace des possibles — formelle (loi, contrat, règlement), matérielle (budget, capacité, délai) ou sociale (tabou, sanction)",
   "maths": "ensemble admissible et contraintes actives (celles qui lient effectivement la solution)",
   "voisines": [
    "SEUIL",
    "HIÉRARCHIE",
    "POLARITÉ",
    "INCERTITUDE",
    "TRACE·MÉMOIRE"
   ]
  },
  {
   "code": "PRO",
   "nom": "PROPORTION",
   "glyphe": "◯",
   "definition": "rapport entre les grandeurs des parties d'un ensemble, et sa conservation ou sa rupture quand l'ensemble change d'échelle",
   "maths": "ratios",
   "voisines": [
    "HIÉRARCHIE",
    "CROISSANCE"
   ]
  },
  {
   "code": "TRA",
   "nom": "TRANSFORMATION",
   "glyphe": "∿",
   "definition": "une entité existante change de forme de façon progressive en conservant au moins un invariant nommable (identité, mission, membres, fonction)",
   "maths": "déformations continues (homotopies)",
   "voisines": [
    "ÉMERGENCE",
    "SEUIL",
    "CROISSANCE",
    "TRACE·MÉMOIRE"
   ]
  },
  {
   "code": "TRC",
   "nom": "TRACE·MÉMOIRE",
   "glyphe": "◊",
   "definition": "l'état présent dépend du chemin suivi, pas seulement des forces actuelles",
   "maths": "dépendance au chemin et rendements croissants (David 1985, Arthur 1989)",
   "voisines": [
    "PÉRIODICITÉ",
    "TRANSFORMATION",
    "CONTRAINTE",
    "SEUIL"
   ]
  },
  {
   "code": "CRO",
   "nom": "CROISSANCE",
   "glyphe": "▲",
   "definition": "augmentation d'une grandeur dont le taux dépend de la grandeur elle-même, jusqu'à une limite de capacité",
   "maths": "équations de croissance (exponentielle, logistique de Verhulst 1838, Gompertz 1825)",
   "voisines": [
    "TRANSFORMATION",
    "ÉMERGENCE",
    "PROPORTION"
   ]
  },
  {
   "code": "COM",
   "nom": "COMMUNAUTÉ",
   "glyphe": "⟶",
   "definition": "coopération d'un collectif de plus de deux membres autour d'un bien ou d'un projet commun, avec des règles d'appartenance et de contribution, et un problème de passager clandestin à gérer",
   "maths": "jeux de biens publics à n joueurs",
   "voisines": [
    "RÉSEAU",
    "RÉCIPROCITÉ",
    "RÉSONANCE"
   ]
  },
  {
   "code": "RSN",
   "nom": "RÉSONANCE",
   "glyphe": "✶",
   "definition": "plusieurs systèmes ayant chacun leur rythme propre se synchronisent par couplage",
   "maths": "oscillateurs couplés",
   "voisines": [
    "RÉCIPROCITÉ",
    "COMMUNAUTÉ",
    "PÉRIODICITÉ"
   ]
  }
 ],
 "liens": [
  {
   "source": "SEU",
   "cible": "PER",
   "force": "f"
  },
  {
   "source": "SEU",
   "cible": "TRA",
   "force": "M"
  },
  {
   "source": "SEU",
   "cible": "TRC",
   "force": "F"
  },
  {
   "source": "REC",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "REC",
   "cible": "HIE",
   "force": "M"
  },
  {
   "source": "REC",
   "cible": "POL",
   "force": "M"
  },
  {
   "source": "REC",
   "cible": "COM",
   "force": "f"
  },
  {
   "source": "PER",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "PER",
   "cible": "RSN",
   "force": "M"
  },
  {
   "source": "RCS",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "RCS",
   "cible": "CTR",
   "force": "f"
  },
  {
   "source": "RCS",
   "cible": "CRO",
   "force": "M"
  },
  {
   "source": "EME",
   "cible": "HIE",
   "force": "M"
  },
  {
   "source": "EME",
   "cible": "CTR",
   "force": "M"
  },
  {
   "source": "EME",
   "cible": "TRC",
   "force": "F"
  },
  {
   "source": "EME",
   "cible": "CRO",
   "force": "M"
  },
  {
   "source": "EME",
   "cible": "COM",
   "force": "f"
  },
  {
   "source": "EME",
   "cible": "RES",
   "force": "f"
  },
  {
   "source": "HIE",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "HIE",
   "cible": "POL",
   "force": "M"
  },
  {
   "source": "HIE",
   "cible": "TRA",
   "force": "f"
  },
  {
   "source": "HIE",
   "cible": "RCS",
   "force": "f"
  },
  {
   "source": "HIE",
   "cible": "INC",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "RES",
   "cible": "POL",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "PRO",
   "force": "M"
  },
  {
   "source": "RES",
   "cible": "EME",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "CRO",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "RSN",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "RCS",
   "force": "f"
  },
  {
   "source": "RES",
   "cible": "INC",
   "force": "f"
  },
  {
   "source": "POL",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "POL",
   "cible": "REC",
   "force": "f"
  },
  {
   "source": "POL",
   "cible": "HIE",
   "force": "M"
  },
  {
   "source": "POL",
   "cible": "CRO",
   "force": "M"
  },
  {
   "source": "POL",
   "cible": "CTR",
   "force": "f"
  },
  {
   "source": "INC",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "INC",
   "cible": "EME",
   "force": "M"
  },
  {
   "source": "INC",
   "cible": "CTR",
   "force": "M"
  },
  {
   "source": "INC",
   "cible": "RCS",
   "force": "f"
  },
  {
   "source": "CTR",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "CTR",
   "cible": "RES",
   "force": "M"
  },
  {
   "source": "CTR",
   "cible": "TRA",
   "force": "f"
  },
  {
   "source": "CTR",
   "cible": "INC",
   "force": "f"
  },
  {
   "source": "CTR",
   "cible": "COM",
   "force": "f"
  },
  {
   "source": "CTR",
   "cible": "PER",
   "force": "f"
  },
  {
   "source": "PRO",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "PRO",
   "cible": "POL",
   "force": "f"
  },
  {
   "source": "PRO",
   "cible": "TRA",
   "force": "M"
  },
  {
   "source": "TRA",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "TRA",
   "cible": "EME",
   "force": "f"
  },
  {
   "source": "TRA",
   "cible": "TRC",
   "force": "M"
  },
  {
   "source": "TRC",
   "cible": "SEU",
   "force": "f"
  },
  {
   "source": "TRC",
   "cible": "PER",
   "force": "f"
  },
  {
   "source": "TRC",
   "cible": "POL",
   "force": "f"
  },
  {
   "source": "CRO",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "CRO",
   "cible": "EME",
   "force": "f"
  },
  {
   "source": "CRO",
   "cible": "CTR",
   "force": "F"
  },
  {
   "source": "CRO",
   "cible": "RES",
   "force": "f"
  },
  {
   "source": "CRO",
   "cible": "PRO",
   "force": "f"
  },
  {
   "source": "COM",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "COM",
   "cible": "REC",
   "force": "f"
  },
  {
   "source": "COM",
   "cible": "HIE",
   "force": "M"
  },
  {
   "source": "COM",
   "cible": "RES",
   "force": "f"
  },
  {
   "source": "RSN",
   "cible": "SEU",
   "force": "M"
  },
  {
   "source": "RSN",
   "cible": "CRO",
   "force": "M"
  }
 ],
 "strates": [
  {
   "n": 1,
   "nom": "Matière",
   "couvre": "états et transformations de la matière et de l'énergie, sans organisme.",
   "faits": "mesures physiques datées, résultats expérimentaux, relevés d'instruments."
  },
  {
   "n": 2,
   "nom": "Vivant",
   "couvre": "organismes, populations, écosystèmes ; le corps humain comme organisme.",
   "faits": "comptages de populations, observations d'écosystèmes, données cliniques agrégées."
  },
  {
   "n": 3,
   "nom": "Psyché",
   "couvre": "fonctionnement d'un individu — perceptions, décisions, habitudes, développement.",
   "faits": "comportements décrits précisément, décisions datées, résultats de tests rapportés. Un ressenti n'est pas un fait (A5) ; une conduite l'est."
  },
  {
   "n": 4,
   "nom": "Relations",
   "couvre": "liens interpersonnels de petite taille — couple, famille, amitié, voisinage.",
   "faits": "échanges datés, ruptures, dons, conflits ouverts, décisions communes."
  },
  {
   "n": 5,
   "nom": "Organisations",
   "couvre": "collectifs dotés de règles d'appartenance — entreprises, associations, armées, administrations.",
   "faits": "décisions, organigrammes, effectifs, budgets internes, départs, réorganisations."
  },
  {
   "n": 6,
   "nom": "Économie",
   "couvre": "production, échange, monnaie, finance, marchés, travail.",
   "faits": "prix, volumes, taux, indicateurs datés, faillites, flux commerciaux."
  },
  {
   "n": 7,
   "nom": "Géopolitique",
   "couvre": "rapports entre États et acteurs armés ou transnationaux.",
   "faits": "déclarations officielles (faits sur le discours), accords, sanctions, mouvements de troupes, incidents datés, votes internationaux."
  },
  {
   "n": 8,
   "nom": "Droit",
   "couvre": "normes, procédures, juridictions, institutions juridiques.",
   "faits": "textes adoptés, décisions de justice, procédures ouvertes, délais."
  },
  {
   "n": 9,
   "nom": "Culture",
   "couvre": "récits, croyances, langues, arts, rites, religions.",
   "faits": "œuvres datées, pratiques observées, diffusion mesurée, rites décrits."
  },
  {
   "n": 10,
   "nom": "Technique",
   "couvre": "artefacts techniques, infrastructures, systèmes d'information.",
   "faits": "versions, pannes datées, taux d'adoption, capacités mesurées, normes publiées."
  },
  {
   "n": 11,
   "nom": "Climat",
   "couvre": "atmosphère, océans, cryosphère, cycles biogéochimiques.",
   "faits": "séries de mesures, anomalies datées, événements extrêmes enregistrés."
  },
  {
   "n": 12,
   "nom": "Histoire longue",
   "couvre": "dynamiques pluriséculaires — civilisations, démographie longue, empires.",
   "faits": "séries historiques, événements datés établis par l'historiographie."
  },
  {
   "n": 13,
   "nom": "Politique intérieure",
   "couvre": "la compétition pour le pouvoir et son exercice à l'intérieur d'un État — exécutif, Parlement, partis, élections, opinion, mobilisations et mouvements sociaux.",
   "faits": "votes et scrutins nominatifs, résultats proclamés, motions, nominations, déclarations (faits sur le discours, A5), manifestations comptées par une source nommée, sondages publiés (fait sur la mesure publiée, pas sur l'opinion elle-même)."
  }
 ],
 "strates_chiffrees": [
  7
 ]
};
