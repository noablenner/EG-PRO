"use client";

import { motion } from "framer-motion";
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

      {/* Mobile : carrousel de cartes qui défile de droite à gauche */}
      <div className="mt-12 md:hidden">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div
            className="flex w-max animate-marquee gap-4 pr-4"
            style={{ animationDuration: "38s" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="w-[80vw] max-w-[330px] shrink-0">
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
