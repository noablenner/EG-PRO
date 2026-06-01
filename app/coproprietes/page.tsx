import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Copropriétés & syndics",
  description:
    "EG-PRO accompagne syndics de copropriété, conseils syndicaux et gestionnaires immobiliers : visites de chiffrage, devis comparatifs et mise en relation avec les bons intervenants dans le Haut-Rhin.",
};

const BENEFITS = [
  {
    title: "Visites de chiffrage",
    desc: "J'organise les visites sur site pour obtenir des chiffrages rapides et adaptés aux besoins de la copropriété.",
  },
  {
    title: "Devis comparatifs",
    desc: "Deux à trois devis comparables pour présenter des options claires en assemblée et faciliter les décisions.",
  },
  {
    title: "Mise en relation",
    desc: "Je fais le lien entre syndic, conseil syndical et entreprises pour des échanges fluides, sans me substituer aux intervenants.",
  },
  {
    title: "Dossiers présentables",
    desc: "Des demandes et devis organisés de façon lisible, prêts à être partagés avec les copropriétaires.",
  },
];

const TARGETS = [
  "Syndics de copropriété",
  "Conseils syndicaux",
  "Gestionnaires immobiliers",
  "Copropriétés",
];

const WORKS = [
  "Ravalement & nettoyage de façade",
  "Nettoyage de toiture par drone",
  "Étanchéité & couverture",
  "Colonnes montantes électriques",
  "Parties communes & cage d'escalier",
  "Mise en sécurité & conformité",
];

export default function CoproprietesPage() {
  return (
    <>
      <PageHero
        eyebrow="Copropriétés & syndics"
        title={<>Des travaux de copropriété <span className="text-gradient">sans casse-tête</span></>}
        intro="Pour les syndics, conseils syndicaux et gestionnaires : je facilite l'organisation des chiffrages, l'obtention de devis comparatifs et la mise en relation avec les bons intervenants."
      />

      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Ce que je vous apporte"
          title="Un interlocuteur unique, des échanges simplifiés"
          intro="Vous gardez la main sur les décisions ; je m'occupe de fluidifier la partie organisationnelle et commerciale."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/8 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <span className="font-display text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-muted">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Mes interlocuteurs" title="Avec qui je travaille" />
            <div className="mt-8 space-y-3">
              {TARGETS.map((t, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <span className="font-medium text-ink">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Interventions fréquentes" title="Les travaux concernés" />
            <div className="mt-8 flex flex-wrap gap-3">
              {WORKS.map((w, i) => (
                <Reveal key={w} delay={i * 0.05}>
                  <span className="inline-flex rounded-full border border-brand/20 bg-white px-5 py-2.5 text-sm font-medium text-brand-dark">
                    {w}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Un vote de travaux à préparer ?"
        text="Confiez-moi le chiffrage et la mise en relation. Je vous remets des options claires pour votre assemblée."
      />
    </>
  );
}
