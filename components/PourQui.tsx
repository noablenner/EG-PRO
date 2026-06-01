import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { AUDIENCES } from "@/lib/site";

/** Section « Pour qui ? » — 4 cibles clairement identifiées. */
export default function PourQui({ muted = false }: { muted?: boolean }) {
  return (
    <section className={`py-20 md:py-28 ${muted ? "bg-brand-soft/40" : ""}`}>
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Pour qui ?"
          title="Chacun y trouve sa place"
          intro="Quel que soit votre profil, EG-PRO comprend vos enjeux et vous oriente vers les bons partenaires."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 0.07}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-soft">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-3xl transition-transform duration-300 group-hover:scale-110">
                  {a.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
