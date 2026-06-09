import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE, WHATSAPP_URL } from "@/lib/site";

/** Section formulaire de contact en bas de l'accueil. */
export default function HomeContact() {
  return (
    <section className="bg-brand-soft/40 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            intro="Besoin d'un devis, d'un conseil ou d'un contact fiable ? Expliquez-moi votre besoin, je vous oriente vers le bon partenaire."
          />
          <div className="mt-8 space-y-3">
            <Reveal>
              <a href={`tel:${SITE.phoneIntl}`} data-cursor="Appeler" className="group flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-5 transition-colors hover:border-brand/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.5C3 4.1 4.1 3 5.5 3H7c.6 0 1.1.4 1.3 1l.9 3.2c.1.5 0 1-.4 1.4L7.5 10c1 2.2 2.3 3.5 4.5 4.5l1.4-1.3c.4-.4.9-.5 1.4-.4l3.2.9c.6.2 1 .7 1 1.3v1.5c0 1.4-1.1 2.5-2.5 2.5C9.6 19.5 4.5 14.4 3 5.5z" fill="currentColor" /></svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">Appelez-moi</span>
                  <span className="font-display text-lg font-semibold text-ink">{SITE.phone}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a href={`mailto:${SITE.email}`} data-cursor="Email" className="group flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-5 transition-colors hover:border-brand/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm1 0l8 6 8-6" /></svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">Écrivez-moi</span>
                  <span className="font-display text-lg font-semibold text-ink">{SITE.email}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor="WhatsApp" className="group flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-5 transition-colors hover:border-brand/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2z" /></svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">WhatsApp</span>
                  <span className="font-display text-lg font-semibold text-ink">Discutons en direct</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-4xl border border-ink/8 bg-white p-7 shadow-soft md:p-9">
            <h3 className="font-display text-2xl font-bold text-ink">Votre demande</h3>
            <p className="mt-1.5 text-sm text-muted">Je vous réponds rapidement.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
