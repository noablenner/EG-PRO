import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

// Pages hors menu principal (accessibles via le footer / les sections).
const EXTRA = ["/particuliers", "/maitre-d-oeuvre"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV.map((n) => n.href), ...EXTRA];
  return routes.map((href) => ({
    url: `${SITE.url}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
