"use client";

import Img from "@/components/Img";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/85 py-2.5 shadow-soft backdrop-blur-xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" data-cursor="Accueil" className="relative z-10 flex items-center gap-2">
            <Img
              src="/images/logo/logo-mark.png"
              alt="EG-PRO"
              width={200}
              height={80}
              priority
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-12" : "h-14 brightness-0 invert"
              }`}
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? active
                        ? "text-brand"
                        : "text-ink/70 hover:text-brand"
                      : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        scrolled ? "bg-brand-soft" : "bg-white/15"
                      }`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneIntl}`}
              data-cursor="Appeler"
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-glow transition-colors sm:inline-flex ${
                scrolled
                  ? "bg-brand text-white hover:bg-brand-bright"
                  : "bg-white text-brand-dark hover:bg-brand-soft"
              }`}
            >
              {SITE.phone}
            </a>

            {/* Burger */}
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/10 bg-white/70 lg:hidden"
            >
              <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-brand-deep lg:hidden"
          >
            <div className="absolute inset-0 bg-brand-deep" />
            <div className="bg-grid absolute inset-0 opacity-60" />
            <nav className="relative flex h-full flex-col items-center justify-center gap-2">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-3xl font-semibold text-white/90 transition-colors hover:text-brand-bright"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={`tel:${SITE.phoneIntl}`}
                className="mt-6 rounded-full bg-brand px-7 py-3.5 font-semibold text-white"
              >
                {SITE.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
