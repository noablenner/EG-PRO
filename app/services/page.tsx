import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WhyEgPro from "@/components/WhyEgPro";
import CTA from "@/components/CTA";
import { SERVICES, PROJECT_TYPES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — travaux, rénovation, drone & immobilier",
  description:
    "Mise en relation pour travaux extérieurs, techniques, intérieurs et projets immobiliers. Nettoyage et inspection par drone sur Mulhouse et le Haut-Rhin.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Tout ce que je peux <span className="text-gradient">mobiliser pour vous</span></>}
        intro="Je travaille avec un réseau d'artisans et d'entreprises spécialisées pour répondre à tous types de besoins, des particuliers aux gestionnaires immobiliers."
      />

      {/* Détail des 4 services */}
      <section className="container-x py-20 md:py-28">
        <div className="space-y-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="grid gap-6 rounded-4xl border border-ink/8 bg-white p-7 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-10 md:p-10">
                <span className="font-display text-5xl font-extrabold text-brand/15">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.desc}</p>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink/80">
                      <svg className="mt-0.5 shrink-0 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Types de projets */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Types de projets concernés"
            title="Du petit dépannage à la rénovation d'immeuble"
            intro="Quelle que soit la nature de votre projet, je vous oriente vers les bonnes compétences."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_TYPES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-brand">{cat.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi passer par EG-PRO */}
      <WhyEgPro />

      <CTA />
    </>
  );
}
