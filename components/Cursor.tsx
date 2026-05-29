"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Curseur personnalisé animé :
 *  - un point central qui suit la souris instantanément
 *  - un anneau qui suit en douceur (ressort)
 *  - grossit et affiche un label au survol des éléments interactifs
 * Ne s'affiche que sur les appareils avec souris (pointer: fine).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string>("");
  const [clicked, setClicked] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const interactive = t.closest(
        'a, button, [data-cursor], input, textarea, select, [role="button"]'
      ) as HTMLElement | null;
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute("data-cursor") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Anneau */}
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-brand/70 backdrop-blur-[1px]"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 64 : 34,
          height: hovering ? 64 : 34,
          marginLeft: hovering ? -32 : -17,
          marginTop: hovering ? -32 : -17,
          backgroundColor: hovering
            ? "rgb(var(--brand) / 0.10)"
            : "rgb(var(--brand) / 0)",
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide text-brand"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Point central */}
      <motion.div
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-brand"
        style={{ x, y }}
        animate={{ opacity: hovering ? 0 : 1, scale: clicked ? 1.8 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
