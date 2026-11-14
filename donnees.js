// Généré depuis le skill alphabet-situationnel 0.7.77 (cartes-index.md, strates.md, dynamiques.md, antagonismes.md, matrice du moteur)
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
   ],
   "inertie": "0,97 (forte) — par définition, le retour par le même chemin est fermé.",
   "transitions": [
    {
     "vers": "TRACE·MÉMOIRE apparaît",
     "force": "forte",
     "mecanisme": "le franchissement laisse un résidu qui conditionne la suite (inclusion SEUIL ⊂ TRACE)."
    },
    {
     "vers": "TRANSFORMATION apparaît",
     "force": "moyenne",
     "mecanisme": "l'entité se réorganise dans le nouveau régime."
    },
    {
     "vers": "SEUIL apparaît dans une autre strate",
     "force": "moyenne",
     "mecanisme": "propagation d'une irréversibilité (défaut économique → rupture diplomatique)."
    },
    {
     "vers": "PÉRIODICITÉ apparaît",
     "force": "faible",
     "mecanisme": "nouveau régime cyclique après bifurcation."
    },
    {
     "vers": "Retour à l'état antérieur par le même chemin — non documentée (exclu par la définition).",
     "force": "",
     "mecanisme": ""
    }
   ],
   "bascule": "retour plus lent après une perturbation (ralentissement critique), variance et autocorrélation croissantes, oscillations entre deux états.",
   "entrees": "CROISSANCE, CONTRAINTE qui se resserre, POLARITÉ en escalade, RÉCURSIVITÉ (panique), RÉSEAU (cascade), RÉSONANCE (amplification).",
   "freins": ""
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
   ],
   "inertie": "0,65 (moyenne) — la boucle se maintient tant que les retours suivent.",
   "transitions": [
    {
     "vers": "POLARITÉ apparaît",
     "force": "moyenne",
     "mecanisme": "un non-retour déclenche la rétorsion (réciprocité négative, donnant-donnant en spirale)."
    },
    {
     "vers": "HIÉRARCHIE apparaît",
     "force": "moyenne",
     "mecanisme": "une dette qui ne peut être rendue crée une dépendance (relation patron-client)."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "rupture définitive de la relation."
    },
    {
     "vers": "COMMUNAUTÉ apparaît",
     "force": "faible",
     "mecanisme": "élargissement à plus de deux parties."
    }
   ],
   "bascule": "un transfert non rendu à l'échéance d'usage ; rappel explicite d'une dette ; retard croissant des contre-transferts.",
   "entrees": "COMMUNAUTÉ qui se fragmente, POLARITÉ en désescalade négociée.",
   "freins": ""
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
   ],
   "inertie": "0,90 (forte) — un cycle limite est stable ; la phase suivante est la transition la plus probable.",
   "transitions": [
    {
     "vers": "Phase suivante du cycle (même carte, phase avancée) — forte.",
     "force": "",
     "mecanisme": ""
    },
    {
     "vers": "RÉSONANCE apparaît",
     "force": "moyenne",
     "mecanisme": "couplage avec un autre cycle."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "un forçage externe brise le cycle."
    }
   ],
   "bascule": "dérive de la période, amplitude croissante, phase manquée.",
   "entrees": "SEUIL (nouveau régime cyclique), CONTRAINTE à échéance fixe, TRACE·MÉMOIRE (rite).",
   "freins": ""
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
   ],
   "inertie": "0,65 (moyenne) — l'auto-représentation persiste tant qu'elle est diffusée.",
   "transitions": [
    {
     "vers": "CROISSANCE {rétroaction amplifiante} apparaît",
     "force": "moyenne",
     "mecanisme": "prophétie autoréalisatrice."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "une représentation partagée déclenche un basculement (panique, retrait massif)."
    },
    {
     "vers": "CONTRAINTE apparaît",
     "force": "faible",
     "mecanisme": "l'indicateur détourné est encadré par de nouvelles règles."
    },
    {
     "vers": "Disparition",
     "force": "faible",
     "mecanisme": "prophétie autodestructrice : la prévision publiée annule ce qu'elle annonce."
    }
   ],
   "bascule": "publication très diffusée d'une mesure, notation ou prévision ; changement de comportement immédiat des acteurs mesurés.",
   "entrees": "HIÉRARCHIE (classements), RÉSEAU (diffusion), INCERTITUDE (recherche de signaux).",
   "freins": ""
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
   ],
   "inertie": "0,65 (moyenne) — une régularité naissante reste fragile.",
   "transitions": [
    {
     "vers": "TRACE·MÉMOIRE apparaît",
     "force": "forte",
     "mecanisme": "verrouillage par adoption auto-renforcée."
    },
    {
     "vers": "CROISSANCE apparaît",
     "force": "moyenne",
     "mecanisme": "diffusion par imitation."
    },
    {
     "vers": "HIÉRARCHIE ou CONTRAINTE apparaît",
     "force": "moyenne",
     "mecanisme": "institutionnalisation, codification."
    },
    {
     "vers": "Disparition",
     "force": "faible",
     "mecanisme": "la régularité ne trouve pas d'adoptants."
    }
   ],
   "bascule": "taux d'adoption ; premiers acteurs qui défendent la régularité ; première mise par écrit.",
   "entrees": "INCERTITUDE (une forme tranche entre des possibles), RÉSEAU (interactions locales denses), CROISSANCE (changement d'échelle).",
   "freins": ""
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
   ],
   "inertie": "0,88 (forte) — un ordre de préséance se reproduit.",
   "transitions": [
    {
     "vers": "POLARITÉ apparaît",
     "force": "moyenne",
     "mecanisme": "contestation, surtout au moment d'une succession."
    },
    {
     "vers": "TRANSFORMATION apparaît",
     "force": "faible",
     "mecanisme": "réforme de l'ordre, sommet conservé."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "renversement."
    }
   ],
   "bascule": "succession ouverte ou incertaine ; perte d'une ressource par le sommet ; défections d'échelons intermédiaires.",
   "entrees": "RÉCIPROCITÉ (dette), COMMUNAUTÉ (garant), POLARITÉ (un pôle l'emporte), ÉMERGENCE (institutionnalisation).",
   "freins": "ÉMERGENCE — un ordre prescrit par une autorité préempte l'ordre non prescrit que l'émergence exige. *Fermeture* : l'autorité fixe elle-même la règle ou le format que les acteurs auraient pu inventer."
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
   ],
   "inertie": "0,90 (forte) — une topologie change lentement.",
   "transitions": [
    {
     "vers": "PROPORTION apparaît (concentration)",
     "force": "moyenne",
     "mecanisme": "attachement préférentiel vers les nœuds centraux."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "cascade par défaillance d'un nœud central ou perte d'un pont ; peut toucher une autre strate (chaîne d'approvisionnement → économie)."
    },
    {
     "vers": "POLARITÉ apparaît",
     "force": "faible",
     "mecanisme": "fragmentation en deux composantes après perte d'un pont."
    }
   ],
   "bascule": "centralité croissante d'un nœud ; pont unique entre deux groupes ; défaillance d'un nœud central.",
   "entrees": "CROISSANCE (expansion), ÉMERGENCE, COMMUNAUTÉ.",
   "freins": ""
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
   ],
   "inertie": "0,85 (forte) — un champ à deux pôles se maintient.",
   "transitions": [
    {
     "vers": "CROISSANCE {rétroaction amplifiante} apparaît",
     "force": "moyenne",
     "mecanisme": "escalade (spirale de rétorsions)."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "rupture."
    },
    {
     "vers": "HIÉRARCHIE apparaît",
     "force": "moyenne",
     "mecanisme": "un pôle domine l'autre."
    },
    {
     "vers": "RÉCIPROCITÉ apparaît",
     "force": "faible",
     "mecanisme": "désescalade par échanges conditionnels."
    }
   ],
   "bascule": "rétorsions successives de plus en plus fortes ; disparition des intermédiaires ; alignements exclusifs exigés des tiers.",
   "entrees": "RÉCIPROCITÉ (non-retour), RÉSEAU (perte d'un pont), HIÉRARCHIE (contestation).",
   "freins": "COMMUNAUTÉ — deux pôles qui se définissent l'un par l'autre divisent le collectif de plus de deux membres (McCoy & Somer 2019). *Fermeture* : un bien commun ou un projet partagé se scinde en deux camps."
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
   ],
   "inertie": "0,40 (faible) — les possibles se résolvent avec le temps.",
   "transitions": [
    {
     "vers": "ÉMERGENCE apparaît",
     "force": "moyenne",
     "mecanisme": "une forme tranche entre les possibles."
    },
    {
     "vers": "CONTRAINTE apparaît",
     "force": "moyenne",
     "mecanisme": "une option se ferme (séquentiel, donc compatible avec l'incompatibilité sur un même objet *au même moment*)."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "résolution par basculement."
    }
   ],
   "bascule": "échéance de décision ; couvertures qui se défont ; un acteur abandonne une option publiquement.",
   "entrees": "CONTRAINTE qui se relâche, RÉSEAU (signaux contradictoires), HIÉRARCHIE (succession ouverte).",
   "freins": "CROISSANCE — les acteurs retardent les engagements irréversibles (investissement, embauche) qui portent la croissance (Dixit & Pindyck 1994 ; Bloom 2009). *Fermeture* : décisions reportées « en attendant », investissements suspendus."
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
   ],
   "inertie": "0,90 pour une contrainte formelle, 0,65 pour une contrainte matérielle (option du moteur --ctr-materielle) — forte pour une contrainte formelle (loi, traité), moyenne pour une contrainte matérielle.",
   "transitions": [
    {
     "vers": "RÉSEAU apparaît",
     "force": "moyenne",
     "mecanisme": "contournement par des canaux parallèles."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "la contrainte se resserre jusqu'à rendre l'état actuel intenable."
    },
    {
     "vers": "TRANSFORMATION apparaît",
     "force": "faible",
     "mecanisme": "adaptation qui conserve l'invariant."
    },
    {
     "vers": "Disparition (relâchement) — couverte par l'inertie.",
     "force": "",
     "mecanisme": ""
    }
   ],
   "bascule": "coût d'opportunité croissant (ce que la contrainte empêche vaut de plus en plus) ; tentatives de contournement documentées ; échéance de révision.",
   "entrees": "CROISSANCE (capacité atteinte), ÉMERGENCE (codification), POLARITÉ (sanctions).",
   "freins": "CROISSANCE — la capacité limite active borne le taux (logistique, Verhulst 1838). *Fermeture* : plafond, quota ou capacité nommée atteint, demandes refusées faute de capacité."
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
   ],
   "inertie": "0,85 (forte) — tant que l'échelle ne change pas.",
   "transitions": [
    {
     "vers": "TRANSFORMATION apparaît",
     "force": "moyenne",
     "mecanisme": "réorganisation pour restaurer un rapport rompu par un changement d'échelle."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "rupture de proportion non absorbée."
    },
    {
     "vers": "POLARITÉ apparaît",
     "force": "faible",
     "mecanisme": "concentration extrême qui sépare deux groupes."
    }
   ],
   "bascule": "changement d'échelle rapide ; écart croissant à la loi d'échelle habituelle.",
   "entrees": "CROISSANCE, RÉSEAU (concentration).",
   "freins": ""
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
   ],
   "inertie": "0,65 (moyenne) — un processus en cours tend à se poursuivre.",
   "transitions": [
    {
     "vers": "TRACE·MÉMOIRE apparaît",
     "force": "moyenne",
     "mecanisme": "fin du processus, la forme nouvelle se fixe."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "le processus franchit un point de non-retour (tension documentée SEUIL ~ TRANSFORMATION)."
    },
    {
     "vers": "ÉMERGENCE d'une entité nouvelle",
     "force": "faible",
     "mecanisme": "l'invariant est perdu : ce n'est plus la même entité."
    }
   ],
   "bascule": "menace sur l'invariant (mission, membres, identité) ; accélération du changement.",
   "entrees": "SEUIL, CONTRAINTE (adaptation), PROPORTION.",
   "freins": ""
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
   ],
   "inertie": "0,96 (forte) — par définition, le passé continue d'agir.",
   "transitions": [
    {
     "vers": "POLARITÉ apparaît",
     "force": "faible",
     "mecanisme": "réactivation d'un grief ancien."
    },
    {
     "vers": "PÉRIODICITÉ apparaît",
     "force": "faible",
     "mecanisme": "commémorations, retours rituels."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "faible",
     "mecanisme": "seul un choc rompt un verrouillage."
    }
   ],
   "bascule": "anniversaire d'un événement fondateur ; réactivation publique d'un grief ; coût de changement qui chute.",
   "entrees": "SEUIL, ÉMERGENCE (verrouillage), TRANSFORMATION achevée.",
   "freins": "TRANSFORMATION — le verrouillage résiste au changement de forme ; ÉMERGENCE — la convention en place occupe la place d'une nouvelle (Arthur 1989, David 1985). *Fermeture* : coûts de sortie élevés et nommés, alternatives abandonnées faute d'adoption."
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
   ],
   "inertie": "0,65 (moyenne) — dépend de la phase (exponentielle, inflexion, saturation).",
   "transitions": [
    {
     "vers": "CONTRAINTE apparaît",
     "force": "forte",
     "mecanisme": "la capacité limite devient active (logistique)."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "dépassement de la capacité puis effondrement (bulle)."
    },
    {
     "vers": "ÉMERGENCE apparaît",
     "force": "faible",
     "mecanisme": "propriétés nouvelles par changement d'échelle."
    },
    {
     "vers": "Peut toucher une autre strate : une croissance économique active une contrainte climatique.",
     "force": "",
     "mecanisme": ""
    }
   ],
   "bascule": "taux de croissance qui baisse (passage du point d'inflexion) ; approche d'une capacité nommée ; financement de la croissance par la croissance elle-même.",
   "entrees": "RÉCURSIVITÉ, ÉMERGENCE (diffusion), RÉSEAU (effets de réseau).",
   "freins": ""
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
   ],
   "inertie": "0,65 (moyenne) — dépend des sanctions contre les passagers clandestins.",
   "transitions": [
    {
     "vers": "SEUIL apparaît (dissolution)",
     "force": "moyenne",
     "mecanisme": "les passagers clandestins non sanctionnés vident le bien commun."
    },
    {
     "vers": "HIÉRARCHIE apparaît",
     "force": "moyenne",
     "mecanisme": "un garant ou une autorité de sanction se met en place."
    },
    {
     "vers": "RÉCIPROCITÉ apparaît",
     "force": "faible",
     "mecanisme": "retour à des échanges bilatéraux."
    }
   ],
   "bascule": "contributions en baisse ; défections sans sanction ; contestation des règles d'accès.",
   "entrees": "RÉCIPROCITÉ élargie, ÉMERGENCE, CONTRAINTE commune.",
   "freins": ""
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
   ],
   "inertie": "0,85 (forte) — au-delà du couplage critique, la synchronisation se maintient.",
   "transitions": [
    {
     "vers": "CROISSANCE apparaît (amplitude collective)",
     "force": "moyenne",
     "mecanisme": "des oscillations alignées s'additionnent."
    },
    {
     "vers": "SEUIL apparaît",
     "force": "moyenne",
     "mecanisme": "oscillation synchronisée qui dépasse la tolérance du système ; peut toucher une autre strate."
    },
    {
     "vers": "Disparition (désynchronisation) — couverte par l'inertie, si le couplage faiblit.",
     "force": "",
     "mecanisme": ""
    }
   ],
   "bascule": "force de couplage (nombre et intensité des liens) ; alignement de phase mesuré ; amplitude commune croissante.",
   "entrees": "PÉRIODICITÉ (cycles couplés), RÉSEAU (couplage).",
   "freins": ""
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
 ],
 "incompatibilites": [
  {
   "paire": "ÉMERGENCE ↮ TRANSFORMATION",
   "fondement": "ÉMERGENCE : « une régularité collective […] apparaît » ; TRANSFORMATION : « une entité existante change de forme ». Une même entité ne peut pas, au même moment, apparaître et préexister.",
   "objet": "la même entité (norme, rôle, organisation)"
  },
  {
   "paire": "INCERTITUDE ↮ CONTRAINTE",
   "fondement": "INCERTITUDE : « plusieurs états […] restent possibles » ; CONTRAINTE : « retire des options de l'espace des possibles ». Une même option ne peut pas être à la fois ouverte et exclue.",
   "objet": "la même option ou le même état futur"
  }
 ],
 "tensions": [
  {
   "paire": "ÉMERGENCE ~ CROISSANCE",
   "raison": "Aspects compatibles : le changement d'échelle fait apparaître des propriétés nouvelles (Anderson 1972). La v0.3.1 dérivait l'exclusion d'une question discriminante, ce que sa propre règle interdit.",
   "signale": "une croissance qui change la nature du collectif"
  },
  {
   "paire": "ÉMERGENCE ~ RÉCURSIVITÉ",
   "raison": "L'exclusion reposait sur la stipulation « émergence sans auto-référence » ; la rétroaction est un mécanisme ordinaire de l'émergence.",
   "signale": "un ordre qui se stabilise en se représentant lui-même"
  },
  {
   "paire": "INCERTITUDE ~ ÉMERGENCE",
   "raison": "Relation séquentielle (avant / après).",
   "signale": "une forme qui commence à trancher entre des possibles"
  },
  {
   "paire": "SEUIL ~ TRANSFORMATION",
   "raison": "Depuis v0.4, SEUIL est défini par l'irréversibilité et non par la soudaineté : un changement progressif peut franchir un point de non-retour (la métamorphose).",
   "signale": "une transformation qui a passé son point de non-retour"
  },
  {
   "paire": "PÉRIODICITÉ ~ SEUIL",
   "raison": "Séquentiel : un système peut basculer irréversiblement puis entrer en régime périodique (cycle limite après bifurcation).",
   "signale": "un nouveau régime cyclique après une rupture"
  },
  {
   "paire": "PÉRIODICITÉ ~ TRACE·MÉMOIRE",
   "raison": "Un rituel annuel est un retour régulier et une trace ; la mémoire est même la condition d'un cycle (conserver sa phase).",
   "signale": "un retour régulier qui transporte un héritage"
  },
  {
   "paire": "RÉCIPROCITÉ ~ HIÉRARCHIE",
   "raison": "Aspects différents d'un même rapport : obligation réciproque sous asymétrie de statut (patron-client ; Gouldner 1960, Scott 1972).",
   "signale": "une dépendance entretenue par la dette"
  }
 ],
 "moteur": {
  "lambda_": {
   "F": 3.0,
   "M": 1.8,
   "f": 1.2,
   "I": 0.556
  },
  "plafond_p0": 0.95,
  "plafond_LR": 10.0,
  "inertie": {
   "SEU": 0.97,
   "TRC": 0.96,
   "PER": 0.9,
   "RES": 0.9,
   "CTR": 0.9,
   "HIE": 0.88,
   "POL": 0.85,
   "PRO": 0.85,
   "RSN": 0.85,
   "REC": 0.65,
   "RCS": 0.65,
   "EME": 0.65,
   "TRA": 0.65,
   "COM": 0.65,
   "CRO": 0.65,
   "INC": 0.4
  }
 }
};
