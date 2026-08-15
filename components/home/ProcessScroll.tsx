"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Vous me contactez",
    desc: "Un appel, un message, un mail : vous m'expliquez votre besoin, votre projet et vos délais.",
  },
  {
    n: "02",
    title: "J'analyse votre besoin",
    desc: "Je clarifie le projet et les contraintes pour cibler les entreprises vraiment adaptées.",
  },
  {
    n: "03",
    title: "Je vous mets en relation",
    desc: "Je vous oriente vers les bons partenaires de mon réseau et facilite les premiers échanges.",
  },
  {
    n: "04",
    title: "Vous choisissez librement",
    desc: "Vous gardez la main : vous sélectionnez votre prestataire. Les entreprises restent responsables de leurs travaux.",
  },
];

const N = STEPS.length;

function Wheel({ progress }: { progress: MotionValue<number> }) {
  // Anneau et numéro pilotés par le MÊME scroll que les cartes -> synchro parfaite
  const ringPath = useTransform(progress, [0, 1], [0.02, 1]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  // Le numéro n'incrémente que lorsque la carte précédente est entièrement recouverte
  const bigNumber = useTransform(progress, (v) => {
    let c = 1;
    for (let i = 1; i < N; i++) if (v >= i / N + 0.12) c = i + 1;
    return STEPS[c - 1].n;
  });

  return (
    <div className="relative flex items-center justify-center">
      <motion.div style={{ rotate }} className="brand-gradient absolute h-40 w-40 rounded-full opacity-20 blur-2xl sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
      <div className="relative flex h-40 w-40 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="2" />
          <motion.circle cx="50" cy="50" r="46" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="2.5" strokeLinecap="round" pathLength={1} style={{ pathLength: ringPath }} />
        </svg>
        <div className="text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-bright sm:text-xs">
            Étapes
          </span>
          <motion.p className="font-display text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            {bigNumber}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

// Carte pilotée par le scroll : elle arrive dans SA fenêtre, puis reste empilée.
function StepCard({ p, i }: { p: MotionValue<number>; i: number }) {
  const start = i === 0 ? 0 : i / N;
  const opacity = useTransform(p, [start, start + 0.05], [i === 0 ? 1 : 0, 1]);
  const y = useTransform(p, [start, start + 0.12], [i === 0 ? 20 : 90, i * 22]);
  const s = STEPS[i];
  return (
    <motion.div style={{ opacity, y, zIndex: i + 1 }} className="absolute inset-x-0 top-0">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-dark to-brand-deep p-6 shadow-2xl sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="font-display text-3xl font-extrabold text-brand-bright sm:text-5xl">{s.n}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-white sm:text-2xl">{s.title}</h3>
              <span className="shrink-0 text-xs font-medium text-white/40">{i + 1}/{N}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">{s.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative bg-brand-deep" style={{ height: "360vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-x relative w-full">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              Comment ça fonctionne ?
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Simple, fluide, transparent.
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
            <div className="flex justify-center">
              <Wheel progress={scrollYProgress} />
            </div>
            {/* Zone d'empilement des cartes */}
            <div className="relative mx-auto h-[270px] w-full max-w-xl sm:h-[230px]">
              {STEPS.map((_, i) => (
                <StepCard key={i} p={scrollYProgress} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
