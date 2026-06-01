import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { DOSSIERS } from "@/lib/site";

/** Exemples de dossiers accompagnés (concret, sans adresses). */
export default function Dossiers({
  light = false,
}: {
  light?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 ${light ? "bg-brand-deep text-white" : ""}`}>
      <div className="container-x">
        <SectionHeading
          light={light}
          eyebrow="Dossiers accompagnés"
          title="Du concret, pas que des promesses"
          intro="Quelques exemples de projets accompagnés (anonymisés). De quoi se projeter, quel que soit votre type d'opération."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {DOSSIERS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.08}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl border p-7 ${
                  light
                    ? "border-white/10 bg-white/5 backdrop-blur"
                    : "border-ink/8 bg-white shadow-sm"
                }`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      light ? "bg-white/10 text-brand-bright" : "bg-brand-soft text-brand"
                    }`}
                  >
                    {d.tag}
                  </span>
                  <h3
                    className={`mt-4 font-display text-xl font-bold ${
                      light ? "text-white" : "text-ink"
                    }`}
                  >
                    {d.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${light ? "text-white/65" : "text-muted"}`}>
                    {d.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={`mt-8 text-center text-xs ${light ? "text-white/40" : "text-muted/80"}`}>
            EG-PRO met en relation et apporte les affaires : les entreprises partenaires réalisent les travaux.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
