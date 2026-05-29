import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez EG-PRO : besoin d'un devis, d'un conseil ou d'un contact fiable ? Téléphone, email, WhatsApp. Mulhouse, Colmar, Guebwiller et Haut-Rhin.",
};

const CONTACTS = [
  {
    label: "Appelez-moi",
    value: SITE.phone,
    href: `tel:${SITE.phoneIntl}`,
    cursor: "Appeler",
    icon: (
      <path d="M3 5.5C3 4.1 4.1 3 5.5 3H7c.6 0 1.1.4 1.3 1l.9 3.2c.1.5 0 1-.4 1.4L7.5 10c1 2.2 2.3 3.5 4.5 4.5l1.4-1.3c.4-.4.9-.5 1.4-.4l3.2.9c.6.2 1 .7 1 1.3v1.5c0 1.4-1.1 2.5-2.5 2.5C9.6 19.5 4.5 14.4 3 5.5z" />
    ),
  },
  {
    label: "Écrivez-moi",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    cursor: "Email",
    icon: (
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm1 0l8 6 8-6" />
    ),
  },
  {
    label: "WhatsApp",
    value: "Discutons en direct",
    href: WHATSAPP_URL,
    cursor: "WhatsApp",
    icon: (
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Travaillons <span className="text-gradient">ensemble</span></>}
        intro="Besoin d'un devis, d'un conseil ou d'un contact fiable ? Expliquez-moi votre besoin, je vous oriente vers le bon partenaire."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Coordonnées */}
          <div>
            <SectionHeading
              eyebrow="Coordonnées"
              title="Le plus simple ? On échange."
              intro="Je collabore chaque jour avec des artisans réactifs et de confiance. Choisissez le canal qui vous arrange."
            />
            <div className="mt-8 space-y-3">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-cursor={c.cursor}
                    className="group flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-5 transition-colors hover:border-brand/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted">{c.label}</span>
                      <span className="font-display text-lg font-semibold text-ink">{c.value}</span>
                    </span>
                    <svg className="ml-auto text-brand transition-transform group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-3xl bg-brand-soft/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Zone d'intervention</p>
                <p className="mt-2 text-ink/80">{SITE.zone}</p>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-ink/8 bg-white p-7 shadow-soft md:p-9">
              <h2 className="font-display text-2xl font-bold text-ink">Votre demande</h2>
              <p className="mt-1.5 text-sm text-muted">Je vous réponds rapidement.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Questions fréquentes"
            title="Les réponses aux questions qu'on me pose le plus"
            intro="Vous ne trouvez pas la vôtre ? Contactez-moi directement, je vous réponds avec plaisir."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
}
