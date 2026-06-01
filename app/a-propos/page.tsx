import type { Metadata } from "next";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import { STATS, SITE, LEGAL, FOUNDER_TEXT } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos d'Eliott Guerreiro",
  description:
    "Eliott Guerreiro, fondateur d'EG-PRO : une société d'apport d'affaires et de mise en relation dans l'univers des travaux, de la rénovation et de l'immobilier en Alsace.",
};

const NOT = [
  "Maître d'œuvre",
  "Entreprise générale",
  "Conducteur de travaux",
  "AMO (assistance à maîtrise d'ouvrage)",
  "Bureau d'études",
  "Maître d'ouvrage délégué",
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={<>Derrière EG-PRO, <span className="text-gradient">une personne</span></>}
        intro="Je crois que les meilleurs projets naissent d'une idée simple : se faire confiance."
      />

      {/* Présentation Eliott */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
                <Img
                  src="/images/eliott/eliott-portrait.jpeg"
                  alt="Eliott Guerreiro, fondateur d'EG-PRO"
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-brand px-6 py-4 text-white shadow-glow">
                <p className="font-display text-lg font-bold">Eliott Guerreiro</p>
                <p className="text-xs text-white/80">Fondateur d'EG-PRO</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Mon réseau et mon expérience, au service de vos projets.
              </h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>{FOUNDER_TEXT}</p>
                <p>
                  EG-PRO est une <strong className="text-ink">société de courtage en
                  travaux</strong> : j'interviens comme intermédiaire entre les
                  clients, les investisseurs, les syndics, les maîtres d'œuvre,
                  les entreprises de rénovation et les artisans partenaires.
                  J'aime relier les bonnes personnes et voir les projets se
                  concrétiser.
                </p>
                <p>
                  Pour le client, la mise en relation est{" "}
                  <strong className="text-ink">gratuite et sans engagement</strong> :
                  je suis rémunéré par les entreprises partenaires, jamais par
                  vous. Mon obsession : la réactivité, le sérieux et la qualité
                  des partenaires.
                </p>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Plusieurs années dans l'immobilier & les copropriétés",
                  "Des centaines de devis étudiés",
                  "Des centaines de visites réalisées",
                  "Un réseau de 20+ corps de métier",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Chiffres */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-4xl bg-ink/5 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center justify-center bg-white px-4 py-10 text-center">
                <p className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galerie / aperçu de projets */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sur le terrain"
            title="Des projets bien réels"
            intro="Quelques aperçus de projets accompagnés, du nettoyage de façade à la rénovation complète."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/projets/tabac-simulation-1.png", label: "Le Républicain · projet rénové" },
              { src: "/images/projets/facade-apres.png", label: "Façade assainie" },
              { src: "/images/projets/tabac-actuel.png", label: "Façade existante" },
              { src: "/images/projets/tableau-apres.png", label: "Mise en sécurité électrique" },
              { src: "/images/projets/tabac-simulation-2.png", label: "Ambiance intérieure" },
              { src: "/images/projets/facade-avant.png", label: "Avant entretien" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-deep shadow-sm">
                  <Img
                    src={g.src}
                    alt={g.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white drop-shadow">
                    {g.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre d'intervention — transparence */}
      <section className="bg-brand-deep py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            light
            eyebrow="Transparence"
            title="Mon rôle, clairement défini"
            intro="La confiance passe par la clarté. Voici précisément ce que je fais — et ce que je ne fais pas."
          />
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <h3 className="font-display text-lg font-bold text-brand-bright">
                  Ce que je fais
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Mettre en relation les différents acteurs",
                    "Faciliter l'organisation des échanges",
                    "Accompagner la préparation des dossiers",
                    "Fluidifier la partie commerciale et opérationnelle",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-white/80">
                      <svg className="mt-0.5 shrink-0 text-brand-bright" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 p-7">
                <h3 className="font-display text-lg font-bold text-white/90">
                  Ce que je ne suis pas
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  EG-PRO n'intervient pas en qualité de :
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {NOT.map((n) => (
                    <span key={n} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70">
                      {n}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  {LEGAL} Vous conservez toujours le libre choix des entreprises.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="On fait connaissance ?"
        text={`Un échange vaut mieux qu'un long discours. Appelez-moi au ${SITE.phone} ou écrivez-moi.`}
      />
    </>
  );
}
