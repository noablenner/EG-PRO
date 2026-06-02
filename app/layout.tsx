import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
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
    default: "EG-PRO — Mise en relation travaux, rénovation & immobilier · Mulhouse",
    template: "%s · EG-PRO",
  },
  description:
    "EG-PRO connecte particuliers, investisseurs, SCI et syndics à des artisans fiables sur Mulhouse, Colmar et le Haut-Rhin. Mise en relation, devis comparatifs et suivi des projets de travaux.",
  keywords: [
    "travaux Mulhouse",
    "rénovation Haut-Rhin",
    "apport d'affaires travaux",
    "mise en relation artisans",
    "nettoyage façade drone",
    "investisseurs immobiliers Alsace",
    "syndic copropriété travaux",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "EG-PRO — Votre partenaire travaux & immobilier",
    description:
      "Mise en relation avec des artisans fiables sur Mulhouse et le Haut-Rhin. Gain de temps, réseau qualifié, suivi des projets.",
    siteName: "EG-PRO",
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#082016",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body>
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
