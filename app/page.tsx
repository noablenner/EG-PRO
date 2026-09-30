import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import RenovationLinks from "@/components/RenovationLinks";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import VideoTeaser from "@/components/home/VideoTeaser";
import StatsBand from "@/components/home/StatsBand";
import Audiences from "@/components/Audiences";
import ProcessScroll from "@/components/home/ProcessScroll";
import Network from "@/components/Network";
import BuildShowcase from "@/components/home/BuildShowcase";
import Dossiers from "@/components/Dossiers";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Testimonials from "@/components/home/Testimonials";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = pageMetadata({
  title: "Rénovation à Mulhouse — appartement, immeuble, maison · EG-PRO",
  description:
    "Projet de rénovation à Mulhouse ? EG-PRO, courtier en travaux, vous met en relation gratuitement avec des artisans fiables pour rénover appartement, immeuble ou maison à Mulhouse et dans le Haut-Rhin.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <VideoTeaser />
      <div className="py-16 md:py-20">
        <StatsBand />
      </div>
      <Audiences muted />
      <RenovationLinks />
      <ProcessScroll />
      <Network />
      <BuildShowcase />
      <Dossiers light />
      <ProjectsPreview />
      <Testimonials />
      <HomeContact />
    </>
  );
}
