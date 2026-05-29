"use client";

import { motion } from "framer-motion";

/** En-tête de page intérieure, sombre et animé, cohérent avec la marque. */
export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-deep pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <motion.div
        className="brand-gradient absolute -right-32 -top-20 h-96 w-96 rounded-full opacity-30 blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-x relative">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright"
        >
          <span className="h-px w-7 bg-current opacity-60" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
