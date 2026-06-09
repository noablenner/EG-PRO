import type { Metadata } from "next";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations — projets accompagnés",
  description:
    "Avant / après de projets accompagnés par EG-PRO : nettoyage de façade, mise en sécurité électrique et réaménagement complet. Mulhouse et Haut-Rhin.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={<>Des transformations <span className="text-gradient">qui parlent d'elles-mêmes</span></>}
        intro="Glissez le curseur pour comparer. Voici quelques projets que j'ai accompagnés, du nettoyage de façade à la rénovation complète."
      />

      {/* Projet phare : Le Républicain */}
      <section className="container-x py-20 md:py-28">
        <Reveal>
          <span className="inline-flex rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            Projet phare · En cours
          </span>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Aménagement intérieur — projet avec simulation 3D
              </h2>
              <p className="mt-4 text-muted">
                Un projet présentant la façade existante et une simulation 3D de
                l'intérieur rénové. Sur ce projet, EG-PRO intervient sur la
                menuiserie intérieure complète, les habillages muraux et le plan
                de travail avec finition marbrée.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Menuiserie intérieure complète",
                  "Habillages muraux",
                  "Plan de travail finition marbrée",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/80">
                    <svg className="mt-0.5 shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-soft">
                <Img
                  src="/images/projets/tabac-simulation-1.png"
                  alt="Simulation 3D de l'intérieur rénové du Républicain"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Simulation · intérieur
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <Img
                    src="/images/projets/tabac-actuel.png"
                    alt="Extérieur actuel du Républicain à Mulhouse"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2.5 py-0.5 text-[10px] font-medium text-white">
                    Extérieur actuel
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <Img
                    src="/images/projets/tabac-simulation-2.png"
                    alt="Seconde vue de la simulation du projet"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2.5 py-0.5 text-[10px] font-medium text-white">
                    Simulation · vue 2
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Avant / après */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Avant / après"
            title="Le pouvoir d'un bon entretien"
            intro="Glissez chaque curseur pour révéler la transformation."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {PROJECTS.filter((p) => p.id !== "tabac").map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
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
                    <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                      {p.place}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Votre projet pourrait être le prochain."
        text="Façade, toiture, rénovation, mise en sécurité… parlons-en et trouvons les bons artisans."
      />
    </>
  );
}
