import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/home/StatsBand";
import Audiences from "@/components/Audiences";
import ProcessScroll from "@/components/home/ProcessScroll";
import Network from "@/components/Network";
import BuildShowcase from "@/components/home/BuildShowcase";
import Dossiers from "@/components/Dossiers";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Testimonials from "@/components/home/Testimonials";
import HomeContact from "@/components/home/HomeContact";

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
      <BuildShowcase />
      <Dossiers light />
      <ProjectsPreview />
      <Testimonials />
      <HomeContact />
    </>
  );
}
