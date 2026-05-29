"use client";

import Img from "@/components/Img";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

const headline = ["Le bon partenaire,", "le bon artisan,", "au bon moment."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-deep pt-28 text-white"
    >
      {/* Fonds animés */}
      <div className="bg-grid absolute inset-0 opacity-50" />
      <motion.div
        className="brand-gradient absolute -right-40 top-0 h-[70vh] w-[70vh] rounded-full opacity-40 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 h-[55vh] w-[55vh] rounded-full bg-brand-bright/30 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Texte */}
        <motion.div style={{ y: yText, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-bright" />
            </span>
            Disponible pour échanger · {SITE.zone.split(" · ")[0]} & Haut-Rhin
          </motion.span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.04] sm:text-6xl lg:text-[4.2rem]">
            {headline.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + li * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {li === 2 ? (
                    <span className="text-gradient">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/75"
          >
            EG-PRO connecte particuliers, investisseurs, SCI et syndics à des
            artisans fiables et réactifs. Je simplifie vos travaux, du premier
            contact jusqu'au suivi du projet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" cursor="Go">
              Parler de mon projet
            </Button>
            <Button href="/realisations" variant="ghost" className="border-white/30 text-white hover:bg-white/10" cursor="Voir">
              Voir les réalisations
            </Button>
          </motion.div>
        </motion.div>

        {/* Photo Eliott */}
        <motion.div
          style={{ y: yPhoto }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <motion.div style={{ scale: scalePhoto }} className="absolute inset-0">
              <Img
                src="/images/eliott/eliott-portrait.jpeg"
                alt="Eliott Guerreiro, fondateur d'EG-PRO"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-display text-xl font-semibold">Eliott Guerreiro</p>
                <p className="text-sm text-white/70">Fondateur · Partenaire de travaux</p>
              </div>
            </div>
          </div>

          {/* Carte flottante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -left-4 top-8 hidden rounded-2xl bg-white/95 px-5 py-4 text-ink shadow-soft backdrop-blur sm:block"
          >
            <p className="font-display text-2xl font-bold text-brand">63+</p>
            <p className="text-xs text-muted">partenaires artisans</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
