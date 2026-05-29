import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Investisseurs & rénovation immobilière",
  description:
    "EG-PRO accompagne investisseurs, SCI, marchands de biens et maîtres d'œuvre : mise en relation, devis comparatifs et coordination des projets de rénovation et de valorisation immobilière dans le Haut-Rhin.",
};

const FOR_WHOM = [
  "Investisseurs immobiliers",
  "SCI",
  "Marchands de biens",
  "Maîtres d'œuvre",
  "Entreprises générales de rénovation",
  "Entreprises du bâtiment",
];

const STEPS = [
  {
    title: "Qualification du projet",
    desc: "On cadre votre opération : type de bien, objectif (location, revente, valorisation), budget cible et délais.",
  },
  {
    title: "Mise en relation ciblée",
    desc: "Je sélectionne dans mon réseau les entreprises adaptées à votre chantier et à votre niveau d'exigence.",
  },
  {
    title: "Devis comparables",
    desc: "Organisation des visites et obtention de plusieurs devis comparables pour décider en connaissance de cause.",
  },
  {
    title: "Suivi & fluidité",
    desc: "Je facilite les échanges et la préparation des dossiers tout au long de l'opération — vous gagnez du temps.",
  },
];

const PROJECTS = [
  "Rénovation d'immeubles",
  "Restructuration de biens",
  "Division de lots",
  "Valorisation immobilière",
  "Remise en état avant location ou revente",
];

export default function InvestisseursPage() {
  return (
    <>
      <PageHero
        eyebrow="Investisseurs & rénovation"
        title={<>Vos opérations, <span className="text-gradient">mieux orchestrées</span></>}
        intro="EG-PRO se développe de plus en plus autour des investisseurs, SCI, marchands de biens et maîtres d'œuvre. Je vous apporte des mises en relation sérieuses et une vraie fluidité opérationnelle."
      />

      {/* Pour qui */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Pour qui"
            title="Un partenaire pensé pour les acteurs de l'immobilier"
            intro="Que vous gériez un bien ou tout un portefeuille, je m'adapte à votre rythme et à vos contraintes de rentabilité."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {FOR_WHOM.map((f, i) => (
              <Reveal key={f} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="bg-brand-deep py-20 text-white md:py-28">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Comment on avance"
            title="De l'opportunité à la valorisation"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <span className="font-display text-3xl font-extrabold text-brand-bright">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'opérations */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Opérations accompagnées"
          title="Les projets immobiliers où j'interviens"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft/50 px-5 py-2.5 text-sm font-medium text-brand-dark">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Une opération en vue ?"
        text="Parlons de votre prochain projet immobilier. Je mobilise les bons partenaires et fluidifie l'ensemble."
      />
    </>
  );
}
