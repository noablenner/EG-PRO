"use client";

import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/site";
import { useIsMobile } from "@/lib/useIsMobile";

// Sur l'accueil : uniquement les vrais avant/après (façade + tableau électrique).
const HOME_PROJECTS = PROJECTS.filter((p) => p.id === "facade" || p.id === "tableau");

export default function ProjectsPreview() {
  const isMobile = useIsMobile();

  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Réalisations"
          title={<>Des transformations <span className="text-gradient">avant / après</span></>}
          intro="Glissez le curseur pour voir le résultat. Quelques projets concrets que j'ai accompagnés sur le terrain."
        />
        <Reveal>
          <Link href="/realisations" data-cursor="Tout voir" className="hidden shrink-0 items-center gap-2 font-semibold text-brand hover:text-brand-bright md:inline-flex">
            Toutes les réalisations
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-8">
        {HOME_PROJECTS.map((p, i) => {
          const article = (
            <article>
              <BeforeAfter
                before={p.before}
                after={p.after}
                beforeLabel={p.beforeLabel}
                afterLabel={p.afterLabel}
                alt={p.title}
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {p.tag}
                </span>
              </div>
            </article>
          );

          // Sur mobile : pas d'animation d'arrivée
          if (isMobile) return <div key={p.id}>{article}</div>;

          return (
            <Reveal key={p.id} delay={i * 0.1}>
              {article}
            </Reveal>
          );
        })}
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
