import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { HOW_IT_WORKS, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apport d'affaires — le rôle d'EG-PRO",
  description:
    "Qu'est-ce qu'un apporteur d'affaires ? EG-PRO n'est ni une entreprise de travaux ni un maître d'œuvre : son rôle est d'identifier les bons partenaires et de faciliter les mises en relation entre les acteurs d'un projet.",
};

const DOES = [
  "Identifier les partenaires adaptés à votre projet",
  "Faciliter les mises en relation entre les acteurs",
  "Aider à préparer les demandes et obtenir des devis comparables",
  "Accompagner la phase de recherche et le développement commercial",
];

const DOESNT = [
  "Réaliser les travaux",
  "Diriger ou piloter un chantier",
  "Assurer le suivi technique des prestations",
  "Engager la responsabilité d'exécution des entreprises",
];

export default function ApportPage() {
  return (
    <>
      <PageHero
        eyebrow="Apport d'affaires"
        title={<>Apporteur d'affaires, <span className="text-gradient">c'est quoi exactement&nbsp;?</span></>}
        intro="Un rôle simple et précis, souvent mal connu. On vous explique clairement ce qu'EG-PRO fait — et ne fait pas."
      />

      {/* Définition */}
      <section className="container-x py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-4xl border border-ink/8 bg-white p-8 shadow-soft md:p-12">
            <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              « EG-PRO n'est ni une entreprise de travaux, ni un maître d'œuvre. »
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Son rôle consiste à <strong className="text-ink">identifier les bons partenaires</strong> et à
              <strong className="text-ink"> faciliter les mises en relation</strong> entre les différents
              acteurs d'un projet — investisseurs, syndics, SCI, maîtres d'œuvre,
              entreprises de rénovation et artisans. EG-PRO intervient comme
              <strong className="text-ink"> apporteur d'affaires</strong> et intermédiaire, dans la phase de
              recherche et de mise en relation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Fait / Ne fait pas */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand/15 bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand">Ce qu'EG-PRO fait</h3>
              <ul className="mt-5 space-y-3">
                {DOES.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink/80">Ce qu'EG-PRO ne fait pas</h3>
              <ul className="mt-5 space-y-3">
                {DOESNT.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink/50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          center
          eyebrow="En pratique"
          title="Comment ça fonctionne ?"
          intro="Un processus simple, en quatre étapes."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-3xl rounded-2xl bg-brand-soft/60 px-6 py-4 text-center text-sm text-brand-dark">
            {LEGAL}
          </p>
        </Reveal>
      </section>

      <CTA
        title="Un projet à développer ?"
        text="Expliquez-moi votre besoin : je vous oriente vers les bons partenaires."
      />
    </>
  );
}
