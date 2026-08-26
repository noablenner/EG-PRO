import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXC7NQDD');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXC7NQDD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
