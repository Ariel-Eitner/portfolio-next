import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import TechMapExplorer from "@/components/techmap/TechMapExplorer";
import TechMapOutline from "@/components/techmap/TechMapOutline";
import TechMapFlows from "@/components/techmap/TechMapFlows";

import { getCopy } from "@/data/copy";
import { profile } from "@/data/profile";
import { techMapJsonLd } from "@/lib/seo";
import { otherLang, path, type Lang } from "@/i18n/config";

export default function TechMapPage({ lang }: { lang: Lang }) {
  const copy = getCopy(lang);
  const t = copy.mapPage;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(copy.ui.mailSubject)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techMapJsonLd(lang, copy)) }}
      />

      <Nav
        lang={lang}
        siteName={copy.meta.siteName}
        nav={copy.nav}
        ui={copy.ui}
        altHref={path("techMap", otherLang(lang))}
      />

      <main id="contenido">
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute -top-40 left-1/2 size-168 -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]" />
          </div>

          <div className="container-page relative">
            {/* Migas de pan visibles: el mismo camino que declara el JSON-LD. */}
            <nav aria-label={t.breadcrumb}>
              <ol className="eyebrow flex flex-wrap items-center gap-2">
                <li>
                  <a
                    href={path("home", lang)}
                    className="transition-colors hover:text-ink"
                  >
                    {profile.name}
                  </a>
                </li>
                <li aria-hidden="true" className="text-hairline-strong">
                  /
                </li>
                <li className="text-accent">{t.breadcrumb}</li>
              </ol>
            </nav>

            <Reveal>
              <h1 className="mt-6 max-w-4xl text-h2 font-semibold text-gradient sm:text-display">
                {t.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lead text-ink-muted">{t.lead}</p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-ink-faint">
                {t.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id={lang === "es" ? "mapa" : "map"}
          className="scroll-mt-24 border-t border-hairline py-section"
        >
          <div className="container-page">
            <Reveal>
              <header className="max-w-3xl">
                <p className="eyebrow">
                  <span className="text-accent">01</span>
                  <span aria-hidden="true" className="h-px w-6 bg-hairline-strong" />
                  {t.kicker}
                </p>
                <h2 className="mt-5 text-h2 font-semibold text-gradient">
                  {t.explorerTitle}
                </h2>
              </header>
            </Reveal>

            <div className="mt-12 sm:mt-14">
              <TechMapExplorer lang={lang} t={t} />
            </div>
          </div>
        </section>

        <TechMapOutline lang={lang} copy={copy} />
        <TechMapFlows lang={lang} copy={copy} />

        <section className="relative overflow-hidden border-t border-hairline py-section">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/2 size-160 -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]"
          />
          <div className="container-page relative">
            <Reveal>
              <h2 className="max-w-3xl text-h2 font-semibold text-gradient">
                {t.ctaTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lead text-ink-muted">{t.ctaBody}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={mailto}
                  className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
                >
                  {t.ctaButton}
                </a>
                <a
                  href={path("home", lang)}
                  className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
                >
                  {copy.ui.backToHome}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer lang={lang} copy={copy} />
    </>
  );
}
