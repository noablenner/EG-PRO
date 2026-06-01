// ============================================================
//  CONTENU DU SITE — centralisé pour édition facile
//  Modifie les textes ici, ils se propagent partout.
// ============================================================

export const SITE = {
  name: "EG-PRO",
  tagline: "Développement de projets de rénovation & mise en relation pour l'immobilier",
  founder: "Eliott Guerreiro",
  phone: "06 49 03 82 11",
  phoneIntl: "+33649038211",
  email: "contact@eg-pro.fr",
  url: "https://www.eg-pro.fr",
  zone: "Mulhouse · Colmar · Guebwiller · Haut-Rhin · Alsace",
  whatsapp: "+33649038211",
};

// Mention légale claire sur le rôle d'EG-PRO (à afficher footer + À propos).
export const LEGAL =
  "EG-PRO intervient exclusivement comme intermédiaire de mise en relation et apporteur d'affaires. Les entreprises partenaires restent seules responsables de leurs devis, prestations et travaux.";

// Lien WhatsApp prêt à l'emploi (numéro au format international + message pré-rempli).
// wa.me ouvre directement la conversation avec Eliott (app mobile ou WhatsApp Web).
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp.replace(
  /[^0-9]/g,
  ""
)}?text=${encodeURIComponent(
  "Bonjour Eliott, je vous contacte via votre site EG-PRO au sujet de : "
)}`;

export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Investisseurs", href: "/investisseurs" },
  { label: "Syndics", href: "/coproprietes" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 5, suffix: " ans", label: "d'expérience terrain" },
  { value: 114, suffix: "", label: "projets accompagnés" },
  { value: 63, suffix: "+", label: "partenaires artisans" },
  { value: 100, suffix: "%", label: "de mises en relation suivies" },
];

export const SERVICES = [
  {
    id: "renovation",
    n: "01",
    title: "Travaux & rénovation multi-métiers",
    desc: "Rénovation intérieure et extérieure, peinture, sols, maçonnerie, petites réparations — je vous mets en relation avec des artisans qualifiés et je facilite les échanges, de la demande de devis au premier contact.",
    points: [
      "Rénovation intérieure & extérieure",
      "Peinture, sols, petites réparations",
      "Artisans sélectionnés & assurés",
      "Devis comparables, échanges facilités",
    ],
  },
  {
    id: "pros",
    n: "02",
    title: "Syndics, SCI & professionnels",
    desc: "Pour les copropriétés, SCI et gestionnaires : organisation des visites de chiffrage, obtention de plusieurs devis comparatifs et mise en relation avec les bons intervenants.",
    points: [
      "Visites pour chiffrage rapide",
      "Deux à trois devis comparatifs",
      "Mise en relation avec les intervenants",
      "Accompagnement commercial & administratif",
    ],
  },
  {
    id: "drone-nettoyage",
    n: "03",
    title: "Nettoyage par drone",
    desc: "Toitures, façades et panneaux solaires nettoyés par drone : un accès rapide et sécurisé, sans nacelle, avec des produits adaptés à chaque surface.",
    points: [
      "Toitures, façades & panneaux solaires",
      "Accès sécurisé, sans nacelle",
      "Produits adaptés à chaque surface",
      "Intervention rapide sur le Haut-Rhin",
    ],
  },
  {
    id: "drone-inspection",
    n: "04",
    title: "Inspection visuelle par drone",
    desc: "Inspections de bâtiment haute précision : photos et vidéos HD, détection des anomalies et remontées claires — idéal pour un dossier d'assurance ou une décision de travaux.",
    points: [
      "Inspection haute précision",
      "Photos & vidéos HD du bâtiment",
      "Détection & remontée des anomalies",
      "Idéal assurance ou décision travaux",
    ],
  },
];

// Catégories de projets concernés (page Services)
export const PROJECT_TYPES = [
  {
    title: "Travaux extérieurs",
    items: [
      "Ravalement de façade",
      "Nettoyage toiture & façade par drone",
      "Étanchéité, charpente, couverture",
      "Isolation extérieure",
      "Menuiseries, portes, garde-corps, balcons",
    ],
  },
  {
    title: "Travaux techniques",
    items: [
      "Électricité",
      "Plomberie",
      "Chauffage & ventilation",
      "Colonnes montantes",
      "Assainissement",
    ],
  },
  {
    title: "Travaux intérieurs",
    items: [
      "Rénovation complète",
      "Cuisine & salle de bain",
      "Sols & peinture",
      "Cloisons",
    ],
  },
  {
    title: "Projets immobiliers",
    items: [
      "Rénovation d'immeubles",
      "Restructuration de biens",
      "Division de lots",
      "Valorisation immobilière",
      "Remise en état avant location / revente",
    ],
  },
];

export const VALUES = [
  {
    icon: "💰",
    title: "Optimisation des coûts",
    desc: "Grâce au volume d'affaires régulièrement confié à ses partenaires, EG-PRO bénéficie de relations privilégiées avec de nombreuses entreprises locales. Cette connaissance du marché permet souvent d'obtenir des propositions compétitives, cohérentes avec le besoin réel, en évitant les surcoûts liés à des prestations mal dimensionnées.",
  },
  {
    icon: "⏱️",
    title: "Gain de temps",
    desc: "Un seul interlocuteur pour identifier rapidement les entreprises adaptées à votre projet. Plus besoin de contacter plusieurs sociétés, de relancer différents interlocuteurs ou de multiplier les recherches.",
  },
  {
    icon: "🤝",
    title: "Réseau qualifié",
    desc: "EG-PRO s'appuie sur un réseau d'entreprises sélectionnées pour leur sérieux, leur réactivité et la qualité de leurs prestations. Chaque projet est orienté vers les partenaires les plus pertinents selon les besoins exprimés.",
  },
  {
    icon: "📋",
    title: "Comparaison simplifiée",
    desc: "Les demandes sont préparées de manière claire afin d'obtenir des devis plus facilement comparables et d'aider à prendre des décisions éclairées.",
  },
  {
    icon: "📍",
    title: "Connaissance du marché local",
    desc: "Une présence quotidienne sur le terrain et de nombreuses années d'expérience en immobilier, copropriété et rénovation : EG-PRO dispose d'une vision concrète des acteurs locaux et des réalités du marché.",
  },
  {
    icon: "🏢",
    title: "Une vision globale des projets",
    desc: "Investisseurs, syndics, SCI, maîtres d'œuvre, entreprises de rénovation ou particuliers : EG-PRO comprend les enjeux spécifiques de chaque acteur et facilite les mises en relation entre les intervenants.",
  },
  {
    icon: "🔎",
    title: "Un accompagnement neutre et indépendant",
    desc: "EG-PRO n'est ni une entreprise de travaux, ni un maître d'œuvre. Son rôle : identifier les partenaires adaptés, faciliter les échanges et accompagner la phase de recherche et de mise en relation — les entreprises gardant la responsabilité complète de leurs prestations et de leurs travaux.",
  },
];

export const PROJECTS = [
  {
    id: "tabac",
    title: "Le Républicain — réaménagement",
    place: "Mulhouse",
    tag: "Projet en cours",
    desc: "Accompagnement et mise en relation pour le réaménagement complet d'un café-tabac emblématique : de la façade existante à la simulation 3D de l'intérieur rénové.",
    before: "/images/projets/tabac-actuel.png",
    after: "/images/projets/tabac-simulation-1.png",
    beforeLabel: "Extérieur actuel",
    afterLabel: "Simulation du projet",
  },
  {
    id: "facade",
    title: "Façade envahie → assainie",
    place: "Haut-Rhin",
    tag: "Nettoyage façade",
    desc: "Une façade envahie par la végétation, source d'infiltrations et de dégradations, nettoyée et maîtrisée dans le temps. Un entretien simple aujourd'hui, des coûts évités demain.",
    before: "/images/projets/facade-avant.png",
    after: "/images/projets/facade-apres.png",
    beforeLabel: "Avant",
    afterLabel: "Après",
  },
  {
    id: "tableau",
    title: "Tableau électrique aux normes",
    place: "Cage d'escalier",
    tag: "Mise en sécurité",
    desc: "Un tableau électrique de cage d'escalier remis propre, conforme et prêt à assurer la sécurité des occupants.",
    before: "/images/projets/tableau-avant.png",
    after: "/images/projets/tableau-apres.png",
    beforeLabel: "Avant",
    afterLabel: "Après",
  },
];

export const TESTIMONIALS = [
  {
    name: "Xavier Meyer",
    role: "Gérant de SCI",
    text: "Eliott a un bon réseau dans le domaine du bâtiment. Il a réalisé plusieurs travaux dans différents logements que je possède. Très satisfait.",
  },
  {
    name: "Simon Jund",
    role: "Chef d'entreprise",
    text: "J'ai contacté Eliott pour le nettoyage de la toiture du bâtiment où se situent mes locaux. Très satisfait de la prestation.",
  },
  {
    name: "Arnaud Chavigny",
    role: "Chef d'entreprise",
    text: "Belle collaboration avec Eliott. Il est très investi dans ses projets et sait être force de proposition.",
  },
  {
    name: "Cristelle Stackler",
    role: "Gérante d'agence immobilière",
    text: "Eliott répond rapidement aux différentes demandes et sait s'adapter aux contraintes propres aux métiers qu'il propose.",
  },
];

export const FAQ = [
  {
    q: "Quels types de prestations pouvez-vous proposer ?",
    a: "Travaux extérieurs (façade, toiture, étanchéité, menuiseries…), travaux techniques (électricité, plomberie, chauffage…), travaux intérieurs (rénovation, cuisine, sols, peinture…) et projets immobiliers (rénovation d'immeubles, division de lots, valorisation). Je vous oriente vers les bons partenaires selon votre besoin.",
  },
  {
    q: "Quel est votre rôle exactement ?",
    a: "EG-PRO est une société d'apport d'affaires et de mise en relation. Je connecte clients, investisseurs, syndics et professionnels à des entreprises adaptées, je facilite l'organisation des échanges et la préparation des dossiers. Je n'interviens pas comme maître d'œuvre : les entreprises restent seules responsables de leurs devis, prestations et de l'exécution des travaux.",
  },
  {
    q: "En combien de temps puis-je obtenir un retour ?",
    a: "Je m'engage sur la réactivité. Dès réception de votre demande, je reviens vers vous rapidement pour comprendre le besoin et lancer les mises en relation.",
  },
  {
    q: "Combien coûte votre service ?",
    a: "Parlons-en directement selon votre projet. Expliquez-moi votre besoin et je vous propose le cadre le plus adapté.",
  },
  {
    q: "Comment sélectionnez-vous vos partenaires ?",
    a: "Je travaille avec un réseau d'artisans et d'entreprises sélectionnés et assurés, avec qui j'ai l'habitude de collaborer. Le sérieux, la réactivité et la qualité priment.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Principalement Mulhouse, Colmar, Guebwiller et l'ensemble du Haut-Rhin, en Alsace. Des interventions plus larges sont possibles selon les projets.",
  },
];

// Étapes de la page Investisseurs (parcours d'un projet immobilier).
export const INVESTOR_STEPS = [
  {
    n: "01",
    title: "Acquisition",
    desc: "Vous repérez le bien ; je vous oriente vers les bons interlocuteurs pour avancer sereinement sur votre projet.",
  },
  {
    n: "02",
    title: "Chiffrage",
    desc: "Organisation des visites et obtention de devis comparables pour estimer le budget travaux en amont.",
  },
  {
    n: "03",
    title: "Réseau d'entreprises",
    desc: "Accès à un réseau d'artisans et d'entreprises sélectionnés et assurés, dans tous les corps de métier.",
  },
  {
    n: "04",
    title: "Mise en relation",
    desc: "Je connecte votre projet aux entreprises adaptées et facilite les premiers échanges.",
  },
  {
    n: "05",
    title: "Valorisation",
    desc: "Des travaux pensés pour augmenter la valeur et l'attractivité de votre bien.",
  },
  {
    n: "06",
    title: "Remise en état",
    desc: "Rafraîchissement et mise aux normes avant mise en location ou revente.",
  },
  {
    n: "07",
    title: "Division",
    desc: "Orientation vers les intervenants adaptés pour diviser un bien en plusieurs lots.",
  },
  {
    n: "08",
    title: "Revente",
    desc: "Un bien valorisé et prêt à être remis sur le marché dans les meilleures conditions.",
  },
];

// Exemples de dossiers accompagnés (anonymisés, pour rassurer sans divulguer d'adresses).
export const DOSSIERS = [
  {
    tag: "Immeuble · plusieurs lots",
    title: "Rénovation complète d'un immeuble",
    desc: "Mise en relation avec les entreprises adaptées pour une rénovation complète, du gros œuvre aux finitions.",
  },
  {
    tag: "Bien locatif",
    title: "Remise en état avant mise en location",
    desc: "Rafraîchissement et mise aux normes pour relouer rapidement, avec des artisans fiables et réactifs.",
  },
  {
    tag: "Création de lots",
    title: "Accompagnement d'un projet de division",
    desc: "Orientation vers les bons intervenants pour diviser un bien et en optimiser la valeur.",
  },
  {
    tag: "Syndic · copropriété",
    title: "Travaux de copropriété votés en AG",
    desc: "Obtention de devis comparatifs et mise en relation pour des travaux votés en assemblée générale.",
  },
];
