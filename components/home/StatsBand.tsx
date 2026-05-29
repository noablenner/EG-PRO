import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { STATS } from "@/lib/site";

export default function StatsBand() {
  return (
    <section className="container-x">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-4xl bg-ink/5 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center justify-center bg-white px-4 py-10 text-center">
              <p className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
