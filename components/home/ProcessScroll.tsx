"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function Wheel({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const ringPath = useTransform(progress, [0, 1], [0.02, 1]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  const bigNumber = useTransform(progress, (v) => {
    const i = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)));
    return STEPS[i].n;
  });

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        style={{ rotate }}
        className="brand-gradient absolute h-56 w-56 rounded-full opacity-20 blur-2xl sm:h-72 sm:w-72"
      />
      <div className="relative flex h-52 w-52 items-center justify-center sm:h-72 sm:w-72">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="2" />
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgb(var(--brand-bright))"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            style={{ pathLength: ringPath }}
          />
        </svg>
        <div className="text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-bright sm:text-xs">
            Méthode
          </span>
          <motion.p className="font-display text-6xl font-extrabold text-white sm:text-7xl">
            {bigNumber}
          </motion.p>
          <span className="text-sm text-white/50">étapes simples</span>
        </div>
      </div>
    </div>
  );
}

export default function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative bg-brand-deep py-20 md:py-28">
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
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start lg:gap-16">
          {/* Roue animée (sticky sur desktop, en tête sur mobile) */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center">
            <Wheel progress={scrollYProgress} />
          </div>

          {/* Cartes empilées */}
          <div className="relative pb-[30vh]">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="sticky"
                style={{ top: `calc(6rem + ${i * 1.1}rem)`, zIndex: i + 1 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-dark to-brand-deep p-7 shadow-2xl sm:p-8">
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
      </div>
    </section>
  );
}
