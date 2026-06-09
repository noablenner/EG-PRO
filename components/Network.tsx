import Reveal from "@/components/Reveal";
import { TRADES } from "@/lib/site";

/** Réseau de partenaires (20+ corps de métier) + types de projets accompagnés. */
export default function Network() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="brand-gradient pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-25 blur-[120px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
                Le réseau EG-PRO
              </span>
              <p className="mt-4 font-display text-6xl font-extrabold text-white sm:text-7xl">
                20<span className="text-brand-bright">+</span>
              </p>
              <p className="mt-2 max-w-xs text-white/65">
                corps de métier couverts par un réseau d'entreprises sélectionnées et assurées.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {TRADES.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur transition-colors hover:border-brand-bright/60 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
