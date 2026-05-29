"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-soft/40 py-20 md:py-28">
      <SectionHeading
        center
        eyebrow="Ce que disent mes clients"
        title="La confiance, ça se construit."
        intro="Investisseurs, gérants de SCI, agences immobilières et chefs d'entreprise témoignent de nos collaborations."
      />

      <div className="container-x mt-14">
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl bg-white p-7 shadow-sm"
            >
              <svg className="absolute right-6 top-6 text-brand/15" width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l3-3h0a4 4 0 0 0-1-8zm9 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l3-3a4 4 0 0 0-1-8z" />
              </svg>
              <blockquote className="relative text-[15px] leading-relaxed text-ink/80">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
