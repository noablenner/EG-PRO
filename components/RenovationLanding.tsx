import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import RenovationLinks from "@/components/RenovationLinks";
import { HOW_IT_WORKS, LEGAL, MULHOUSE_AREA, SITE, STATS } from "@/lib/site";
import { MULHOUSE_QUARTIERS, type RenovationPage } from "@/lib/renovation";
import { pageUrl } from "@/lib/seo";

const Check = ({ className = "text-brand" }: { className?: string }) => (
  <svg className={`mt-0.5 shrink-0 ${className}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

/** Gabarit des pages locales « Rénovation … à Mulhouse ». */
export default function RenovationLanding({ page }: { page: RenovationPage }) {
  const url = pageUrl(page.path);
  const steps = page.steps ?? HOW_IT_WORKS;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: pageUrl("/") },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.breadcrumb,
      serviceType: page.serviceType,
      description: page.metaDescription,
      url,
      provider: { "@id": `${SITE.url}/#entreprise` },
      areaServed: [
        ...MULHOUSE_AREA.map((name) => ({ "@type": "City", name })),
        { "@type": "AdministrativeArea", name: "Haut-Rhin" },
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Mise en relation gratuite et sans engagement pour le client",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {page.h1[0]}
            <span className="text-gradient">{page.h1[1]}</span>
            {page.h1[2]}
          </>
        }
        intro={page.heroIntro}
      />

      {/* Fil d'Ariane + introduction */}
      <section className="container-x py-20 md:py-28">
        <nav aria-label="Fil d'Ariane" className="mb-10 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">Accueil</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="font-medium text-ink/80">{page.breadcrumb}</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-[1.1] text-ink sm:text-4xl">
                {page.introTitle}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {page.intro.map((p) => (
                <Reveal key={p}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <aside className="rounded-4xl border border-ink/8 bg-white p-7 shadow-soft md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">En bref</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Mise en relation gratuite et sans engagement",
                  `${STATS[2].value}+ entreprises partenaires`,
                  `${STATS[3].value}+ corps de métier`,
                  "Deux à trois devis comparatifs",
                  "Vous choisissez librement l'entreprise",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <Button href="/contact" variant="primary" cursor="Go" className="justify-center">
                  Parler de mon projet
                </Button>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  data-cursor="Appeler"
                  className="text-center text-sm font-semibold text-brand-dark transition-colors hover:text-brand"
                >
                  ou appelez le {SITE.phone}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Profils */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Votre situation" title={page.profilesTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.profiles.map((p, i) => {
              const inner = (
                <>
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  {p.href && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Voir
                      <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  )}
                </>
              );
              const cls = "group block h-full rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-soft";
              return (
                <Reveal key={p.title} delay={(i % 4) * 0.07}>
                  {p.href ? (
                    <Link href={p.href} className={cls} data-cursor="Voir">{inner}</Link>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travaux concernés */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading eyebrow="Travaux" title={page.worksTitle} intro={page.worksIntro} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.works.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-bold text-brand">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contexte local */}
      <section className="bg-brand-deep py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading light eyebrow="Mulhouse & agglomération" title={page.localTitle} />
            <div className="mt-6 space-y-4 leading-relaxed text-white/75">
              {page.local.map((p) => (
                <Reveal key={p}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:backdrop-blur">
                <h3 className="font-display text-lg font-bold text-brand-bright">Quartiers de Mulhouse</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {MULHOUSE_QUARTIERS.join(" · ")}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 p-7">
                <h3 className="font-display text-lg font-bold text-white/90">Communes de l'agglomération</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {MULHOUSE_AREA.filter((c) => c !== "Mulhouse").join(" · ")}, et tout le Haut-Rhin : Colmar, Guebwiller, Saint-Louis…
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Déroulé */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading center eyebrow="Comment ça fonctionne ?" title="Simple, en 4 étapes" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Check-list + dossiers */}
      <section className="bg-brand-soft/40 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Conseils" title={page.checklistTitle} />
            <ul className="mt-8 space-y-3">
              {page.checklist.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <li className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-ink/80 shadow-sm">
                    <Check />
                    {c}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Dossiers accompagnés" title="Des exemples concrets" />
            <div className="mt-8 space-y-4">
              {page.dossiers.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.06}>
                  <article className="rounded-3xl border border-ink/8 bg-white p-6 shadow-sm">
                    <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                      {d.tag}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink">{d.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.desc}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal>
                <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
                  Voir les réalisations avant / après
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Questions fréquentes" title={`${page.breadcrumb} : vos questions`} />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={page.faq} />
          </div>
        </div>
      </section>

      {/* Maillage vers les autres pages rénovation */}
      <RenovationLinks
        exclude={page.path}
        className="bg-brand-soft/40"
        eyebrow="Voir aussi"
        title="Nos autres pages rénovation à Mulhouse"
        intro="Chaque projet a ses spécificités : retrouvez le détail selon le type de bien."
      />

      <section className="container-x pt-16">
        <Reveal>
          <p className="mx-auto max-w-3xl rounded-2xl bg-brand-soft/60 px-6 py-4 text-center text-sm text-brand-dark">
            {LEGAL}
          </p>
        </Reveal>
      </section>

      <CTA title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}
