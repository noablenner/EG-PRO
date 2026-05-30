"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Sous-composants pilotés par le scroll                             */
/* ------------------------------------------------------------------ */

// Trait qui se dessine (plan technique)
function DrawPath({
  p,
  from,
  to,
  d,
  stroke = "rgb(var(--brand-bright))",
  width = 2,
  dash,
}: {
  p: MotionValue<number>;
  from: number;
  to: number;
  d: string;
  stroke?: string;
  width?: number;
  dash?: string;
}) {
  const length = useTransform(p, [from, to], [0, 1]);
  const opacity = useTransform(p, [from, from + 0.01], [0, 1]);
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      style={{ pathLength: length, opacity }}
    />
  );
}

// Fenêtre qui s'allume
function Window({
  p,
  from,
  x,
  y,
  w,
  h,
}: {
  p: MotionValue<number>;
  from: number;
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  const opacity = useTransform(p, [from, from + 0.05], [0, 1]);
  const scale = useTransform(p, [from, from + 0.06], [0.3, 1]);
  const glow = useTransform(p, [from + 0.04, from + 0.12], [0, 1]);
  return (
    <motion.g style={{ opacity }}>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={3}
        fill="rgb(var(--brand-bright))"
        style={{
          scale,
          transformBox: "fill-box",
          transformOrigin: "center",
          opacity: useTransform(glow, [0, 1], [0.45, 0.95]),
        }}
      />
    </motion.g>
  );
}

// Phrase qui apparaît puis s'efface
function Phrase({
  p,
  center,
  label,
  sub,
}: {
  p: MotionValue<number>;
  center: number;
  label: string;
  sub: string;
}) {
  const opacity = useTransform(
    p,
    [center - 0.14, center - 0.05, center + 0.07, center + 0.16],
    [0, 1, 1, 0]
  );
  const y = useTransform(p, [center - 0.14, center - 0.02], [28, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-x-0 top-0"
    >
      <p className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
        {label}
      </p>
      <p className="mt-3 max-w-md text-sm text-white/65 sm:text-base">{sub}</p>
    </motion.div>
  );
}

function Sparkle({
  p,
  from,
  cx,
  cy,
  r,
}: {
  p: MotionValue<number>;
  from: number;
  cx: number;
  cy: number;
  r: number;
}) {
  const opacity = useTransform(
    p,
    [from, from + 0.05, from + 0.1, from + 0.2],
    [0, 1, 1, 0]
  );
  const scale = useTransform(p, [from, from + 0.08], [0, 1]);
  return (
    <motion.path
      d={`M${cx} ${cy - r} L${cx + r * 0.25} ${cy - r * 0.25} L${cx + r} ${cy} L${cx + r * 0.25} ${cy + r * 0.25} L${cx} ${cy + r} L${cx - r * 0.25} ${cy + r * 0.25} L${cx - r} ${cy} L${cx - r * 0.25} ${cy - r * 0.25} Z`}
      fill="#fff"
      style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Section principale                                                */
/* ------------------------------------------------------------------ */

const PHRASES = [
  { center: 0.1, label: "On imagine.", sub: "Le projet prend forme, sur le papier d'abord." },
  { center: 0.4, label: "On construit.", sub: "Les bons artisans entrent en action, étage par étage." },
  { center: 0.66, label: "On rénove.", sub: "Chaque détail est remis à neuf, proprement." },
  { center: 0.9, label: "Vos projets prennent vie.", sub: "De l'idée à la réalité — sans stress, avec EG-PRO." },
];

// Étages / fenêtres (3 colonnes x 5 rangées)
const WIN_COLS = [330, 415, 500];
const WIN_ROWS = [190, 245, 300, 355, 410];

export default function BuildShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = scrollYProgress;

  // Ciel : du sombre vers un bleu/vert plus lumineux
  const skyOpacity = useTransform(p, [0.5, 0.85], [0, 0.5]);
  // Bâtiment "neuf" rempli qui apparaît en phase rénovation
  const fillOpacity = useTransform(p, [0.6, 0.82], [0, 1]);
  // Voile de "saleté/ancien" qui s'efface
  const grimeWipe = useTransform(p, [0.58, 0.8], [0, 100]); // % largeur effacée
  const grimeClip = useTransform(grimeWipe, (v) => `inset(0 0 0 ${v}%)`);
  // Grue qui se rétracte légèrement à la fin
  const craneOpacity = useTransform(p, [0.0, 0.05, 0.86, 0.95], [0, 1, 1, 0.25]);
  // Crochet de grue qui descend puis remonte
  const hookY = useTransform(p, [0.18, 0.3, 0.45], [-60, 0, -60]);
  // Halo final
  const haloScale = useTransform(p, [0.82, 1], [0.6, 1.15]);
  const haloOpacity = useTransform(p, [0.82, 0.95, 1], [0, 0.5, 0.35]);
  // Scène : léger zoom général
  const sceneScale = useTransform(p, [0, 1], [0.92, 1.04]);
  // Barre de progression
  const barScaleY = p;

  return (
    <section ref={ref} className="relative bg-brand-deep" style={{ height: "340vh" }}>
      <div className="relative h-full">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Fonds */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <motion.div
            style={{ opacity: skyOpacity }}
            className="brand-gradient pointer-events-none absolute inset-0"
          />
          <motion.div
            style={{ scale: haloScale, opacity: haloOpacity }}
            className="brand-gradient pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          />
          {/* Particules */}
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
              style={{
                left: `${(i * 67) % 100}%`,
                top: `${(i * 37) % 100}%`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}

          <div className="container-x relative grid w-full items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Colonne texte */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-bright">
                <span className="h-px w-8 bg-current opacity-60" />
                EG-PRO en action
              </span>
              <div className="relative mt-6 h-44 sm:h-52">
                {PHRASES.map((ph) => (
                  <Phrase key={ph.label} p={p} center={ph.center} label={ph.label} sub={ph.sub} />
                ))}
              </div>

              {/* Barre de progression */}
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-1 w-40 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    style={{ scaleX: barScaleY, transformOrigin: "left" }}
                    className="absolute inset-0 rounded-full bg-brand-bright"
                  />
                </div>
                <span className="text-xs text-white/40">défilez</span>
              </div>
            </div>

            {/* Scène SVG */}
            <motion.div style={{ scale: sceneScale }} className="relative">
              <svg viewBox="0 0 800 520" className="h-auto w-full" role="img" aria-label="Illustration : un immeuble se construit et se rénove">
                {/* Sol */}
                <DrawPath p={p} from={0.02} to={0.12} d="M40 472 H760" stroke="rgb(var(--brand-bright))" width={2} />

                {/* Grue */}
                <motion.g style={{ opacity: craneOpacity }}>
                  <DrawPath p={p} from={0.04} to={0.16} d="M150 472 V120" width={3} />
                  <DrawPath p={p} from={0.06} to={0.18} d="M95 132 H470" width={3} />
                  <DrawPath p={p} from={0.06} to={0.14} d="M150 120 L120 132 M150 120 L180 132" width={2} />
                  {/* câble + crochet */}
                  <line x1="430" y1="132" x2="430" y2="160" stroke="rgb(var(--brand-bright))" strokeWidth={1.5} />
                  <motion.g style={{ y: hookY }}>
                    <line x1="430" y1="158" x2="430" y2="196" stroke="rgb(var(--brand-bright))" strokeWidth={1.5} />
                    <rect x="412" y="196" width="36" height="26" rx="3" fill="rgb(var(--brand))" opacity="0.85" />
                  </motion.g>
                </motion.g>

                {/* Échafaudage (pointillés) */}
                <DrawPath p={p} from={0.12} to={0.34} d="M285 470 V165 M615 470 V165 M285 250 H615 M285 340 H615" stroke="rgb(var(--brand-bright))" width={1.4} dash="6 7" />

                {/* Contour du bâtiment */}
                <DrawPath p={p} from={0.14} to={0.32} d="M300 470 V170 H600 V470" width={3} stroke="#fff" />
                {/* Toit / parapet */}
                <DrawPath p={p} from={0.28} to={0.4} d="M288 170 H612 M288 156 H612" width={3} stroke="#fff" />
                {/* Séparations d'étages */}
                <DrawPath p={p} from={0.2} to={0.4} d="M300 225 H600 M300 280 H600 M300 335 H600 M300 390 H600" width={1.2} stroke="rgb(255 255 255 / 0.4)" />

                {/* Bâtiment "neuf" rempli (rénovation) */}
                <motion.rect
                  x="300" y="156" width="300" height="314" rx="4"
                  fill="rgb(var(--brand) / 0.18)"
                  stroke="rgb(var(--brand-bright) / 0.5)"
                  style={{ opacity: fillOpacity }}
                />

                {/* Fenêtres qui s'allument (étage par étage, de bas en haut) */}
                {WIN_ROWS.map((y, r) =>
                  WIN_COLS.map((x, c) => (
                    <Window
                      key={`${r}-${c}`}
                      p={p}
                      from={0.32 + (WIN_ROWS.length - 1 - r) * 0.04 + c * 0.012}
                      x={x}
                      y={y}
                      w={60}
                      h={34}
                    />
                  ))
                )}

                {/* Porte */}
                <motion.rect
                  x="426" y="424" width="48" height="46" rx="3"
                  fill="rgb(var(--brand-bright))"
                  style={{ opacity: useTransform(p, [0.46, 0.52], [0, 0.9]) }}
                />

                {/* Voile de "saleté" qui s'efface par un balayage */}
                <motion.rect
                  x="300" y="156" width="300" height="314"
                  fill="rgb(8 16 12 / 0.55)"
                  style={{ clipPath: grimeClip }}
                />

                {/* Étincelles de propreté */}
                <Sparkle p={p} from={0.7} cx={350} cy={210} r={12} />
                <Sparkle p={p} from={0.76} cx={540} cy={300} r={14} />
                <Sparkle p={p} from={0.8} cx={470} cy={200} r={10} />
                <Sparkle p={p} from={0.74} cx={360} cy={380} r={11} />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
