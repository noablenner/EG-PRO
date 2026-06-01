"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

const ICONS: Record<string, React.ReactNode> = {
  renovation: (
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
  ),
  pros: (
    <path d="M3 21V7l8-4 8 4v14M9 21v-5h6v5M7 11h.01M12 11h.01M17 11h.01" />
  ),
  "drone-nettoyage": (
    <path d="M4 8h4M16 8h4M6 8v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M12 12v4m-3 4h6M12 16l-2 4M12 16l2 4" />
  ),
  "drone-inspection": (
    <path d="M12 5c-5 0-9 4.5-9 7s4 7 9 7 9-4.5 9-7-4-7-9-7zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  ),
};

export default function ServicesPreview() {
  return (
    <section id="services" className="container-x py-20 md:py-28">
      <SectionHeading
        eyebrow="Ce que je peux vous apporter"
        title={<>Quatre façons de <span className="text-gradient">vous faire gagner du temps</span></>}
        intro="Je m'appuie sur un réseau d'artisans et d'entreprises spécialisées pour répondre à tous types de besoins, du particulier au gestionnaire immobilier."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="anim-static-mobile group relative flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-soft"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[s.id]}
                </svg>
              </div>
              <span className="mt-5 block font-display text-xs font-bold text-brand/50">{s.n}</span>
              <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <svg className="mt-0.5 shrink-0 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/services" data-cursor="Voir" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-bright">
          Voir tous les services & types de projets
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </section>
  );
}
