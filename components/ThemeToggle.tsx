"use client";

import { useEffect, useState } from "react";

type Theme = "blue" | "green";

const THEME_COLOR: Record<Theme, string> = {
  blue: "#081B33",
  green: "#082016",
};

/**
 * Bouton flottant pour comparer les thèmes bleu (par défaut) et vert,
 * en direct sur le site. Le choix est mémorisé (localStorage).
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("blue");

  const apply = (t: Theme) => {
    const root = document.documentElement;
    if (t === "green") root.setAttribute("data-theme", "green");
    else root.removeAttribute("data-theme");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[t]);
  };

  useEffect(() => {
    const saved = (localStorage.getItem("eg-theme") as Theme) || "blue";
    setTheme(saved);
    apply(saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "blue" ? "green" : "blue";
    setTheme(next);
    apply(next);
    localStorage.setItem("eg-theme", next);
  };

  return (
    <button
      onClick={toggle}
      data-cursor="Switch"
      aria-label="Changer la couleur du site"
      className="fixed bottom-5 left-5 z-[95] flex items-center gap-2 rounded-full border border-white/20 bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
    >
      <span
        className="h-3 w-3 rounded-full ring-2 ring-white/60"
        style={{ backgroundColor: theme === "blue" ? "#22965F" : "#1F6FB8" }}
      />
      {theme === "blue" ? "Tester le vert" : "Revenir au bleu"}
    </button>
  );
}
