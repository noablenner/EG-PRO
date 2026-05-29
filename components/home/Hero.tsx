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
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-deep pt-28 text-white"
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

      <div className="container-x relative flex flex-1 flex-col gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
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

        {/* Photo Eliott (détourée, "pop" sur le fond) */}
        <motion.div
          style={{ y: yPhoto }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-auto flex w-full max-w-md items-end justify-center lg:mt-0 lg:max-w-none"
        >
          {/* Halo derrière Eliott */}
          <div className="pointer-events-none absolute bottom-0 flex h-[90%] w-full items-center justify-center">
            <div className="brand-gradient h-[78%] w-[78%] rounded-full opacity-40 blur-[90px]" />
          </div>
          <div className="absolute bottom-6 h-[62%] w-[78%] rounded-[50%] bg-brand-bright/20 blur-2xl" />

          <motion.div style={{ scale: scalePhoto }} className="relative z-10">
            <Img
              src="/images/eliott/eliott-cutout.png"
              alt="Eliott Guerreiro, fondateur d'EG-PRO"
              width={1198}
              height={1372}
              priority
              className="mx-auto h-auto w-full max-w-[440px] object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Carte flottante : chiffre clé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -right-3 top-[26%] z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:-right-3 sm:top-12 sm:px-5 sm:py-3"
          >
            <p className="font-display text-xl font-bold text-brand-bright sm:text-2xl">63+</p>
            <p className="text-[11px] text-white/70 sm:text-xs">partenaires artisans</p>
          </motion.div>

          {/* Chip nom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute right-0 bottom-8 z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:-right-1 sm:bottom-10 sm:px-5 sm:py-3"
          >
            <p className="font-display text-sm font-semibold text-white sm:text-base">Eliott Guerreiro</p>
            <p className="text-[11px] text-white/70 sm:text-xs">Fondateur · EG-PRO</p>
          </motion.div>

          {/* Petit badge note (remplit l'espace sur mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:-left-2 sm:px-5 sm:py-3"
          >
            <span className="text-sm text-brand-bright">★</span>
            <span className="text-[11px] font-semibold text-white sm:text-xs">Local · réactif</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
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
