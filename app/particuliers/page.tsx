import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { HOW_IT_WORKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Particuliers — trouvez le bon artisan",
  description:
    "Vous êtes un particulier ? EG-PRO, société de courtage en travaux, vous met en relation avec des artisans fiables pour votre rénovation, vos dépannages et l'entretien de votre logement. Gratuit et sans engagement.",
};

const BESOINS = [
  "Rénovation intérieure & extérieure",
  "Peinture, sols, cuisine, salle de bain",
  "Dépannage & petites réparations",
  "Nettoyage de façade ou de toiture par drone",
  "Électricité, plomberie, chauffage",
  "Mise aux normes & mise en sécurité",
];

export default function ParticuliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Particuliers"
        title={<>Le bon artisan, <span className="text-gradient">sans prise de tête</span></>}
        intro="Un seul interlocuteur pour trouver rapidement des artisans fiables, comparer des devis et avancer sereinement sur votre projet — gratuitement."
      />

      {/* Besoins */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Vos besoins"
            title="Pour tous vos travaux du quotidien"
            intro="De la petite réparation à la rénovation complète, je vous oriente vers le professionnel adapté."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {BESOINS.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Comment ça fonctionne ?" title="Simple, en 4 étapes" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gratuit */}
      <section className="container-x py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-4xl brand-gradient px-8 py-12 text-center text-white shadow-glow md:px-14">
            <p className="text-4xl">💸</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Gratuit pour vous, sans engagement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              La mise en relation ne vous coûte rien. En tant que société de
              courtage en travaux, EG-PRO est rémunéré par les entreprises
              partenaires — pas par le client. Vous gardez toujours le libre
              choix de votre prestataire.
            </p>
          </div>
        </Reveal>
      </section>

      <CTA
        title="Un projet à la maison ?"
        text="Décrivez-moi votre besoin : je vous oriente vers le bon artisan, gratuitement."
      />
    </>
  );
}
