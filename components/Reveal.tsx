"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Apparition au scroll (fade + translation) avec respect de prefers-reduced-motion. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  // `anim-static-mobile` neutralise l'animation d'arrivée sur mobile (perf + confort)
  const cls = ["anim-static-mobile", className].filter(Boolean).join(" ");
  return (
    <motion.div
      className={cls}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
