import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Network from "@/components/Network";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Maîtres d'œuvre & entreprises du bâtiment",
  description:
    "Maîtres d'œuvre, entreprises générales et artisans : EG-PRO (courtage en travaux) vous aide à trouver des sous-traitants qualifiés, à renforcer vos équipes et à développer votre activité grâce à des opportunités de chantiers.",
};

const HELP = [
  {
    title: "Recherche de sous-traitants qualifiés",
    desc: "Besoin d'un corps d'état spécifique pour compléter une équipe ? Je vous oriente vers des entreprises fiables et disponibles.",
  },
  {
    title: "Renfort multi-métiers",
    desc: "Un réseau local développé au fil des années, dans plus de 20 corps de métier, pour répondre à vos besoins ponctuels ou récurrents.",
  },
  {
    title: "Opportunités de chantiers",
    desc: "En tant qu'apporteur d'affaires, je vous transmets des opportunités qualifiées et contribue à votre développement commercial.",
  },
  {
    title: "Mises en relation de confiance",
    desc: "Des partenaires sélectionnés pour leur sérieux et leur réactivité, pour des collaborations durables.",
  },
];

export default function MaitreOeuvrePage() {
  return (
    <>
      <PageHero
        eyebrow="Maîtres d'œuvre & entreprises"
        title={<>Renforcez vos équipes avec <span className="text-gradient">les bons partenaires</span></>}
        intro="Vous recherchez des partenaires fiables pour compléter vos équipes ou répondre à un besoin spécifique ? EG-PRO vous aide à identifier rapidement des entreprises et sous-traitants adaptés grâce à un réseau local développé au fil des années."
      />

      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Comment je vous aide"
          title="Un partenaire pour votre développement"
          intro="Du renfort ponctuel au développement commercial, je facilite les bonnes rencontres."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {HELP.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-soft">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                    <span className="font-display text-lg font-bold">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{h.title}</h3>
                  <p className="mt-2 text-muted">{h.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Réseau */}
      <Network />

      <CTA
        title="Envie de développer votre activité ?"
        text="Parlons de vos besoins en sous-traitance ou en nouveaux chantiers. Je mobilise mon réseau pour vous."
      />
    </>
  );
}
