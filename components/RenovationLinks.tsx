import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { RENOVATION_PAGES } from "@/lib/site";

/** Maillage interne vers les pages « Rénovation à Mulhouse ». */
export default function RenovationLinks({
  exclude,
  eyebrow = "Rénovation à Mulhouse",
  title = "Votre projet de rénovation à Mulhouse",
  intro = "Appartement, immeuble, maison ou local : je vous mets en relation avec des artisans et entreprises de rénovation fiables à Mulhouse et dans le Haut-Rhin.",
  className = "",
}: {
  exclude?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
}) {
  const pages = RENOVATION_PAGES.filter((p) => p.href !== exclude);
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className={`mt-12 grid gap-5 ${pages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {pages.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.08}>
              <Link
                href={p.href}
                data-cursor="Voir"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-soft"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <span className="relative text-xs font-semibold uppercase tracking-wide text-brand">
                  {p.short}
                </span>
                <h3 className="relative mt-3 font-display text-xl font-bold text-ink">{p.label}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  En savoir plus
                  <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
