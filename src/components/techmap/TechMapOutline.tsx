import type { Lang } from "@/i18n/config";
import type { Copy } from "@/data/copy";
import { areaById, areas, planes } from "@/data/techMap/areas";
import Reveal from "@/components/ui/Reveal";

/**
 * El mismo contenido del mapa, en HTML plano.
 *
 * No es un "fallback": es la versión que leen Google, los lectores de pantalla
 * y cualquiera que prefiera leer antes que explorar. Acá viven las ~200
 * palabras clave del mapa como texto real, no como nodos de un SVG.
 */
export default function TechMapOutline({ lang, copy }: { lang: Lang; copy: Copy }) {
  const t = copy.mapPage;

  return (
    <section
      id={lang === "es" ? "indice" : "index"}
      className="scroll-mt-24 border-t border-hairline py-section"
    >
      <div className="container-page">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow">
              <span className="text-accent">02</span>
              <span aria-hidden="true" className="h-px w-6 bg-hairline-strong" />
              {t.outlineEyebrow}
            </p>
            <h2 className="mt-5 text-h2 font-semibold text-gradient">
              {t.outlineTitle}
            </h2>
            <p className="mt-6 text-lead text-ink-muted">{t.outlineIntro}</p>
          </header>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:mt-16">
          {areas.map((area, i) => {
            const plane = planes.find((p) => p.id === area.plane);
            return (
              <Reveal key={area.id} delay={Math.min(i, 6) * 40}>
                <article
                  id={area.id}
                  className="scroll-mt-24 bg-canvas p-6 sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
                    <div>
                      <p
                        className="eyebrow"
                        style={{ color: plane?.color }}
                      >
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full"
                          style={{ backgroundColor: plane?.color }}
                        />
                        {plane?.label[lang]}
                      </p>
                      <h3 className="mt-4 text-h3 font-semibold text-ink">
                        {area.label[lang]}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-faint">
                        {area.tagline[lang]}
                      </p>
                    </div>

                    <div>
                      <p className="max-w-2xl leading-relaxed text-ink-muted">
                        {area.summary[lang]}
                      </p>

                      <h4 className="eyebrow mt-7">{t.conceptsTitle}</h4>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {area.concepts[lang].map((concept) => (
                          <li
                            key={concept}
                            className="rounded border border-hairline px-2.5 py-1 text-xs text-ink-muted"
                          >
                            {concept}
                          </li>
                        ))}
                      </ul>

                      <h4 className="eyebrow mt-6">{t.techTitle}</h4>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {area.tech.map((tech) => (
                          <li
                            key={tech.name}
                            className="rounded border bg-raised px-2.5 py-1 font-mono text-xs"
                            style={{
                              borderColor: `${plane?.color}44`,
                              color: plane?.color,
                            }}
                          >
                            {tech.name}
                          </li>
                        ))}
                      </ul>

                      <h4 className="eyebrow mt-6">{t.relatedTitle}</h4>
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                        {area.related.map((id) => {
                          const related = areaById.get(id);
                          if (!related) return null;
                          return (
                            <li key={id}>
                              <a
                                href={`#${id}`}
                                className="text-xs text-ink-faint underline decoration-hairline-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                              >
                                {related.label[lang]}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
