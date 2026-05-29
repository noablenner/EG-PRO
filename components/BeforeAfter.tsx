"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

/** Slider avant/après : on glisse pour comparer les deux images. */
export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Avant",
  afterLabel = "Après",
  alt = "Comparaison avant / après",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      data-cursor="Glissez"
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl bg-brand-deep shadow-soft"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* Après (fond) */}
      <Image
        src={after}
        alt={`${alt} — ${afterLabel}`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
      <span className="absolute right-3 top-3 z-20 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Avant (recouvre, coupé selon la position) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="relative h-full" style={{ width: ref.current?.offsetWidth || "100%" }}>
          <Image
            src={before}
            alt={`${alt} — ${beforeLabel}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Poignée */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-white/90"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-glow">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 7L4 12l5 5M15 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
