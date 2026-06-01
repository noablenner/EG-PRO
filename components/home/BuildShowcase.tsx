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
  width = 2.5,
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

// Une scène : fondu + léger zoom qui s'enchaînent (transitions fluides)
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
  const opacity = useTransform(p, [start - 0.07, start + 0.05, end - 0.06, end + 0.04], [0, 1, 1, 0]);
  const scale = useTransform(p, [start - 0.07, start + 0.05, end + 0.04], [0.86, 1, 1.12]);
  return (
    <motion.g style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}>
      {children}
    </motion.g>
  );
}

function Person({ x, y, flip = false, s = 1 }: { x: number; y: number; flip?: boolean; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <circle cx="0" cy="-66" r="26" fill="rgb(var(--brand-bright))" />
      <path d="M-42 0 Q-42 -54 0 -54 Q42 -54 42 0 Z" fill="rgb(var(--brand))" />
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
  const opacity = useTransform(p, [center - 0.13, center - 0.04, center + 0.06, center + 0.15], [0, 1, 1, 0]);
  const y = useTransform(p, [center - 0.13, center - 0.02], [34, 0]);
  const [first, ...rest] = label.split(" ");
  return (
    <motion.div style={{ opacity, y }} className="pointer-events-none absolute inset-x-0 top-0 text-center">
      <p className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
        <span className="text-brand-bright">{first}</span> {rest.join(" ")}
      </p>
      <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-lg">{sub}</p>
    </motion.div>
  );
}

function Sparkle({ p, from, cx, cy, r }: { p: MotionValue<number>; from: number; cx: number; cy: number; r: number }) {
  const opacity = useTransform(p, [from, from + 0.03, from + 0.1, from + 0.18], [0, 1, 1, 0]);
  const scale = useTransform(p, [from, from + 0.05], [0, 1]);
  return (
    <motion.path
      d={`M${cx} ${cy - r} L${cx + r * 0.25} ${cy - r * 0.25} L${cx + r} ${cy} L${cx + r * 0.25} ${cy + r * 0.25} L${cx} ${cy + r} L${cx - r * 0.25} ${cy + r * 0.25} L${cx - r} ${cy} L${cx - r * 0.25} ${cy - r * 0.25} Z`}
      fill="#fff"
      style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
    />
  );
}

function NetworkNode({ p, x, y, selected = false }: { p: MotionValue<number>; x: number; y: number; selected?: boolean }) {
  const dim = useTransform(p, [0.42, 0.48], [1, selected ? 1 : 0.25]);
  const ring = useTransform(p, [0.43, 0.5], [0, selected ? 1 : 0]);
  return (
    <motion.g style={{ opacity: dim }}>
      <circle cx={x} cy={y} r="32" fill="rgb(var(--brand) / 0.18)" stroke="rgb(var(--brand-bright) / 0.7)" strokeWidth="2" />
      <path d={`M${x - 9} ${y - 9} l18 18 M${x + 9} ${y - 9} l-18 18`} stroke="rgb(var(--brand-bright))" strokeWidth="3" strokeLinecap="round" />
      {selected && (
        <motion.circle cx={x} cy={y} r="42" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3.5" style={{ pathLength: ring, opacity: ring }} />
      )}
    </motion.g>
  );
}

function DevisCard({ p, x, chosen = false }: { p: MotionValue<number>; x: number; chosen?: boolean }) {
  const lift = useTransform(p, [0.6, 0.68], [0, chosen ? -30 : 0]);
  const high = useTransform(p, [0.6, 0.68], [0, chosen ? 1 : 0]);
  return (
    <motion.g style={{ y: lift }}>
      <rect x={x} y="180" width="180" height="210" rx="16" fill="rgb(var(--brand) / 0.12)" stroke="rgb(var(--brand-bright) / 0.45)" strokeWidth="2" />
      <text x={x + 24} y="228" fill="rgb(var(--brand-bright))" fontSize="28" fontFamily="sans-serif" fontWeight="700">€</text>
      <rect x={x + 24} y="250" width="120" height="11" rx="5" fill="rgb(255 255 255 / 0.28)" />
      <rect x={x + 24} y="274" width="88" height="11" rx="5" fill="rgb(255 255 255 / 0.18)" />
      <rect x={x + 24} y="298" width="108" height="11" rx="5" fill="rgb(255 255 255 / 0.18)" />
      <rect x={x + 24} y="322" width="70" height="11" rx="5" fill="rgb(255 255 255 / 0.18)" />
      {chosen && (
        <motion.g style={{ opacity: high }}>
          <rect x={x - 3} y="177" width="186" height="216" rx="18" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3.5" />
          <circle cx={x + 156} cy="192" r="18" fill="rgb(var(--brand-bright))" />
          <path d={`M${x + 148} 192 l6 6 l11 -12`} stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
    </motion.g>
  );
}

function BuildingWindow({ p, x, y, t }: { p: MotionValue<number>; x: number; y: number; t: number }) {
  const opacity = useTransform(p, [t, t + 0.025], [0, 1]);
  return <motion.rect x={x} y={y} width="56" height="46" rx="4" fill="rgb(var(--brand-bright))" style={{ opacity }} />;
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

const PHRASES = [
  { center: 0.12, label: "ON imagine.", sub: "Vous me communiquez vos besoins, nous les qualifions ensemble." },
  { center: 0.4, label: "JE sélectionne.", sub: "Parmi un large réseau d'artisans partenaires." },
  { center: 0.64, label: "VOUS choisissez.", sub: "L'offre de prix qui vous convient et la solution proposée." },
  { center: 0.88, label: "ILS réalisent votre projet…", sub: "De l'idée à la réalité — vous gardez la main du début à la fin." },
];

const WIN = [
  { x: 392, y: 350, t: 0.82 },
  { x: 462, y: 350, t: 0.845 },
  { x: 392, y: 288, t: 0.87 },
  { x: 462, y: 288, t: 0.895 },
  { x: 392, y: 226, t: 0.92 },
  { x: 462, y: 226, t: 0.945 },
];

const NODES = [
  { x: 250, y: 150 },
  { x: 230, y: 320 },
  { x: 450, y: 110, selected: true },
  { x: 650, y: 150 },
  { x: 670, y: 320 },
  { x: 450, y: 420 },
];

export default function BuildShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = scrollYProgress;

  const skyOpacity = useTransform(p, [0.7, 0.95], [0, 0.5]);
  const haloScale = useTransform(p, [0, 1], [0.8, 1.3]);
  const haloOpacity = useTransform(p, [0.1, 0.5, 0.9], [0.3, 0.45, 0.4]);
  const haloRotate = useTransform(p, [0, 1], [0, 90]);
  const barScale = p;

  return (
    <section ref={ref} className="relative bg-brand-deep" style={{ height: "420vh" }}>
      <div className="relative h-full">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          {/* Fonds */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <motion.div style={{ opacity: skyOpacity }} className="brand-gradient pointer-events-none absolute inset-0" />
          <motion.div
            style={{ scale: haloScale, opacity: haloOpacity, rotate: haloRotate }}
            className="brand-gradient pointer-events-none absolute left-1/2 top-1/2 h-[75vh] w-[75vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          />
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
              style={{ left: `${(i * 53) % 100}%`, top: `${(i * 31) % 100}%` }}
              animate={{ y: [0, -22, 0], opacity: [0.1, 0.55, 0.1] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
            />
          ))}

          <div className="container-x relative flex w-full flex-col items-center">
            {/* Texte (au-dessus, centré, grand) */}
            <div className="relative h-40 w-full sm:h-44">
              {PHRASES.map((ph) => (
                <Phrase key={ph.label} p={p} center={ph.center} label={ph.label} sub={ph.sub} />
              ))}
            </div>

            {/* Scène (grande, centrée) */}
            <div className="relative mt-2 w-full max-w-3xl">
              <svg viewBox="0 0 900 520" className="h-auto w-full" role="img" aria-label="Le déroulé d'un projet avec EG-PRO">
                {/* sol / réflexion */}
                <motion.line
                  x1="100" y1="470" x2="800" y2="470"
                  stroke="rgb(var(--brand-bright) / 0.4)" strokeWidth="2"
                  style={{ opacity: useTransform(p, [0.0, 0.08], [0.15, 0.4]) }}
                />

                {/* SCÈNE 1 — ON imagine (échange) */}
                <Scene p={p} start={0} end={0.3}>
                  <Person x={330} y={420} s={1.15} />
                  <Person x={560} y={420} s={1.15} flip />
                  <motion.g animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    <rect x="270" y="250" width="110" height="60" rx="18" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="2" />
                    <circle cx="305" cy="280" r="6" fill="rgb(var(--brand-bright))" />
                    <circle cx="325" cy="280" r="6" fill="rgb(var(--brand-bright))" />
                    <circle cx="345" cy="280" r="6" fill="rgb(var(--brand-bright))" />
                  </motion.g>
                  <motion.g animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <rect x="520" y="225" width="110" height="60" rx="18" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="2" />
                    <rect x="542" y="246" width="66" height="7" rx="3" fill="rgb(var(--brand-bright))" />
                    <rect x="542" y="260" width="46" height="7" rx="3" fill="rgb(var(--brand-bright))" />
                  </motion.g>
                </Scene>

                {/* SCÈNE 2 — JE sélectionne (réseau) */}
                <Scene p={p} start={0.22} end={0.52}>
                  {NODES.map((n, i) => (
                    <DrawPath key={`l${i}`} p={p} from={0.26} to={0.38} d={`M450 265 L${n.x} ${n.y}`} width={2} stroke="rgb(var(--brand-bright) / 0.5)" />
                  ))}
                  <circle cx="450" cy="265" r="38" fill="rgb(var(--brand))" />
                  <path d="M438 265 a12 12 0 1 1 24 0 q0 9 -12 15 q-12 -6 -12 -15" fill="#fff" opacity="0.92" />
                  {NODES.map((n, i) => (
                    <NetworkNode key={`n${i}`} p={p} x={n.x} y={n.y} selected={n.selected} />
                  ))}
                </Scene>

                {/* SCÈNE 3 — VOUS choisissez (offres) */}
                <Scene p={p} start={0.46} end={0.74}>
                  <DevisCard p={p} x={170} />
                  <DevisCard p={p} x={370} chosen />
                  <DevisCard p={p} x={570} />
                </Scene>

                {/* SCÈNE 4 — ILS réalisent (construction) */}
                <Scene p={p} start={0.68} end={1.0}>
                  <DrawPath p={p} from={0.72} to={0.8} d="M150 470 H750" width={2.5} />
                  <DrawPath p={p} from={0.74} to={0.84} d="M230 470 V150 M195 164 H520" width={3.5} />
                  <line x1="480" y1="164" x2="480" y2="210" stroke="rgb(var(--brand-bright))" strokeWidth="2" />
                  <rect x="460" y="210" width="40" height="28" rx="4" fill="rgb(var(--brand))" opacity="0.85" />
                  <DrawPath p={p} from={0.78} to={0.9} d="M370 470 V200 H560 V470" width={3.5} stroke="#fff" />
                  <DrawPath p={p} from={0.85} to={0.93} d="M356 200 H574 M356 184 H574" width={3.5} stroke="#fff" />
                  {WIN.map((w, i) => (
                    <BuildingWindow key={i} p={p} x={w.x} y={w.y} t={w.t} />
                  ))}
                  <motion.rect x="442" y="424" width="46" height="46" rx="4" fill="rgb(var(--brand-bright))" style={{ opacity: useTransform(p, [0.92, 0.95], [0, 0.9]) }} />
                  <Sparkle p={p} from={0.93} cx={400} cy={250} r={15} />
                  <Sparkle p={p} from={0.95} cx={540} cy={300} r={16} />
                  <Sparkle p={p} from={0.97} cx={465} cy={210} r={12} />
                </Scene>
              </svg>
            </div>

            {/* Barre de progression */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ scaleX: barScale, transformOrigin: "left" }} className="absolute inset-0 rounded-full bg-brand-bright" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40">défilez</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
