"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Img from "@/components/Img";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// Vitrine du projet phare (images propres, sans implication d'un faux avant/après).
const SHOWCASE = [
  {
    src: "/images/projets/tabac-simulation-1.png",
    label: "Le Républicain · projet rénové",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "aspect-[16/11]",
  },
  {
    src: "/images/projets/tabac-actuel.png",
    label: "Façade existante",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/projets/tabac-simulation-2.png",
    label: "Ambiance intérieure",
    span: "",
    ratio: "aspect-[4/3]",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Réalisations"
          title={<>Des projets <span className="text-gradient">qu'on accompagne vraiment</span></>}
          intro="Du café-tabac emblématique à la rénovation d'immeuble : un aperçu des projets que je coordonne sur le terrain."
        />
        <Reveal>
          <Link href="/realisations" data-cursor="Tout voir" className="hidden shrink-0 items-center gap-2 font-semibold text-brand hover:text-brand-bright md:inline-flex">
            Toutes les réalisations
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SHOWCASE.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-3xl bg-brand-deep shadow-soft ${item.span}`}
          >
            <div className={`relative w-full ${item.ratio} h-full`}>
              <Img
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white drop-shadow">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 text-center md:hidden">
          <Link href="/realisations" data-cursor="Tout voir" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-bright">
            Toutes les réalisations
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
