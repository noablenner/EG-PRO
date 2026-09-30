"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";
const VIDEO = `${PREFIX}/videos/eg-pro.mp4`;

/** Section vidéo : carte sombre façon hero, aperçu vertical + play, lecture en plein écran. */
export default function VideoTeaser() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Mobile : on ne précharge pas la vidéo (16 Mo) tant qu'on ne clique pas sur play.
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="py-10 md:py-14">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-brand-deep text-white">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="brand-gradient absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-[110px]" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-brand-bright/25 blur-[100px]" />

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:px-14 md:py-14">
            <div>
              <SectionHeading
                light
                eyebrow="EG-PRO en vidéo"
                title={
                  <>
                    Découvrez-nous en <span className="text-gradient">une vidéo.</span>
                  </>
                }
                intro="Qui on est, comment on travaille et comment on vous met en relation avec les bons artisans."
              />
              <Reveal delay={0.15}>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="brand-gradient mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:scale-[1.03] sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Lancer la vidéo
                </button>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="justify-self-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Lire la vidéo de présentation d'EG-PRO"
                className="group relative block w-44 rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl md:backdrop-blur transition hover:-translate-y-1 sm:w-52"
              >
                <span className="relative block aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-black">
                  <video
                    src={`${VIDEO}#t=0.5`}
                    preload={isMobile ? "none" : "metadata"}
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-brand-deep/20" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-xl transition group-hover:scale-110">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                      <svg viewBox="0 0 24 24" className="relative ml-1 h-7 w-7 fill-current" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Vidéo de présentation EG-PRO"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer la vidéo"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white hover:bg-white/25"
            >
              ×
            </button>
            <video
              ref={videoRef}
              src={VIDEO}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90svh] max-w-full rounded-xl bg-black shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
