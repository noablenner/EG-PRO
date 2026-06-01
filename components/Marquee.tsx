const WORDS = [
  "Électricien",
  "Plombier",
  "Couvreur",
  "Façadier",
  "Peintre",
  "Menuisier",
  "Maçon",
  "Chauffagiste",
  "Carreleur",
  "Serrurier",
  "Charpentier",
  "Plaquiste",
  "Vitrier",
  "Étanchéiste",
  "Nettoyage par drone",
];

/** Bandeau défilant en continu (CSS pur, performant). */
export default function Marquee() {
  return (
    <div className="border-y border-ink/5 bg-brand-soft/50 py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...WORDS, ...WORDS].map((w, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 text-sm font-medium text-brand-dark/70">
              {w}
              <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
