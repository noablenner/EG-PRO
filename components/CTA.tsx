import Button from "./Button";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

/** Bandeau d'appel à l'action réutilisé en bas des pages. */
export default function CTA({
  title = "Un projet, une question, un besoin de contact fiable ?",
  text = "Expliquez-moi votre besoin. Je vous oriente vers le bon partenaire, rapidement et sans engagement.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="brand-gradient relative overflow-hidden rounded-4xl px-6 py-16 text-center shadow-glow md:px-16 md:py-20">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <Reveal className="anim-static-mobile">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="anim-static-mobile">
            <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              {text}
            </p>
          </Reveal>
          <Reveal delay={0.16} className="anim-static-mobile">
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="light" cursor="Go">
                Démarrer un échange
              </Button>
              <Button href={`tel:${SITE.phoneIntl}`} variant="ghost" className="border-white/40 text-white hover:bg-white/10" cursor="Appeler">
                {SITE.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
