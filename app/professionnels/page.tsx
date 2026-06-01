import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Professionnels & entreprises",
  description:
    "Commerces, locaux et entreprises : EG-PRO (courtage en travaux) vous met en relation avec des partenaires qualifiés pour l'entretien, la maintenance, la rénovation de vos locaux et le nettoyage spécialisé.",
};

const BESOINS = [
  {
    title: "Entretien & maintenance des bâtiments",
    desc: "Un réseau de partenaires pour l'entretien courant et la maintenance de vos locaux, en ponctuel ou en récurrent.",
  },
  {
    title: "Rénovation de locaux professionnels",
    desc: "Bureaux, commerces, locaux d'activité : mise en relation avec les entreprises adaptées à votre projet.",
  },
  {
    title: "Travaux multi-métiers",
    desc: "Un seul interlocuteur pour mobiliser plusieurs corps d'état autour d'un même projet.",
  },
  {
    title: "Nettoyage spécialisé",
    desc: "Façades, toitures, vitres, surfaces techniques — y compris le nettoyage par drone, sans nacelle.",
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professionnels & entreprises"
        title={<>Vos locaux entre <span className="text-gradient">de bonnes mains</span></>}
        intro="Entretien, maintenance, rénovation ou nettoyage spécialisé : EG-PRO vous met en relation avec des partenaires qualifiés, pour des interventions ponctuelles ou régulières."
      />

      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Vos besoins"
          title="Un partenaire pour vos bâtiments"
          intro="Quel que soit votre secteur, je vous oriente vers les bonnes entreprises et vous fais gagner du temps."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {BESOINS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-soft">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                    <span className="font-display text-lg font-bold">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-muted">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Un besoin pour vos locaux ?"
        text="Entretien, rénovation, nettoyage… expliquez-moi votre besoin, je vous oriente vers les bons partenaires."
      />
    </>
  );
}
