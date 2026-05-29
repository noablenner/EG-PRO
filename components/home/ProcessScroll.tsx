"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

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

function Step({
  step,
  index,
  progress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const total = STEPS.length;
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.12, start, end - 0.02, end + 0.08],
    [0.25, 1, 1, 0.25]
  );
  const x = useTransform(progress, [start - 0.12, start], [40, 0]);

  return (
    <motion.div style={{ opacity, x }} className="border-l-2 border-brand/30 pl-5">
      <span className="font-display text-xs font-bold text-brand">{step.n}</span>
      <h3 className="mt-0.5 font-display text-lg font-bold leading-tight text-white sm:text-xl">
        {step.title}
      </h3>
      <p className="mt-1.5 max-w-md text-sm text-white/65">{step.desc}</p>
    </motion.div>
  );
}

export default function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Visuel : un anneau de progression + numéro géant qui change
  const ringPath = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bigNumber = useTransform(scrollYProgress, (v) => {
    const i = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length));
    return STEPS[i].n;
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={ref}
      className="relative bg-brand-deep"
      style={{ height: `${STEPS.length * 52}vh` }}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="container-x grid w-full items-center gap-12 py-20 lg:grid-cols-2">
          {/* Visuel sticky animé */}
          <div className="relative flex items-center justify-center">
            <motion.div
              style={{ rotate }}
              className="brand-gradient absolute h-72 w-72 rounded-full opacity-20 blur-2xl"
            />
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
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
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
                  Méthode
                </span>
                <motion.p className="font-display text-7xl font-extrabold text-white sm:text-8xl">
                  {bigNumber}
                </motion.p>
                <span className="text-sm text-white/50">étapes simples</span>
              </div>
            </div>
          </div>

          {/* Étapes */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              Comment je travaille
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Simple, fluide, transparent.
            </h2>
            <div className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <Step key={s.n} step={s} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
