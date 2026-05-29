/** @type {import('next').NextConfig} */

// basePath/assetPrefix fournis par le workflow GitHub Pages (vide en local).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig = {
  reactStrictMode: true,
  // Export statique uniquement pour le déploiement GitHub Pages.
  ...(isExport ? { output: "export" } : {}),
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages n'a pas d'optimiseur d'images : on sert les images telles quelles.
    unoptimized: isExport,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
