import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { AUDIENCE_DETAIL } from "@/lib/site";

/** Section détaillée « À qui s'adresse EG-PRO ? » — 4 profils avec leurs besoins. */
export default function Audiences({ muted = false }: { muted?: boolean }) {
  return (
    <section className={`py-20 md:py-28 ${muted ? "bg-brand-soft/40" : ""}`}>
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="À qui s'adresse EG-PRO ?"
          title="Chacun y trouve sa place"
          intro="Investisseurs, professionnels du bâtiment, syndics ou entreprises : EG-PRO comprend vos enjeux et vous oriente vers les bons partenaires."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {AUDIENCE_DETAIL.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-soft md:p-10">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-3xl">
                      {a.icon}
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      {a.title}
                    </h3>
                  </div>

                  {a.intro && (
                    <p className="mt-5 text-sm leading-relaxed text-muted">{a.intro}</p>
                  )}

                  <ul className="mt-6 grid gap-2.5">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink/80">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  {a.href && (
                    <Link
                      href={a.href}
                      data-cursor="Voir"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-bright"
                    >
                      En savoir plus
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
