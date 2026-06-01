import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

// Pages audiences (sous le menu « Pour qui ? ») + hors menu.
const EXTRA = ["/maitre-d-oeuvre", "/coproprietes", "/professionnels", "/particuliers"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV.map((n) => n.href), ...EXTRA];
  return routes.map((href) => ({
    url: `${SITE.url}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
