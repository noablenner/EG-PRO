"use client";

import Img from "@/components/Img";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

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

  const isOn = (href: string) => pathname === href;
  const itemActive = (item: NavItem) =>
    item.children ? item.children.some((c) => pathname === c.href) : isOn(item.href);

  // Couleurs du lien actif / inactif selon l'état (survol fond clair vs hero sombre)
  const linkText = (active: boolean) =>
    scrolled
      ? active
        ? "text-white"
        : "text-ink/70 hover:text-brand"
      : active
      ? "text-brand-dark"
      : "text-white/80 hover:text-white";

  const pillClass = scrolled ? "bg-brand" : "bg-white";

  // Liste aplatie pour le menu mobile (les sous-pages "Pour qui ?" deviennent des liens)
  const mobileLinks = (NAV as NavItem[]).flatMap((i) => (i.children ? i.children : [i]));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-white/85 py-2.5 shadow-soft backdrop-blur-xl" : "bg-transparent py-4"
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
              className={`logo-blue w-auto object-contain transition-all duration-500 ${scrolled ? "h-12" : "h-14 brightness-0 invert"}`}
            />
            <Img
              src="/images/logo/logo-mark-green.png"
              alt="EG-PRO"
              width={200}
              height={80}
              priority
              className={`logo-green w-auto object-contain transition-all duration-500 ${scrolled ? "h-12" : "h-14 brightness-0 invert"}`}
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {(NAV as NavItem[]).map((item) => {
              const active = itemActive(item);

              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <button
                      className={`relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${linkText(active)}`}
                    >
                      {item.label}
                      <svg className="transition-transform group-hover:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      {active && (
                        <motion.span layoutId="nav-pill" className={`absolute inset-0 -z-10 rounded-full ${pillClass}`} transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                      )}
                    </button>

                    {/* Panneau déroulant */}
                    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="w-64 overflow-hidden rounded-2xl border border-ink/8 bg-white p-2 shadow-soft">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                              isOn(c.href) ? "bg-brand-soft text-brand" : "text-ink/75 hover:bg-brand-soft/60 hover:text-brand"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${linkText(active)}`}
                >
                  {item.label}
                  {active && (
                    <motion.span layoutId="nav-pill" className={`absolute inset-0 -z-10 rounded-full ${pillClass}`} transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneIntl}`}
              data-cursor="Appeler"
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-glow transition-colors xl:inline-flex ${
                scrolled ? "bg-brand text-white hover:bg-brand-bright" : "bg-white text-brand-dark hover:bg-brand-soft"
              }`}
            >
              {SITE.phone}
            </a>

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
            className="fixed inset-0 z-[90] overflow-y-auto bg-brand-deep lg:hidden"
          >
            <div className="bg-grid absolute inset-0 opacity-60" />
            <nav className="relative flex min-h-full flex-col items-center justify-center gap-1.5 py-24">
              {mobileLinks.map((item, i) => {
                const active = isOn(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-display text-2xl font-semibold transition-colors ${
                        active ? "text-brand-bright" : "text-white/90 hover:text-brand-bright"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                initial={{ opacity: 0, y: 18 }}
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
