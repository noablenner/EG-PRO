"use client";

import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Vous m'expliquez votre besoin",
    desc: "Un appel, un message, un mail. On clarifie ensemble votre projet, vos contraintes et vos délais.",
  },
  {
    n: "02",
    title: "Je sélectionne les bons partenaires",
    desc: "Je m'appuie sur mon réseau d'artisans et d'entreprises sélectionnés et assurés, adaptés à votre chantier.",
  },
  {
    n: "03",
    title: "J'organise visites & devis",
    desc: "Je facilite les visites de chiffrage et l'obtention de deux à trois devis comparables pour décider sereinement.",
  },
  {
    n: "04",
    title: "Je fluidifie les échanges",
    desc: "Relances, coordination, préparation des dossiers : je fais le lien pour que tout avance sans friction.",
  },
  {
    n: "05",
    title: "Vous gardez la main",
    desc: "Vous choisissez librement les entreprises. Elles restent responsables des travaux, je reste votre point de contact.",
  },
];

export default function ProcessScroll() {
  return (
    <section className="relative bg-brand-deep py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              Comment je travaille
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Simple, fluide, transparent.
            </h2>
            <p className="mt-4 text-white/65">
              Cinq étapes pour passer de votre besoin à des artisans fiables, sans stress.
            </p>
          </div>
        </Reveal>

        {/* Cartes empilées (effet sticky : chacune se pose en laissant voir les précédentes) */}
        <div className="relative mx-auto mt-14 max-w-3xl pb-[40vh]">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="sticky"
              style={{ top: `calc(6rem + ${i * 1.1}rem)`, zIndex: i + 1 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-dark to-brand-deep p-7 shadow-2xl sm:p-9">
                {/* liseré supérieur pour bien voir l'empilement */}
                <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
                <div className="flex items-start gap-5">
                  <span className="font-display text-4xl font-extrabold text-brand-bright sm:text-5xl">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        {s.title}
                      </h3>
                      <span className="shrink-0 text-xs font-medium text-white/40">
                        {i + 1}/{STEPS.length}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
