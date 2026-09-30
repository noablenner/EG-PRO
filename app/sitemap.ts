import type { MetadataRoute } from "next";
import { NAV, RENOVATION_PAGES } from "@/lib/site";
import { pageUrl } from "@/lib/seo";

// Pages audiences (sous le menu « Pour qui ? ») + hors menu.
const EXTRA = ["/maitre-d-oeuvre", "/coproprietes", "/professionnels", "/particuliers"];
// Pages locales « Rénovation à Mulhouse » : prioritaires pour le référencement.
const RENOVATION = RENOVATION_PAGES.map((p) => p.href);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set([...NAV.map((n) => n.href), ...EXTRA, ...RENOVATION]));
  return routes.map((href) => ({
    // URL identique à la canonique (slash final, cf. trailingSlash).
    url: pageUrl(href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : RENOVATION.includes(href) ? 0.9 : 0.7,
  }));
}
