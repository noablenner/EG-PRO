// ============================================================
//  CONTENU DES PAGES « RÉNOVATION À MULHOUSE »
//  Une page par requête cible :
//   - /renovation-mulhouse              → « rénovation mulhouse »
//   - /renovation-appartement-mulhouse  → « rénovation appartement mulhouse »
//   - /renovation-immeuble-mulhouse     → « rénovation immeuble mulhouse »
// ============================================================

import { DOSSIERS } from "./site";

export type Step = { n: string; title: string; desc: string };

export type RenovationPage = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  serviceType: string;
  eyebrow: string;
  /** H1 : avant / mot mis en avant / après */
  h1: [string, string, string];
  heroIntro: string;
  introTitle: string;
  intro: string[];
  profilesTitle: string;
  profiles: { title: string; desc: string; href?: string }[];
  worksTitle: string;
  worksIntro: string;
  works: { title: string; items: string[] }[];
  localTitle: string;
  local: string[];
  checklistTitle: string;
  checklist: string[];
  steps?: Step[];
  dossiers: typeof DOSSIERS;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

// Quartiers de Mulhouse (contexte local).
export const MULHOUSE_QUARTIERS = [
  "Centre-ville",
  "Rebberg",
  "Dornach",
  "Bourtzwiller",
  "Les Coteaux",
  "Drouot",
  "Fonderie",
  "Vauban-Neppert",
  "Nordfeld",
  "Doller",
  "Cité",
  "Brustlein",
];

const pick = (...titles: string[]) =>
  DOSSIERS.filter((d) => titles.includes(d.title));

const FREE_ANSWER =
  "Oui. Pour vous, la mise en relation est gratuite et sans engagement : EG-PRO est une société de courtage en travaux, rémunérée par les entreprises partenaires lorsqu'une affaire aboutit, jamais par le client.";

// ------------------------------------------------------------
//  Rénovation à Mulhouse (page générale)
// ------------------------------------------------------------
export const RENOVATION_MULHOUSE: RenovationPage = {
  path: "/renovation-mulhouse",
  metaTitle: "Rénovation à Mulhouse : artisans fiables et devis comparatifs",
  metaDescription:
    "Rénovation à Mulhouse : appartement, maison, immeuble ou local. EG-PRO vous met en relation gratuitement avec des artisans fiables et vous aide à comparer 2 à 3 devis. Mulhouse et agglomération.",
  breadcrumb: "Rénovation à Mulhouse",
  serviceType: "Courtage en travaux de rénovation",
  eyebrow: "Rénovation · Mulhouse",
  h1: ["Rénovation à Mulhouse : ", "les bons artisans", " pour votre projet"],
  heroIntro:
    "Appartement, maison, immeuble ou local professionnel : EG-PRO vous met en relation avec des artisans et entreprises de rénovation fiables à Mulhouse et dans toute l'agglomération, gratuitement et sans engagement.",
  introTitle: "Un seul interlocuteur pour votre rénovation à Mulhouse",
  intro: [
    "Trouver des artisans disponibles, sérieux et au juste prix à Mulhouse prend du temps : il faut contacter plusieurs entreprises, organiser les visites, relancer, puis comparer des devis qui ne chiffrent jamais tout à fait la même chose.",
    "EG-PRO est une société de courtage en travaux implantée dans le Haut-Rhin. Je m'appuie sur un réseau de plus de 63 entreprises partenaires, couvrant plus de 20 corps de métier, pour orienter votre projet de rénovation vers les professionnels adaptés et vous aider à obtenir des devis clairs et comparables.",
    "Vous gardez toujours le libre choix de l'entreprise. Les travaux sont réalisés par les entreprises partenaires, qui restent seules responsables de leurs devis et de leurs prestations.",
  ],
  profilesTitle: "Quel bien souhaitez-vous rénover ?",
  profiles: [
    {
      title: "Un appartement",
      desc: "Rénovation complète ou partielle, cuisine, salle de bain, remise en état avant location.",
      href: "/renovation-appartement-mulhouse",
    },
    {
      title: "Un immeuble",
      desc: "Façade, toiture, parties communes, réseaux, restructuration ou division en lots.",
      href: "/renovation-immeuble-mulhouse",
    },
    {
      title: "Une maison",
      desc: "Travaux intérieurs et extérieurs, mise aux normes, dépannages : le bon artisan, sans prise de tête.",
      href: "/particuliers",
    },
    {
      title: "Des locaux professionnels",
      desc: "Bureaux, commerces, locaux d'activité : rénovation, entretien et maintenance.",
      href: "/professionnels",
    },
  ],
  worksTitle: "Les travaux de rénovation concernés",
  worksIntro:
    "Du simple rafraîchissement à la rénovation lourde, je vous oriente vers les entreprises compétentes pour chaque corps de métier.",
  works: [
    {
      title: "Rénovation intérieure",
      items: [
        "Rénovation complète",
        "Cuisine & salle de bain",
        "Sols : carrelage, parquet, PVC",
        "Peinture & revêtements muraux",
        "Plâtrerie & cloisons",
        "Menuiserie intérieure",
      ],
    },
    {
      title: "Travaux techniques",
      items: [
        "Électricité & mise aux normes",
        "Plomberie & sanitaire",
        "Chauffage & remplacement de chaudière",
        "Ventilation / VMC",
        "Isolation",
      ],
    },
    {
      title: "Extérieur & bâti",
      items: [
        "Ravalement de façade",
        "Toiture, couverture & charpente",
        "Nettoyage toiture & façade par drone",
        "Menuiseries extérieures",
        "Étanchéité",
      ],
    },
    {
      title: "Projets immobiliers",
      items: [
        "Rénovation d'immeuble",
        "Remise en état avant location ou revente",
        "Division de lots",
        "Restructuration de biens",
        "Rénovation de locaux professionnels",
      ],
    },
  ],
  localTitle: "Rénover à Mulhouse : bien connaître le bâti local",
  local: [
    "Mulhouse présente un parc immobilier très varié : immeubles de rapport de la fin du XIXe et du début du XXe siècle en centre-ville et dans les faubourgs, maisons de la Cité ouvrière, villas du Rebberg, grands ensembles et copropriétés des années 1960-1970 aux Coteaux ou à Bourtzwiller. Chaque type de bâti a ses points de vigilance : réseaux électriques et de plomberie anciens, planchers bois, façades à reprendre, isolation souvent insuffisante.",
    "Connaître ces spécificités, et les entreprises habituées à intervenir sur ce type de bâtiments, permet de chiffrer le projet au plus juste et d'éviter les mauvaises surprises en cours de chantier.",
    "Pour les propriétaires bailleurs, la rénovation énergétique est aussi devenue incontournable : avec la loi Climat et Résilience, les logements classés G au DPE ne peuvent plus faire l'objet d'un nouveau bail depuis 2025, les logements F suivront en 2028 et les E en 2034.",
  ],
  checklistTitle: "Bien préparer votre projet de rénovation",
  checklist: [
    "Définir vos priorités et une enveloppe budgétaire réaliste",
    "Faire le point sur l'état du bien (électricité, plomberie, DPE…)",
    "Vérifier le règlement de copropriété si vous êtes en appartement",
    "Comparer deux à trois devis détaillés, poste par poste",
    "Vérifier l'assurance décennale des entreprises retenues",
    "Vous renseigner sur les aides (MaPrimeRénov', CEE…) : certaines exigent une entreprise labellisée RGE",
  ],
  dossiers: pick(
    "Remplacement de chaudière",
    "Porte d'entrée de copropriété",
    "Rénovation multi-lots",
    "Rénovation d'une maison"
  ),
  faq: [
    {
      q: "Combien coûte une rénovation à Mulhouse ?",
      a: "Tout dépend de la nature du bien, de son état et du niveau de finition souhaité : un rafraîchissement (peinture, sols) n'a rien à voir avec une rénovation complète incluant électricité, plomberie et redistribution des pièces. Le plus fiable reste de faire chiffrer le projet sur place : j'organise les visites avec les entreprises adaptées et vous aide à obtenir plusieurs devis comparables.",
    },
    {
      q: "La mise en relation avec les artisans est-elle payante ?",
      a: FREE_ANSWER,
    },
    {
      q: "EG-PRO réalise-t-il les travaux de rénovation ?",
      a: "Non. EG-PRO est un intermédiaire : je vous mets en relation avec des entreprises de rénovation et des artisans partenaires, et je facilite les échanges. Ce sont les entreprises qui établissent leurs devis et réalisent les travaux, sous leur entière responsabilité.",
    },
    {
      q: "Combien de devis vais-je recevoir ?",
      a: "En général, deux à trois devis comparatifs. Les demandes sont préparées de manière claire pour que les propositions soient réellement comparables, et vous restez libre de choisir l'entreprise, ou de n'en retenir aucune.",
    },
    {
      q: "Dans quels secteurs autour de Mulhouse intervenez-vous ?",
      a: "Mulhouse et toute son agglomération (Riedisheim, Rixheim, Illzach, Kingersheim, Wittenheim, Pfastatt, Lutterbach, Brunstatt-Didenheim, Habsheim…), ainsi que l'ensemble du Haut-Rhin : Colmar, Guebwiller, Saint-Louis et alentours.",
    },
    {
      q: "Dans quels délais les travaux peuvent-ils démarrer ?",
      a: "Les délais dépendent du planning des entreprises, de la saison et de l'ampleur du chantier. L'intérêt d'un réseau étendu est de pouvoir solliciter plusieurs entreprises en parallèle pour trouver des disponibilités compatibles avec votre calendrier.",
    },
  ],
  ctaTitle: "Un projet de rénovation à Mulhouse ?",
  ctaText:
    "Expliquez-moi votre besoin : je vous oriente vers les bons artisans, gratuitement et sans engagement.",
};

// ------------------------------------------------------------
//  Rénovation d'appartement à Mulhouse
// ------------------------------------------------------------
export const RENOVATION_APPARTEMENT: RenovationPage = {
  path: "/renovation-appartement-mulhouse",
  metaTitle: "Rénovation d'appartement à Mulhouse : artisans et devis gratuits",
  metaDescription:
    "Rénovation d'appartement à Mulhouse : rénovation complète, cuisine, salle de bain, sols, électricité, remise en état avant location. Mise en relation gratuite avec des artisans fiables et devis comparatifs.",
  breadcrumb: "Rénovation d'appartement à Mulhouse",
  serviceType: "Rénovation d'appartement",
  eyebrow: "Rénovation d'appartement · Mulhouse",
  h1: ["Rénovation ", "d'appartement", " à Mulhouse"],
  heroIntro:
    "Rénovation complète, rafraîchissement avant location, cuisine ou salle de bain : EG-PRO vous met en relation avec des artisans fiables pour rénover votre appartement à Mulhouse, gratuitement et sans engagement.",
  introTitle: "Rénover un appartement à Mulhouse, sans multiplier les interlocuteurs",
  intro: [
    "Rénover un appartement, c'est souvent coordonner plusieurs corps de métier (électricien, plombier, plaquiste, carreleur, peintre, menuisier) tout en composant avec les contraintes d'une copropriété : accès, horaires, parties communes, règlement.",
    "Propriétaire occupant, investisseur ou SCI : je vous oriente vers des entreprises habituées à intervenir en appartement à Mulhouse, capables de chiffrer clairement et de tenir leurs engagements. Vous comparez les devis et choisissez librement.",
    "EG-PRO intervient comme intermédiaire : les entreprises partenaires réalisent les travaux et restent seules responsables de leurs devis et de leurs prestations.",
  ],
  profilesTitle: "Pour qui ?",
  profiles: [
    {
      title: "Propriétaires occupants",
      desc: "Moderniser votre intérieur, gagner en confort, refaire une pièce ou tout l'appartement.",
      href: "/particuliers",
    },
    {
      title: "Investisseurs & bailleurs",
      desc: "Remise en état entre deux locataires, mise aux normes, amélioration du DPE avant location.",
      href: "/investisseurs",
    },
    {
      title: "SCI & marchands de biens",
      desc: "Rénovation avant revente ou mise en location, chiffrage rapide pour vos arbitrages.",
      href: "/investisseurs",
    },
    {
      title: "Achat avec travaux",
      desc: "Faire chiffrer les travaux d'un appartement que vous envisagez d'acheter à Mulhouse.",
    },
  ],
  worksTitle: "Les travaux de rénovation d'appartement",
  worksIntro:
    "Une pièce ou l'appartement entier : je mobilise les entreprises adaptées à chaque poste de travaux.",
  works: [
    {
      title: "Rénovation complète",
      items: [
        "Redistribution des pièces & cloisons",
        "Réfection électrique complète",
        "Plomberie & réseaux d'eau",
        "Sols, murs & plafonds",
        "Menuiseries intérieures",
      ],
    },
    {
      title: "Cuisine & salle de bain",
      items: [
        "Rénovation de salle de bain",
        "Douche à l'italienne, WC",
        "Cuisine équipée",
        "Carrelage & faïence",
        "Sanitaire complet",
      ],
    },
    {
      title: "Finitions & rafraîchissement",
      items: [
        "Peinture",
        "Parquet, PVC, carrelage",
        "Portes & placards",
        "Remise en état après départ d'un locataire",
      ],
    },
    {
      title: "Confort & énergie",
      items: [
        "Isolation par l'intérieur",
        "Remplacement de fenêtres",
        "Chauffage & chaudière",
        "VMC & ventilation",
        "Mise aux normes électriques",
      ],
    },
  ],
  localTitle: "Appartements à Mulhouse : les points de vigilance",
  local: [
    "Dans les immeubles anciens du centre-ville et des faubourgs mulhousiens, les installations électriques et les réseaux d'eau datent souvent de plusieurs décennies : une mise aux normes est fréquemment nécessaire, en particulier avant une remise en location. Dans les copropriétés des années 1960-1970, l'isolation, les menuiseries et la ventilation méritent une attention particulière.",
    "En copropriété, certains travaux touchent aux parties communes ou à l'aspect extérieur de l'immeuble (fenêtres, murs porteurs, gaines, colonnes) et peuvent nécessiter l'accord de l'assemblée générale. Mieux vaut le vérifier avant de lancer les devis.",
    "Pour les bailleurs, le DPE conditionne désormais la mise en location : les logements classés G ne peuvent plus faire l'objet d'un nouveau bail depuis 2025, les F suivront en 2028 et les E en 2034. Une rénovation bien ciblée (isolation, chauffage, ventilation, menuiseries) permet de sécuriser et de valoriser l'investissement.",
  ],
  checklistTitle: "Avant de rénover votre appartement",
  checklist: [
    "Lister les pièces et postes à rénover, par ordre de priorité",
    "Consulter le règlement de copropriété et prévenir le syndic si nécessaire",
    "Faire établir ou relire le DPE si le logement est destiné à la location",
    "Comparer deux à trois devis détaillés, poste par poste",
    "Vérifier l'assurance décennale des entreprises",
    "Anticiper l'accès, le stockage et l'évacuation des gravats dans l'immeuble",
  ],
  dossiers: pick(
    "Rénovation multi-lots",
    "Remplacement de chaudière",
    "Aménagement intérieur"
  ),
  faq: [
    {
      q: "Combien de temps dure la rénovation d'un appartement ?",
      a: "Quelques jours pour un rafraîchissement (peinture, sols), plusieurs semaines pour une rénovation complète avec électricité, plomberie et redistribution des pièces. Le planning dépend surtout de la coordination entre les corps de métier et de la disponibilité des entreprises.",
    },
    {
      q: "Faut-il l'accord de la copropriété pour rénover son appartement ?",
      a: "Pour les travaux purement intérieurs sur vos parties privatives, généralement non. En revanche, les travaux qui touchent aux parties communes, à la structure ou à l'aspect extérieur de l'immeuble (fenêtres, murs porteurs, colonnes…) peuvent nécessiter une autorisation de l'assemblée générale. Consultez votre règlement de copropriété avant de vous lancer.",
    },
    {
      q: "Je suis investisseur : pouvez-vous m'aider à rénover un appartement avant location ?",
      a: "Oui. Remise en état entre deux locataires, mise aux normes, amélioration de la performance énergétique ou rénovation complète avant mise en location ou revente : je vous oriente vers les entreprises adaptées et vous aide à obtenir des devis comparables pour arbitrer rapidement.",
    },
    {
      q: "Puis-je rénover uniquement ma salle de bain ou ma cuisine ?",
      a: "Bien sûr. Qu'il s'agisse d'une seule pièce ou de l'appartement entier, je vous mets en relation avec les artisans compétents pour votre projet.",
    },
    {
      q: "La mise en relation est-elle gratuite ?",
      a: FREE_ANSWER,
    },
  ],
  ctaTitle: "Un appartement à rénover à Mulhouse ?",
  ctaText:
    "Décrivez-moi votre projet : je vous mets en relation avec les bons artisans et vous aide à comparer les devis.",
};

// ------------------------------------------------------------
//  Rénovation d'immeuble à Mulhouse
// ------------------------------------------------------------
export const RENOVATION_IMMEUBLE: RenovationPage = {
  path: "/renovation-immeuble-mulhouse",
  metaTitle: "Rénovation d'immeuble à Mulhouse : façade, toiture, multi-lots",
  metaDescription:
    "Rénovation d'immeuble à Mulhouse : façade, toiture, parties communes, colonnes, restructuration et division de lots. EG-PRO trouve les entreprises adaptées à chaque lot pour investisseurs, SCI et copropriétés.",
  breadcrumb: "Rénovation d'immeuble à Mulhouse",
  serviceType: "Rénovation d'immeuble",
  eyebrow: "Rénovation d'immeuble · Mulhouse",
  h1: ["Rénovation ", "d'immeuble", " à Mulhouse"],
  heroIntro:
    "Immeuble de rapport, copropriété ou bâtiment à restructurer : EG-PRO mobilise son réseau d'entreprises du bâtiment pour la rénovation de votre immeuble à Mulhouse, de la façade aux parties communes, lot par lot.",
  introTitle: "Un réseau multi-lots pour rénover votre immeuble",
  intro: [
    "La rénovation d'un immeuble mobilise de nombreux corps d'état (façade, couverture, menuiseries, électricité, plomberie, chauffage, sols, peinture) et suppose de trouver, pour chaque lot, une entreprise fiable et disponible au bon moment.",
    "C'est le cœur de métier d'EG-PRO : j'accompagne investisseurs, SCI, marchands de biens, syndics et entreprises générales de rénovation dans la recherche des entreprises et sous-traitants adaptés à chaque lot, à Mulhouse et dans tout le Haut-Rhin. Plusieurs rénovations d'immeubles ont déjà été accompagnées, notamment à Brunstatt et à Guebwiller.",
    "EG-PRO n'est ni maître d'œuvre ni entreprise générale : les entreprises partenaires réalisent les travaux et restent seules responsables de leurs devis et de leurs prestations.",
  ],
  profilesTitle: "Pour qui ?",
  profiles: [
    {
      title: "Investisseurs & SCI",
      desc: "Rénovation d'immeuble de rapport, création ou remise en état de logements, valorisation.",
      href: "/investisseurs",
    },
    {
      title: "Marchands de biens",
      desc: "Chiffrage rapide des travaux, restructuration et division en lots avant revente.",
      href: "/investisseurs",
    },
    {
      title: "Syndics & copropriétés",
      desc: "Devis comparatifs pour les travaux votés en AG : façade, toiture, communs, chauffage.",
      href: "/coproprietes",
    },
    {
      title: "Entreprises générales & maîtres d'œuvre",
      desc: "Recherche de sous-traitants qualifiés pour compléter les lots d'un chantier d'immeuble.",
      href: "/maitre-d-oeuvre",
    },
  ],
  worksTitle: "Les lots d'une rénovation d'immeuble",
  worksIntro:
    "Pour chaque lot, je vous oriente vers des entreprises habituées aux chantiers d'immeubles et de copropriétés.",
  works: [
    {
      title: "Enveloppe du bâtiment",
      items: [
        "Ravalement de façade",
        "Isolation thermique par l'extérieur",
        "Couverture & charpente",
        "Étanchéité",
        "Nettoyage toiture & façade par drone",
        "Menuiseries extérieures",
      ],
    },
    {
      title: "Réseaux & technique",
      items: [
        "Colonnes montantes électriques",
        "Mise aux normes des communs",
        "Colonnes d'eau & évacuations",
        "Chauffage collectif & chaudière",
        "VMC",
        "Assainissement",
      ],
    },
    {
      title: "Parties communes",
      items: [
        "Cage d'escalier : peinture, sols, éclairage",
        "Porte d'entrée & contrôle d'accès",
        "Interphonie & digicode",
        "Serrurerie & métallerie",
        "Garde-corps & balcons",
      ],
    },
    {
      title: "Restructuration & valorisation",
      items: [
        "Division en lots",
        "Création de logements",
        "Rénovation complète des appartements",
        "Remise en état avant location ou revente",
        "Inspection visuelle par drone avant travaux",
      ],
    },
  ],
  localTitle: "Le bâti mulhousien, un potentiel à valoriser",
  local: [
    "Mulhouse dispose d'un patrimoine important d'immeubles anciens : immeubles de rapport en pierre et en brique du centre et des faubourgs, bâtiments hérités du passé industriel, copropriétés d'après-guerre. Beaucoup offrent un vrai potentiel de valorisation, à condition de traiter correctement façades, toitures, réseaux et performance énergétique.",
    "Pour un investisseur, un immeuble à rénover à Mulhouse peut permettre de créer plusieurs logements attractifs et conformes aux exigences du DPE. Pour une copropriété, un programme de travaux bien préparé, avec des devis comparables présentés en assemblée générale, facilite les votes et limite les dérives.",
    "Avant de lancer les consultations, une inspection visuelle par drone permet d'établir un premier état de la toiture et des façades sans échafaudage ni nacelle : un bon moyen de cadrer le programme de travaux.",
  ],
  checklistTitle: "Bien préparer la rénovation d'un immeuble",
  checklist: [
    "Établir un état des lieux technique (toiture, façade, réseaux, parties communes)",
    "Définir le programme de travaux et le découper en lots",
    "Consulter plusieurs entreprises par lot, sur une base de demande identique",
    "Vérifier les autorisations d'urbanisme nécessaires (ravalement, façade, division)",
    "En copropriété, préparer des devis comparables pour le vote en AG",
    "Faire appel à un maître d'œuvre si la complexité du chantier le justifie",
  ],
  steps: [
    {
      n: "1",
      title: "Visite & état des lieux",
      desc: "On fait le point sur l'immeuble et vos objectifs, avec une inspection par drone si besoin.",
    },
    {
      n: "2",
      title: "Découpage en lots",
      desc: "Façade, toiture, réseaux, communs, logements : chaque besoin est clarifié.",
    },
    {
      n: "3",
      title: "Consultation des entreprises",
      desc: "Je sollicite les partenaires adaptés à chaque lot et organise les visites de chiffrage.",
    },
    {
      n: "4",
      title: "Vous décidez",
      desc: "Devis comparables en main, vous choisissez ou votez en assemblée générale.",
    },
  ],
  dossiers: pick(
    "Rénovation d'immeuble",
    "Rénovation multi-lots",
    "Porte d'entrée de copropriété",
    "Remplacement de chaudière"
  ),
  faq: [
    {
      q: "Accompagnez-vous les copropriétés pour des travaux votés en assemblée générale ?",
      a: "Oui. J'organise les visites de chiffrage et aide le syndic ou le conseil syndical à obtenir deux à trois devis comparables, présentés de façon claire pour faciliter les décisions en assemblée générale.",
    },
    {
      q: "Pouvez-vous trouver des sous-traitants pour la rénovation d'un immeuble ?",
      a: "Oui, c'est l'une de mes activités principales : j'accompagne des entreprises générales de rénovation et des maîtres d'œuvre dans la recherche de sous-traitants pour les lots façade, électricité, sanitaire, menuiserie, sols ou terrassement.",
    },
    {
      q: "EG-PRO est-il maître d'œuvre ?",
      a: "Non. EG-PRO est une société de courtage en travaux : je mets en relation et facilite les échanges, sans diriger le chantier. Pour une opération complexe, le recours à un maître d'œuvre ou à un bureau d'études peut être nécessaire : je peux vous orienter vers les professionnels adaptés.",
    },
    {
      q: "Comment sont chiffrés les travaux de rénovation d'un immeuble ?",
      a: "Lot par lot. Après une visite, chaque entreprise consultée reçoit une demande identique, ce qui permet d'obtenir des devis réellement comparables et de construire un budget global fiable.",
    },
    {
      q: "Intervenez-vous sur des immeubles en dehors de Mulhouse ?",
      a: "Oui : dans toute l'agglomération mulhousienne et dans le Haut-Rhin. EG-PRO a par exemple accompagné des rénovations d'immeubles à Brunstatt et à Guebwiller.",
    },
    {
      q: "La mise en relation est-elle payante pour le propriétaire ou le syndic ?",
      a: FREE_ANSWER,
    },
  ],
  ctaTitle: "Un immeuble à rénover à Mulhouse ?",
  ctaText:
    "Parlons de votre programme de travaux : je mobilise les entreprises adaptées à chaque lot et vous aide à comparer les devis.",
};
