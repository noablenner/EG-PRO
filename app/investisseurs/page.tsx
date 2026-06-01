import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Dossiers from "@/components/Dossiers";
import CTA from "@/components/CTA";
import { INVESTOR_STEPS, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investisseurs & rénovation immobilière",
  description:
    "EG-PRO accompagne investisseurs, SCI, marchands de biens et maîtres d'œuvre : acquisition, chiffrage, réseau d'entreprises, mise en relation, valorisation, remise en état, division et revente. Haut-Rhin & Alsace.",
};

const FOR_WHOM = [
  "Investisseurs immobiliers",
  "SCI",
  "Marchands de biens",
  "Maîtres d'œuvre",
  "Entreprises générales de rénovation",
  "Entreprises du bâtiment",
];

export default function InvestisseursPage() {
  return (
    <>
      <PageHero
        eyebrow="Investisseurs & rénovation"
        title={<>Vos opérations immobilières, <span className="text-gradient">mieux entourées</span></>}
        intro="De l'acquisition à la revente, EG-PRO vous apporte des mises en relation sérieuses et un réseau d'entreprises sélectionnées — pour valoriser vos biens sans perdre de temps."
      />

      {/* Parcours en 8 étapes */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Le parcours de votre projet"
          title="De l'acquisition à la revente"
          intro="Un fil conducteur clair. À chaque étape, je vous oriente vers les bons interlocuteurs — vous gardez la décision."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INVESTOR_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-soft">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <span className="font-display text-4xl font-extrabold text-brand/20">{s.n}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-brand-deep py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            light
            eyebrow="Pour qui"
            title="Pensé pour les acteurs de l'immobilier"
            intro="Que vous gériez un bien ou tout un portefeuille, je m'adapte à votre rythme et à vos objectifs de rentabilité."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {FOR_WHOM.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-white">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dossiers concrets */}
      <Dossiers />

      {/* Rappel du rôle */}
      <section className="container-x pb-8">
        <Reveal>
          <p className="mx-auto max-w-3xl rounded-2xl bg-brand-soft/60 px-6 py-4 text-center text-sm text-brand-dark">
            {LEGAL}
          </p>
        </Reveal>
      </section>

      <CTA
        title="Une opération en vue ?"
        text="Parlons de votre prochain projet immobilier. Je mobilise les bonnes entreprises et facilite l'ensemble."
      />
    </>
  );
}
