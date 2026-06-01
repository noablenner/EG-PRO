import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { FOUNDER_TEXT, SITE } from "@/lib/site";

const PROOF = [
  "Plusieurs années dans l'immobilier & les copropriétés",
  "Des centaines de devis étudiés",
  "Des centaines de visites réalisées",
  "Un réseau d'entreprises important",
];

export default function Founder() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Img
                src="/images/eliott/eliott-portrait.jpeg"
                alt="Eliott Guerreiro, fondateur d'EG-PRO"
                width={760}
                height={950}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-brand px-6 py-4 text-white shadow-glow">
              <p className="font-display text-lg font-bold">Eliott Guerreiro</p>
              <p className="text-xs text-white/80">Fondateur d'EG-PRO</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-7 bg-current opacity-60" />
              Qui est derrière EG-PRO ?
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Mon vrai atout, c'est mon réseau et mon expérience.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{FOUNDER_TEXT}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {PROOF.map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/a-propos" variant="primary" cursor="Voir">
                En savoir plus sur moi
              </Button>
              <Button href={`tel:${SITE.phoneIntl}`} variant="ghost" cursor="Appeler">
                {SITE.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
