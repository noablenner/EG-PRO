"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="relative h-full rounded-3xl bg-white p-7 shadow-sm">
      <svg className="absolute bottom-5 right-6 text-brand/15" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l3-3a4 4 0 0 0-1-8z" />
      </svg>
      <blockquote className="relative text-[15px] leading-relaxed text-ink/80">
        « {t.text} »
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
          {t.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/** Mobile : carrousel une carte à la fois, swipe + auto-défilement + points. */
function MobileCarousel() {
  const [[idx, dir], setState] = useState<[number, number]>([0, 0]);
  const n = TESTIMONIALS.length;
  const current = ((idx % n) + n) % n;

  const go = (d: number) => setState([idx + d, d]);

  useEffect(() => {
    const id = setInterval(() => setState(([i]) => [i + 1, 1]), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-10 md:hidden">
      <div className="relative overflow-hidden px-1">
        <AnimatePresence mode="popLayout" custom={dir} initial={false}>
          <motion.div
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -80 : 80 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <Card t={TESTIMONIALS[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Points */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Avis ${i + 1}`}
            onClick={() => setState([i, i > current ? 1 : -1])}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-brand" : "w-2 bg-brand/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-soft/40 py-20 md:py-28">
      <SectionHeading
        center
        eyebrow="Ce que disent mes clients"
        title="La confiance, ça se construit."
        intro="Investisseurs, gérants de SCI, agences immobilières et chefs d'entreprise témoignent de nos collaborations."
      />

      {/* Desktop : grille classique */}
      <div className="container-x mt-14 hidden md:block">
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile : carrousel swipe */}
      <div className="container-x">
        <MobileCarousel />
      </div>
    </section>
  );
}
