"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";
const VIDEO = `${PREFIX}/videos/eg-pro.mp4`;

/** Bandeau discret : miniature + bouton play, la vidéo (verticale) s'ouvre en plein écran. */
export default function VideoTeaser() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="bg-white py-6 md:py-8">
      <div className="container-x">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Lire la vidéo de présentation d'EG-PRO"
          className="group mx-auto flex w-full max-w-xl items-center gap-4 rounded-2xl border border-ink/10 bg-brand-soft/50 p-3 text-left transition hover:border-brand/40 hover:bg-brand-soft"
        >
          <span className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-brand-deep">
            <video
              src={`${VIDEO}#t=0.5`}
              preload="metadata"
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-brand-deep/40">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-lg transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </span>
          <span>
            <span className="block font-display text-base font-semibold text-ink sm:text-lg">
              EG-PRO en vidéo
            </span>
            <span className="block text-sm text-muted">Découvrez-nous en quelques secondes</span>
          </span>
        </button>
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
