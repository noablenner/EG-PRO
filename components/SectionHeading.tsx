import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              light ? "text-brand-bright" : "text-brand"
            }`}
          >
            <span className="h-px w-7 bg-current opacity-60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 font-display text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              light ? "text-white/70" : "text-muted"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
