import type { Metadata } from "next";
import { SITE } from "./site";

// Image de partage par défaut (réseaux sociaux, messageries).
export const OG_IMAGE = {
  url: "/images/eliott/eliott-portrait.jpeg",
  width: 1336,
  height: 1536,
  alt: "Eliott Guerreiro, fondateur d'EG-PRO, rénovation à Mulhouse",
};

/** URL canonique d'une page (le site est servi avec un slash final). */
export const pageUrl = (path: string) =>
  path === "/" ? `${SITE.url}/` : `${SITE.url}${path}/`;

/**
 * Métadonnées d'une page : titre, description, URL canonique propre à la page
 * et Open Graph cohérent. Sans canonique par page, Google considère toutes les
 * pages comme des doublons de l'accueil.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = path === "/" ? "/" : `${path}/`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE.name,
      url,
      title: absoluteTitle ? title : `${title} · ${SITE.name}`,
      description,
      images: [OG_IMAGE],
    },
  };
}
