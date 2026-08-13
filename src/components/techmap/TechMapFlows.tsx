import type { Lang } from "@/i18n/config";
import type { Copy } from "@/data/copy";
import { areaById, flows, planes } from "@/data/techMap/areas";
import Reveal from "@/components/ui/Reveal";

/**
 * Los recorridos muestran lo que un grafo estático no puede: que un solo
 * request atraviesa media docena de disciplinas seguidas. Cada paso lista las
 * áreas que toca, con el color de su plano.
 */
export default function TechMapFlows({ lang, copy }: { lang: Lang; copy: Copy }) {
  const t = copy.mapPage;

  return (
    <section
      id={lang === "es" ? "recorridos" : "traces"}
      className="scroll-mt-24 border-t border-hairline py-section"
    >
      <div className="container-page">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow">
              <span className="text-accent">03</span>
              <span aria-hidden="true" className="h-px w-6 bg-hairline-strong" />
              {t.flowsEyebrow}
            </p>
            <h2 className="mt-5 text-h2 font-semibold text-gradient">
              {t.flowsTitle}
            </h2>
            <p className="mt-6 text-lead text-ink-muted">{t.flowsIntro}</p>
          </header>
        </Reveal>

        <div className="mt-14 space-y-6 sm:mt-16">
          {flows.map((flow, i) => (
            <Reveal key={flow.id} delay={i * 70}>
              <article className="card-hairline rounded-xl p-6 sm:p-8">
                <h3 className="text-h3 font-semibold text-ink">
                  {flow.title[lang]}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-faint">
                  {flow.caption[lang]}
                </p>

                <ol className="mt-7 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-9">
                  {flow.steps.map((step, index) => (
                    <li key={step.label[lang]} className="bg-canvas p-3.5">
                      <span className="font-mono text-[0.65rem] text-ink-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1.5 block text-sm font-medium leading-tight text-ink">
                        {step.label[lang]}
                      </span>
                      <span className="mt-2.5 flex flex-wrap gap-1">
                        {step.areas.map((id) => {
                          const area = areaById.get(id);
                          if (!area) return null;
                          const plane = planes.find((p) => p.id === area.plane);
                          return (
                            <span
                              key={id}
                              className="rounded px-1.5 py-0.5 text-[0.6rem] leading-tight"
                              style={{
                                color: plane?.color,
                                backgroundColor: `${plane?.color}1a`,
                              }}
                            >
                              {area.label[lang]}
                            </span>
                          );
                        })}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
