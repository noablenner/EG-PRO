import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SITE, MULHOUSE_AREA, RENOVATION_PAGES } from "@/lib/site";
import { OG_IMAGE, pageUrl } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Rénovation à Mulhouse : appartement, immeuble, maison · EG-PRO",
    template: "%s · EG-PRO",
  },
  description:
    "Projet de rénovation à Mulhouse ? EG-PRO, courtier en travaux, vous met en relation gratuitement avec des artisans fiables pour rénover appartement, immeuble ou maison à Mulhouse et dans le Haut-Rhin.",
  keywords: [
    "rénovation Mulhouse",
    "rénovation appartement Mulhouse",
    "rénovation immeuble Mulhouse",
    "courtier en travaux Mulhouse",
    "artisans rénovation Haut-Rhin",
    "travaux copropriété Mulhouse",
    "nettoyage façade drone",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "EG-PRO, rénovation à Mulhouse : les bons artisans pour votre projet",
    description:
      "Mise en relation gratuite avec des artisans fiables pour la rénovation d'appartement, d'immeuble ou de maison à Mulhouse et dans le Haut-Rhin.",
    siteName: SITE.name,
    url: "/",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Fiche entreprise locale (schema.org) : aide Google à associer EG-PRO
// à Mulhouse et aux requêtes « rénovation » de la zone.
const BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#entreprise`,
  name: SITE.name,
  alternateName: "EG PRO",
  description:
    "Courtier en travaux à Mulhouse : mise en relation avec des artisans et entreprises du bâtiment pour la rénovation d'appartements, d'immeubles, de maisons et de locaux professionnels dans le Haut-Rhin.",
  url: `${SITE.url}/`,
  logo: `${SITE.url}/images/logo/logo-mark.png`,
  image: `${SITE.url}${OG_IMAGE.url}`,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  priceRange: "Mise en relation gratuite pour le client",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mulhouse",
    postalCode: "68100",
    addressRegion: "Grand Est",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.7508, longitude: 7.3359 },
  areaServed: [
    ...MULHOUSE_AREA.map((name) => ({ "@type": "City", name })),
    { "@type": "City", name: "Colmar" },
    { "@type": "City", name: "Guebwiller" },
    { "@type": "AdministrativeArea", name: "Haut-Rhin" },
  ],
  founder: { "@type": "Person", name: SITE.founder, jobTitle: "Fondateur" },
  knowsAbout: [
    "Rénovation d'appartement",
    "Rénovation d'immeuble",
    "Travaux de copropriété",
    "Ravalement de façade",
    "Nettoyage de toiture par drone",
    "Division de lots",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rénovation à Mulhouse",
    itemListElement: RENOVATION_PAGES.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.label, url: pageUrl(p.href) },
    })),
  },
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#site`,
  name: SITE.name,
  url: `${SITE.url}/`,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE.url}/#entreprise` },
};

export const viewport: Viewport = {
  themeColor: "#081B33",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <JsonLd data={[BUSINESS_LD, WEBSITE_LD]} />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5QG54XTKNY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5QG54XTKNY');`}
        </Script>

        <Cursor />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingActions />
      </body>
    </html>
  );
}
