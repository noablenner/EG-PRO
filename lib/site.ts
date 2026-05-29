// ============================================================
//  CONTENU DU SITE — centralisé pour édition facile
//  Modifie les textes ici, ils se propagent partout.
// ============================================================

export const SITE = {
  name: "EG-PRO",
  tagline: "Votre partenaire de mise en relation travaux & immobilier",
  founder: "Eliott Guerreiro",
  phone: "06 49 03 82 11",
  phoneIntl: "+33649038211",
  email: "contact@eg-pro.fr",
  url: "https://www.eg-pro.fr",
  zone: "Mulhouse · Colmar · Guebwiller · Haut-Rhin · Alsace",
  whatsapp: "+33649038211",
};

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
    desc: "Rénovation intérieure et extérieure, peinture, sols, maçonnerie, petites réparations — je vous oriente vers des artisans qualifiés et je fluidifie les échanges du devis à la réception.",
    points: [
      "Rénovation intérieure & extérieure",
      "Peinture, sols, petites réparations",
      "Artisans sélectionnés & assurés",
      "Devis comparables, échanges fluides",
    ],
  },
  {
    id: "pros",
    n: "02",
    title: "Syndics, SCI & professionnels",
    desc: "Pour les copropriétés, SCI et gestionnaires : organisation des visites de chiffrage, obtention de plusieurs devis comparatifs et coordination des échanges entre intervenants.",
    points: [
      "Visites pour chiffrage rapide",
      "Deux à trois devis comparatifs",
      "Coordination des échanges sur site",
      "Suivi commercial & administratif",
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
    title: "Gain de temps",
    desc: "Vous évitez de chercher et contacter vous-même plusieurs entreprises. Je m'occupe de la mise en relation.",
  },
  {
    title: "Réseau qualifié",
    desc: "Je travaille avec des partenaires sélectionnés et assurés, dans tous les corps de métier.",
  },
  {
    title: "Échanges fluides",
    desc: "Meilleure communication entre investisseurs, entreprises, syndics et intervenants.",
  },
  {
    title: "Dossiers clairs",
    desc: "Demandes et devis organisés de façon cohérente pour faciliter vos décisions.",
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
