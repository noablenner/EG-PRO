import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { VALUES } from "@/lib/site";

/** Section « Pourquoi passer par EG-PRO ? » — 7 arguments. */
export default function WhyEgPro({ muted = false }: { muted?: boolean }) {
  return (
    <section className={`py-20 md:py-28 ${muted ? "bg-brand-soft/40" : ""}`}>
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Pourquoi passer par EG-PRO ?"
          title="La valeur ajoutée, concrètement"
          intro="Un interlocuteur unique, un réseau qualifié et une vraie connaissance du marché local — au service de vos projets."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.07}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-soft">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-2xl">
                    {v.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
