import Image, { ImageProps } from "next/image";

// next/image n'ajoute pas automatiquement le basePath (ex: /EG-PRO sur
// GitHub Pages) aux images. Ce wrapper le préfixe pour les chemins absolus,
// afin que les images se chargent quel que soit l'hébergement.
const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Img({ src, ...rest }: ImageProps) {
  const finalSrc =
    typeof src === "string" && src.startsWith("/") ? `${PREFIX}${src}` : src;
  return <Image src={finalSrc} {...rest} />;
}
