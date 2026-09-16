import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { getCopy } from "@/data/copy";
import { profile } from "@/data/profile";
import { researchCategories, researchUi, type ResearchArticle } from "@/data/research";
import { researchJsonLd } from "@/lib/seo";
import { otherLang, path, type Lang } from "@/i18n/config";

export default function ResearchArticlePage({
  lang,
  article,
}: {
  lang: Lang;
  article: ResearchArticle;
}) {
  const copy = getCopy(lang);
  const ui = researchUi[lang];
  const category = researchCategories[article.category];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchJsonLd(lang, copy, article.route)),
        }}
      />
      <Nav
        lang={lang}
        siteName={copy.meta.siteName}
        nav={copy.nav}
        ui={copy.ui}
        altHref={path(article.route, otherLang(lang))}
      />
      <main id="contenido">
        <article>
          <header className="relative overflow-hidden border-b border-hairline pt-28 pb-16 sm:pt-32 sm:pb-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0" />
            </div>
            <div className="container-page relative">
              <nav aria-label={ui.eyebrow} className="eyebrow">
                <a href={path("research", lang)} className="transition-colors hover:text-ink">
                  {ui.eyebrow}
                </a>
                <span aria-hidden="true" className="text-hairline-strong">/</span>
                <span className="text-accent">{category.label[lang]}</span>
              </nav>
              <p className="eyebrow mt-8 text-accent">{ui.publication}</p>
              <h1 className="mt-5 max-w-5xl text-h2 font-semibold text-gradient sm:text-display">
                {article.title[lang]}
              </h1>
              <p className="mt-7 max-w-3xl text-lead text-ink-muted">{article.excerpt[lang]}</p>
              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink-faint">
                <span>{profile.name}</span>
                <span>{article.publishedAt}</span>
                <span>{article.readingMinutes} {ui.readingTime}</span>
              </div>
            </div>
          </header>
          <div className="container-page grid gap-12 py-section lg:grid-cols-[13rem_minmax(0,44rem)] lg:justify-center">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <p className="eyebrow">{ui.tableOfContents}</p>
              <ol className="mt-5 space-y-3">
                {article.sections.map((section, index) => (
                  <li key={section.title[lang]}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-sm text-ink-faint transition-colors hover:text-ink"
                    >
                      {section.title[lang]}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
            <div>
              <p className="text-lead leading-relaxed text-ink-muted">{article.summary[lang]}</p>
              <section className="mt-10 border-y border-hairline py-7">
                <p className="eyebrow text-accent">{ui.readerGuide}</p>
                <dl className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {ui.problem}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {article.readerGuide[lang].problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {ui.solution}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {article.readerGuide[lang].solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {ui.contents}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {article.readerGuide[lang].contents}
                    </dd>
                  </div>
                </dl>
              </section>
              {article.sections.map((section, index) => (
                <section
                  key={section.title[lang]}
                  id={`section-${index + 1}`}
                  className="mt-14 scroll-mt-24 first:mt-12"
                >
                  <p className="eyebrow">
                    <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                    {section.title[lang]}
                  </p>
                  <h2 className="sr-only">{section.title[lang]}</h2>
                  <div className="mt-5 space-y-5 leading-relaxed text-ink-muted">
                    {section.paragraphs[lang].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
              <div className="mt-16 flex flex-col items-start border-y border-hairline py-8">
                <p className="eyebrow">{ui.relatedProject}</p>
                <a
                  href="https://observatorio-de-leyes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-h3 font-semibold text-ink transition-colors hover:text-accent"
                >
                  Observatorio de Leyes Argentinas
                </a>
                <p className="mt-4 text-sm leading-relaxed text-ink-faint">{ui.disclosure}</p>
                <a
                  href={article.pdfHref}
                  download
                  className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas"
                >
                  {ui.downloadPdf}
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer lang={lang} copy={copy} />
    </>
  );
}