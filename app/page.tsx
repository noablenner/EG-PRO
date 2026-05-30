import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/home/StatsBand";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessScroll from "@/components/home/ProcessScroll";
import ProjectsPreview from "@/components/home/ProjectsPreview";
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
      <ServicesPreview />
      <ProcessScroll />
      <ProjectsPreview />
      <Testimonials />
      <BuildShowcase />
      <CTA />
    </>
  );
}
