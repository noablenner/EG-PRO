import Img from "@/components/Img";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep text-white">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="brand-gradient absolute -left-32 -top-32 h-72 w-72 rounded-full opacity-30 blur-3xl" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Img
              src="/images/logo/logo-mark.png"
              alt="EG-PRO"
              width={200}
              height={185}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Société d'apport d'affaires et de mise en relation dans
              l'univers des travaux, de la rénovation et de l'immobilier.
              Je connecte les bons projets aux bons partenaires.
            </p>
            <p className="mt-4 text-sm text-white/50">{SITE.zone}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-bright">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-bright">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phoneIntl}`} className="text-white/70 transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-white/70 transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60"
                >
                  Écrire sur WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <p>
            EG-PRO est un intermédiaire de mise en relation. Les entreprises
            partenaires restent seules responsables de leurs prestations.
          </p>
        </div>
      </div>
    </footer>
  );
}
