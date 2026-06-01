import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/home/StatsBand";
import Audiences from "@/components/Audiences";
import ProcessScroll from "@/components/home/ProcessScroll";
import Network from "@/components/Network";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Dossiers from "@/components/Dossiers";
import Testimonials from "@/components/home/Testimonials";
import BuildShowcase from "@/components/home/BuildShowcase";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <div className="py-16 md:py-20">
        <StatsBand />
      </div>
      <Audiences muted />
      <ProcessScroll />
      <Network />
      <ProjectsPreview />
      <Dossiers light />
      <Testimonials />
      <BuildShowcase />
      <CTA
        title="Vous avez un immeuble à rénover ou un projet d'investissement ?"
        text="Échangeons sur votre projet. Je vous oriente vers les bonnes entreprises, sans engagement."
      />
    </>
  );
}
