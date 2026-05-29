"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "@/lib/site";

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/8 overflow-hidden rounded-3xl border border-ink/8 bg-white">
      {FAQ.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              data-cursor={active ? "Fermer" : "Ouvrir"}
            >
              <span className="flex items-start gap-4">
                <span className="font-display text-sm font-bold text-brand/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold text-ink sm:text-lg">
                  {item.q}
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 transition-all ${
                  active ? "rotate-45 bg-brand text-white" : "text-brand"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 pl-16 text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
