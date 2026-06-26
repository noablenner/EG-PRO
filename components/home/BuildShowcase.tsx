"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Timeline partagée — texte ET dessin suivent EXACTEMENT la même     */
/*  cadence, avec un petit espace entre chaque scène (pas de chevauch.) */
/* ------------------------------------------------------------------ */
// fenêtre d'une scène autour de son "centre" : apparition / maintien / sortie
const IN = 0.11; // début du fondu avant le centre
const HOLD = 0.05; // demi-durée du maintien plein

function useSegOpacity(p: MotionValue<number>, c: number) {
  return useTransform(p, [c - IN, c - HOLD, c + HOLD, c + IN], [0, 1, 1, 0]);
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function DrawPath({
  p, from, to, d, stroke = "rgb(var(--brand-bright))", width = 2.5, dash,
}: {
  p: MotionValue<number>; from: number; to: number; d: string; stroke?: string; width?: number; dash?: string;
}) {
  const length = useTransform(p, [from, to], [0, 1]);
  return (
    <motion.path d={d} fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} style={{ pathLength: length }} />
  );
}

// Scène : même cadence que sa phrase (centre commun) + léger zoom
function Scene({ p, center, children }: { p: MotionValue<number>; center: number; children: React.ReactNode }) {
  const opacity = useSegOpacity(p, center);
  const scale = useTransform(p, [center - IN, center - HOLD, center + IN], [0.95, 1, 1.05]);
  return (
    <motion.g style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}>{children}</motion.g>
  );
}

function Person({ x, y, s = 1, flip = false }: { x: number; y: number; s?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <circle cx="0" cy="-64" r="24" fill="url(#bbright)" />
      <path d="M-40 0 Q-40 -52 0 -52 Q40 -52 40 0 Z" fill="url(#bbrand)" />
    </g>
  );
}

function Phrase({ p, center, label, sub }: { p: MotionValue<number>; center: number; label: string; sub: string }) {
  const opacity = useSegOpacity(p, center);
  const y = useTransform(p, [center - IN, center - HOLD, center + HOLD, center + IN], [30, 0, 0, -22]);
  const [first, ...rest] = label.split(" ");
  return (
    <motion.div style={{ opacity, y }} className="pointer-events-none absolute inset-x-0 top-0">
      <p className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        <span className="text-brand-bright">{first}</span> {rest.join(" ")}
      </p>
      <p className="mt-3 max-w-md text-sm text-white/70 sm:text-base">{sub}</p>
    </motion.div>
  );
}

function Sparkle({ p, from, cx, cy, r }: { p: MotionValue<number>; from: number; cx: number; cy: number; r: number }) {
  const opacity = useTransform(p, [from, from + 0.02, from + 0.06, from + 0.1], [0, 1, 1, 0]);
  const scale = useTransform(p, [from, from + 0.03], [0, 1]);
  return (
    <motion.path
      d={`M${cx} ${cy - r} L${cx + r * 0.25} ${cy - r * 0.25} L${cx + r} ${cy} L${cx + r * 0.25} ${cy + r * 0.25} L${cx} ${cy + r} L${cx - r * 0.25} ${cy + r * 0.25} L${cx - r} ${cy} L${cx - r * 0.25} ${cy - r * 0.25} Z`}
      fill="#fff" style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
    />
  );
}

function NetworkNode({ p, x, y, selected = false }: { p: MotionValue<number>; x: number; y: number; selected?: boolean }) {
  const dim = useTransform(p, [0.40, 0.44], [1, selected ? 1 : 0.22]);
  const ring = useTransform(p, [0.40, 0.45], [0, selected ? 1 : 0]);
  return (
    <motion.g style={{ opacity: dim }}>
      {selected && <circle cx={x} cy={y} r="46" fill="url(#glow)" />}
      <circle cx={x} cy={y} r="30" fill="rgb(var(--brand) / 0.2)" stroke="rgb(var(--brand-bright) / 0.7)" strokeWidth="2" />
      <path d={`M${x - 8} ${y - 8} l16 16 M${x + 8} ${y - 8} l-16 16`} stroke="rgb(var(--brand-bright))" strokeWidth="3" strokeLinecap="round" />
      {selected && (
        <motion.circle cx={x} cy={y} r="40" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3.5" style={{ pathLength: ring, opacity: ring }} />
      )}
    </motion.g>
  );
}

function DevisCard({ p, x, chosen = false }: { p: MotionValue<number>; x: number; chosen?: boolean }) {
  const lift = useTransform(p, [0.62, 0.67], [0, chosen ? -26 : 0]);
  const high = useTransform(p, [0.62, 0.67], [0, chosen ? 1 : 0]);
  return (
    <motion.g style={{ y: lift }}>
      <rect x={x} y="175" width="170" height="200" rx="16" fill={chosen ? "rgb(var(--brand) / 0.2)" : "rgb(var(--brand) / 0.1)"} stroke="rgb(var(--brand-bright) / 0.45)" strokeWidth="2" />
      <rect x={x} y="175" width="170" height="44" rx="16" fill="rgb(var(--brand) / 0.3)" />
      <text x={x + 22} y="205" fill="#fff" fontSize="22" fontFamily="sans-serif" fontWeight="700">Devis</text>
      <text x={x + 22} y="258" fill="rgb(var(--brand-bright))" fontSize="26" fontFamily="sans-serif" fontWeight="700">€</text>
      <rect x={x + 22} y="278" width="116" height="10" rx="5" fill="rgb(255 255 255 / 0.28)" />
      <rect x={x + 22} y="300" width="84" height="10" rx="5" fill="rgb(255 255 255 / 0.18)" />
      <rect x={x + 22} y="322" width="100" height="10" rx="5" fill="rgb(255 255 255 / 0.18)" />
      {chosen && (
        <motion.g style={{ opacity: high }}>
          <rect x={x - 3} y="172" width="176" height="206" rx="18" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3.5" />
          <circle cx={x + 146} cy="188" r="17" fill="rgb(var(--brand-bright))" />
          <path d={`M${x + 138} 188 l6 6 l10 -11`} stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
    </motion.g>
  );
}

function BuildingWindow({ p, x, y, t }: { p: MotionValue<number>; x: number; y: number; t: number }) {
  const opacity = useTransform(p, [t, t + 0.02], [0, 1]);
  return <motion.rect x={x} y={y} width="48" height="40" rx="4" fill="url(#bbright)" style={{ opacity }} />;
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

// Centres des 4 segments (texte + dessin partagent le même centre)
const C1 = 0.14, C2 = 0.4, C3 = 0.66, C4 = 0.9;

const PHRASES = [
  { center: C1, label: "ON imagine.", sub: "Vous me communiquez vos besoins, nous les qualifions ensemble." },
  { center: C2, label: "JE sélectionne.", sub: "Parmi un large réseau d'artisans partenaires." },
  { center: C3, label: "VOUS choisissez.", sub: "L'offre de prix qui vous convient et la solution proposée." },
  { center: C4, label: "ILS réalisent votre projet…", sub: "De l'idée à la réalité — vous gardez la main du début à la fin." },
];

const WIN = [
  { x: 360, y: 330, t: 0.85 }, { x: 425, y: 330, t: 0.865 },
  { x: 360, y: 272, t: 0.88 }, { x: 425, y: 272, t: 0.895 },
  { x: 360, y: 214, t: 0.91 }, { x: 425, y: 214, t: 0.925 },
];

const NODES = [
  { x: 250, y: 150 }, { x: 230, y: 320 },
  { x: 430, y: 110, selected: true },
  { x: 620, y: 150 }, { x: 640, y: 320 }, { x: 430, y: 410 },
];

export default function BuildShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = scrollYProgress;

  const skyOpacity = useTransform(p, [0.75, 0.95], [0, 0.45]);
  const haloScale = useTransform(p, [0, 1], [0.8, 1.25]);
  const haloRotate = useTransform(p, [0, 1], [0, 80]);
  const cloudX = useTransform(p, [0.8, 1], [-40, 60]);
  const barScale = p;

  // Scène 1 : entrée animée au scroll (les personnes glissent, l'idée surgit)
  const s1Left = useTransform(p, [C1 - 0.1, C1 - 0.01], [-130, 0]);
  const s1Right = useTransform(p, [C1 - 0.1, C1 - 0.01], [130, 0]);
  const s1Bulb = useTransform(p, [C1 - 0.05, C1 + 0.02], [0, 1]);
  const s1Bubble = useTransform(p, [C1 - 0.04, C1 + 0.03], [0, 1]);

  return (
    <section ref={ref} className="relative bg-brand-deep" style={{ height: "500vh" }}>
      <div className="relative h-full">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <motion.div style={{ opacity: skyOpacity }} className="brand-gradient pointer-events-none absolute inset-0" />
          <motion.div
            style={{ scale: haloScale, rotate: haloRotate }}
            className="brand-gradient pointer-events-none absolute -right-20 top-1/2 h-[60vh] w-[60vh] -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
          />
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
              style={{ left: `${(i * 67) % 100}%`, top: `${(i * 37) % 100}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}

          <div className="container-x relative grid w-full items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Texte à gauche */}
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
                <span className="text-xs uppercase tracking-widest text-white/40">défilez</span>
              </div>
            </div>

            {/* Animation à droite */}
            <div className="relative">
              <svg viewBox="0 0 800 460" className="h-auto w-full" role="img" aria-label="Le déroulé d'un projet avec EG-PRO">
                <defs>
                  <linearGradient id="bbrand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgb(var(--brand-bright))" />
                    <stop offset="1" stopColor="rgb(var(--brand))" />
                  </linearGradient>
                  <linearGradient id="bbright" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="rgb(var(--brand-bright))" />
                    <stop offset="1" stopColor="rgb(var(--brand))" />
                  </linearGradient>
                  <radialGradient id="glow">
                    <stop offset="0" stopColor="rgb(var(--brand-bright) / 0.55)" />
                    <stop offset="1" stopColor="rgb(var(--brand-bright) / 0)" />
                  </radialGradient>
                </defs>

                {/* SCÈNE 1 — ON imagine */}
                <Scene p={p} center={C1}>
                  <motion.g style={{ scale: s1Bulb, transformBox: "fill-box", transformOrigin: "center" }}>
                    <motion.g animate={{ opacity: [0.5, 1, 0.5], y: [0, -6, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
                      <circle cx="400" cy="95" r="26" fill="url(#glow)" />
                      <circle cx="400" cy="95" r="16" fill="none" stroke="rgb(var(--brand-bright))" strokeWidth="3" />
                      <rect x="392" y="110" width="16" height="9" rx="3" fill="rgb(var(--brand-bright))" />
                      <path d="M400 79 v-12 M418 95 h12 M382 95 h-12 M413 82 l8 -8 M387 82 l-8 -8" stroke="rgb(var(--brand-bright))" strokeWidth="2.5" strokeLinecap="round" />
                    </motion.g>
                  </motion.g>
                  <motion.g style={{ x: s1Left }}>
                    <Person x={310} y={380} s={1.15} />
                  </motion.g>
                  <motion.g style={{ x: s1Right }}>
                    <Person x={500} y={380} s={1.15} flip />
                  </motion.g>
                  <motion.g style={{ opacity: s1Bubble }}>
                    <motion.g animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2, repeat: Infinity }}>
                      <rect x="250" y="225" width="104" height="56" rx="16" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="2" />
                      <circle cx="282" cy="253" r="6" fill="rgb(var(--brand-bright))" />
                      <circle cx="302" cy="253" r="6" fill="rgb(var(--brand-bright))" />
                      <circle cx="322" cy="253" r="6" fill="rgb(var(--brand-bright))" />
                    </motion.g>
                  </motion.g>
                  <motion.g style={{ opacity: s1Bubble }}>
                    <motion.g animate={{ opacity: [1, 0.55, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      <rect x="470" y="205" width="104" height="56" rx="16" fill="rgb(var(--brand) / 0.25)" stroke="rgb(var(--brand-bright) / 0.5)" strokeWidth="2" />
                      <rect x="490" y="225" width="64" height="7" rx="3" fill="rgb(var(--brand-bright))" />
                      <rect x="490" y="240" width="44" height="7" rx="3" fill="rgb(var(--brand-bright))" />
                    </motion.g>
                  </motion.g>
                </Scene>

                {/* SCÈNE 2 — JE sélectionne */}
                <Scene p={p} center={C2}>
                  {NODES.map((n, i) => (
                    <DrawPath key={`l${i}`} p={p} from={0.31} to={0.38} d={`M430 235 L${n.x} ${n.y}`} width={2} stroke="rgb(var(--brand-bright) / 0.45)" />
                  ))}
                  <motion.circle cx="430" cy="235" r="5" fill="#fff" animate={{ cy: [235, 110], opacity: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
                  <circle cx="430" cy="235" r="36" fill="rgb(var(--brand))" />
                  <path d="M418 235 a12 12 0 1 1 24 0 q0 9 -12 15 q-12 -6 -12 -15" fill="#fff" opacity="0.92" />
                  {NODES.map((n, i) => (
                    <NetworkNode key={`n${i}`} p={p} x={n.x} y={n.y} selected={n.selected} />
                  ))}
                </Scene>

                {/* SCÈNE 3 — VOUS choisissez */}
                <Scene p={p} center={C3}>
                  <DevisCard p={p} x={120} />
                  <DevisCard p={p} x={315} chosen />
                  <DevisCard p={p} x={510} />
                  <Sparkle p={p} from={0.66} cx={330} cy={150} r={10} />
                  <Sparkle p={p} from={0.68} cx={470} cy={170} r={9} />
                </Scene>

                {/* SCÈNE 4 — ILS réalisent */}
                <Scene p={p} center={C4}>
                  <motion.g style={{ x: cloudX }} opacity={0.5}>
                    <ellipse cx="160" cy="120" rx="34" ry="18" fill="#fff" opacity="0.5" />
                    <ellipse cx="190" cy="112" rx="26" ry="16" fill="#fff" opacity="0.5" />
                  </motion.g>
                  <DrawPath p={p} from={0.8} to={0.85} d="M120 410 H680" width={2.5} />
                  <DrawPath p={p} from={0.81} to={0.87} d="M210 410 V130 M178 144 H470" width={3.5} />
                  <line x1="435" y1="144" x2="435" y2="190" stroke="rgb(var(--brand-bright))" strokeWidth="2" />
                  <rect x="416" y="190" width="38" height="26" rx="4" fill="rgb(var(--brand))" opacity="0.85" />
                  <DrawPath p={p} from={0.83} to={0.9} d="M340 410 V185 H510 V410" width={3.5} stroke="#fff" />
                  <DrawPath p={p} from={0.88} to={0.93} d="M327 185 H523 M327 170 H523" width={3.5} stroke="#fff" />
                  {WIN.map((w, i) => (
                    <BuildingWindow key={i} p={p} x={w.x} y={w.y} t={w.t} />
                  ))}
                  <motion.rect x="408" y="366" width="44" height="44" rx="4" fill="url(#bbright)" style={{ opacity: useTransform(p, [0.93, 0.95], [0, 0.9]) }} />
                  <Sparkle p={p} from={0.94} cx={370} cy={230} r={13} />
                  <Sparkle p={p} from={0.96} cx={500} cy={270} r={14} />
                </Scene>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
