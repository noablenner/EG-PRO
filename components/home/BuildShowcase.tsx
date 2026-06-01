"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

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

// Une "scène" qui apparaît puis disparaît (crossfade) selon le scroll
function Scene({
  p,
  start,
  end,
  children,
}: {
  p: MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
}) {
  const opacity = useTransform(
    p,
    [start - 0.05, start + 0.04, end - 0.05, end + 0.03],
    [0, 1, 1, 0]
  );
  return <motion.g style={{ opacity }}>{children}</motion.g>;
}

// Personnage stylisé (silhouette)
function Person({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) ${flip ? "scale(-1,1)" : ""}`}>
      <circle cx="0" cy="-58" r="22" fill="rgb(var(--brand-bright))" />
      <path d="M-36 0 Q-36 -46 0 -46 Q36 -46 36 0 Z" fill="rgb(var(--brand))" />
    </g>
  );
}

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
    [center - 0.13, center - 0.05, center + 0.07, center + 0.15],
    [0, 1, 1, 0]
  );
  const y = useTransform(p, [center - 0.13, center - 0.02], [28, 0]);
  return (
    <motion.div style={{ opacity, y }} className="pointer-events-none absolute inset-x-0 top-0">
      <p className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">{label}</p>
      <p className="mt-3 max-w-md text-sm text-white/65 sm:text-base">{sub}</p>
    </motion.div>
  );
}

function Sparkle({ p, from, cx, cy, r }: { p: MotionValue<number>; from: number; cx: number; cy: number; r: number }) {
  const opacity = useTransform(p, [from, from + 0.04, from + 0.1, from + 0.18], [0, 1, 1, 0]);
  const scale = useTransform(p, [from, from + 0.06], [0, 1]);
  return (
    <motion.path
      d={`M${cx} ${cy - r} L${cx + r * 0.25} ${cy - r * 0.25} L${cx + r} ${cy} L${cx + r * 0.25} ${cy + r * 0.25} L${cx} ${cy + r} L${cx - r * 0.25} ${cy + r * 0.25} L${cx - r} ${cy} L${cx - r * 0.25} ${cy - r * 0.25} Z`}
      fill="#fff"
      style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Scènes                                                            */
/* ------------------------------------------------------------------ */

// Scène 2 : un nœud du réseau qui se fait sélectionner
function NetworkNode({
  p,
  x,
  y,
  selected = false,
}: {
  p: MotionValue<number>;
  x: number;
  y: number;
  selected?: boolean;
}) {
  const dim = useTransform(p, [0.42, 0.48], [1, selected ? 1 : 0.3]);
  const ring = useTransform(p, [0.43, 0.49], [0, selected ? 1 : 0]);
  return (
    <motion.g style={{ opacity: dim }}>
      <circle cx={x} cy={y} r="26" fill="rgb(var(--brand) / 0.18)" stroke="rgb(var(--brand-bright) / 0.7)" strokeWidth="1.5" />
      {/* petit symbole "outil" */}
      <path
        d={`M${x - 7} ${y - 7} l14 14 M${x + 7} ${y - 7} l-14 14`}
        stroke="rgb(var(--brand-bright))"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {selected && (
        <motion.circle
          cx={x}
          cy={y}
          r="34"
          fill="none"
          stroke="rgb(var(--brand-bright))"
          strokeWidth="3"
          style={{ pathLength: ring, opacity: ring }}
        />
      )}
    </motion.g>
  );
}

// Scène 3 : carte de devis qui se fait choisir
function DevisCard({
  p,
  x,
  chosen = false,
}: {
  p: MotionValue<number>;
  x: number;
  chosen?: boolean;
}) {
  const lift = useTransform(p, [0.6, 0.67], [0, chosen ? -22 : 0]);
  const high = useTransform(p, [0.6, 0.67], [0, chosen ? 1 : 0]);
  return (
    <motion.g style={{ y: lift }}>
      <rect x={x} y="190" width="150" height="180" rx="14" fill="rgb(var(--brand) / 0.12)" stroke="rgb(var(--brand-bright) / 0.45)" strokeWidth="1.5" />
      <text x={x + 20} y="232" fill="rgb(var(--brand-bright))" fontSize="22" fontFamily="sans-serif" fontWeight="700">€</text>
      <rect x={x + 20} y="250" width="100" height="9" rx="4" fill="rgb(255 255 255 / 0.25)" />
      <rect x={x + 20} y="270" width="74" height="9" rx="4" fill="rgb(255 255 255 / 0.18)" />
      <rect x={x + 20} y="290" width="90" height="9" rx="4" fill="rgb(255 255 255 / 0.18)" />
      {chosen && (
        <motion.g style={{ opacity: high }}>
          <rect x={x - 2} y="188" width="154" height="184" rx="15" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3" />
          <circle cx={x + 130} cy="200" r="15" fill="rgb(var(--brand-bright))" />
          <path d={`M${x + 123} 200 l5 5 l9 -10`} stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

const PHRASES = [
  { center: 0.12, label: "On imagine.", sub: "Vous me communiquez vos besoins, nous les qualifions ensemble." },
  { center: 0.4, label: "Je sélectionne.", sub: "Parmi un large réseau d'artisans partenaires." },
  { center: 0.64, label: "Vous choisissez.", sub: "L'offre de prix qui vous convient et la solution proposée." },
  { center: 0.88, label: "Ils réalisent votre projet…", sub: "De l'idée à la réalité — vous gardez la main du début à la fin." },
];

const WIN = [
  { x: 345, y: 300, t: 0.82 },
  { x: 410, y: 300, t: 0.85 },
  { x: 345, y: 245, t: 0.88 },
  { x: 410, y: 245, t: 0.9 },
  { x: 345, y: 190, t: 0.92 },
  { x: 410, y: 190, t: 0.94 },
];

function BuildingWindow({ p, x, y, t }: { p: MotionValue<number>; x: number; y: number; t: number }) {
  const opacity = useTransform(p, [t, t + 0.03], [0, 1]);
  return <motion.rect x={x} y={y} width="45" height="38" rx="3" fill="rgb(var(--brand-bright))" style={{ opacity }} />;
}

export default function BuildShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = scrollYProgress;

  const skyOpacity = useTransform(p, [0.7, 0.95], [0, 0.45]);
  const haloScale = useTransform(p, [0.8, 1], [0.6, 1.15]);
  const haloOpacity = useTransform(p, [0.8, 0.95, 1], [0, 0.5, 0.35]);
  const barScale = p;

  // lignes du réseau (scène 2) : se dessinent
  const netNodes = [
    { x: 250, y: 170 },
    { x: 250, y: 330 },
    { x: 400, y: 130, selected: true },
    { x: 550, y: 170 },
    { x: 550, y: 330 },
    { x: 400, y: 370 },
  ];

  return (
    <section ref={ref} className="relative bg-brand-deep" style={{ height: "360vh" }}>
      <div className="relative h-full">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <motion.div style={{ opacity: skyOpacity }} className="brand-gradient pointer-events-none absolute inset-0" />
          <motion.div
            style={{ scale: haloScale, opacity: haloOpacity }}
            className="brand-gradient pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          />
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
              style={{ left: `${(i * 67) % 100}%`, top: `${(i * 37) % 100}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}

          <div className="container-x relative grid w-full items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Texte */}
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
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-1 w-40 overflow-hidden rounded-full bg-white/10">
                  <motion.div style={{ scaleX: barScale, transformOrigin: "left" }} className="absolute inset-0 rounded-full bg-brand-bright" />
                </div>
                <span className="text-xs text-white/40">défilez</span>
              </div>
            </div>

            {/* Scènes */}
            <div className="relative">
              <svg viewBox="0 0 800 520" className="h-auto w-full" role="img" aria-label="Le déroulé d'un projet avec EG-PRO">
                {/* SCÈNE 1 — On échange */}
                <Scene p={p} start={0} end={0.3}>
                  <Person x={300} y={380} />
                  <Person x={500} y={380} flip />
                  {/* bulles de discussion */}
                  <motion.g animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    <rect x="250" y="250" width="90" height="50" rx="14" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="1.5" />
                    <circle cx="278" cy="275" r="5" fill="rgb(var(--brand-bright))" />
                    <circle cx="295" cy="275" r="5" fill="rgb(var(--brand-bright))" />
                    <circle cx="312" cy="275" r="5" fill="rgb(var(--brand-bright))" />
                  </motion.g>
                  <motion.g animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <rect x="470" y="230" width="90" height="50" rx="14" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="1.5" />
                    <rect x="488" y="248" width="54" height="6" rx="3" fill="rgb(var(--brand-bright))" />
                    <rect x="488" y="260" width="38" height="6" rx="3" fill="rgb(var(--brand-bright))" />
                  </motion.g>
                </Scene>

                {/* SCÈNE 2 — Sélection dans le réseau */}
                <Scene p={p} start={0.28} end={0.52}>
                  {netNodes.map((n, i) => (
                    <DrawPath key={`l${i}`} p={p} from={0.3} to={0.4} d={`M400 250 L${n.x} ${n.y}`} width={1.5} stroke="rgb(var(--brand-bright) / 0.5)" />
                  ))}
                  <circle cx="400" cy="250" r="30" fill="rgb(var(--brand))" />
                  <path d="M392 250 a8 8 0 1 1 16 0 q0 6 -8 10 q-8 -4 -8 -10" fill="#fff" opacity="0.9" />
                  {netNodes.map((n, i) => (
                    <NetworkNode key={`n${i}`} p={p} x={n.x} y={n.y} selected={n.selected} />
                  ))}
                </Scene>

                {/* SCÈNE 3 — Choix de l'offre */}
                <Scene p={p} start={0.5} end={0.74}>
                  <DevisCard p={p} x={170} />
                  <DevisCard p={p} x={330} chosen />
                  <DevisCard p={p} x={490} />
                </Scene>

                {/* SCÈNE 4 — Réalisation / construction */}
                <Scene p={p} start={0.74} end={1.0}>
                  <DrawPath p={p} from={0.75} to={0.82} d="M120 430 H680" width={2} />
                  {/* grue */}
                  <DrawPath p={p} from={0.76} to={0.84} d="M200 430 V160 M170 172 H470" width={3} />
                  <line x1="430" y1="172" x2="430" y2="210" stroke="rgb(var(--brand-bright))" strokeWidth="1.5" />
                  <rect x="414" y="210" width="32" height="22" rx="3" fill="rgb(var(--brand))" opacity="0.85" />
                  {/* immeuble */}
                  <DrawPath p={p} from={0.78} to={0.9} d="M330 430 V165 H500 V430" width={3} stroke="#fff" />
                  <DrawPath p={p} from={0.84} to={0.92} d="M318 165 H512 M318 152 H512" width={3} stroke="#fff" />
                  {WIN.map((w, i) => (
                    <BuildingWindow key={i} p={p} x={w.x} y={w.y} t={w.t} />
                  ))}
                  <motion.rect x="395" y="388" width="40" height="42" rx="3" fill="rgb(var(--brand-bright))" style={{ opacity: useTransform(p, [0.92, 0.95], [0, 0.9]) }} />
                  <Sparkle p={p} from={0.93} cx={360} cy={210} r={12} />
                  <Sparkle p={p} from={0.95} cx={475} cy={250} r={13} />
                </Scene>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
