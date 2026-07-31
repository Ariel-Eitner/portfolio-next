import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section
      id="experiencia"
      index="04"
      eyebrow="Experiencia"
      title="Trayectoria profesional"
    >
      <ol>
        {experience.map((job, i) => (
          <li
            key={job.company}
            className="grid md:grid-cols-[auto_1fr] md:gap-x-8"
          >
            {/* Columna de la línea de tiempo. Punto y línea fluyen con el
                contenido: nada posicionado en absoluto, así que la altura
                de cada tramo se ajusta sola al alto del item. */}
            <div
              aria-hidden="true"
              className="hidden flex-col items-center md:flex"
            >
              <span
                className={`mt-2.5 size-2.5 shrink-0 rounded-full ${
                  job.current
                    ? "bg-accent ring-4 ring-accent/15"
                    : "bg-hairline-strong"
                }`}
              />
              {i < experience.length - 1 ? (
                <span className="mt-3 w-px flex-1 bg-hairline" />
              ) : null}
            </div>

            <div className={i < experience.length - 1 ? "pb-14 md:pb-16" : ""}>
              <Reveal delay={i * 80}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="text-h3 font-semibold text-ink">
                    {job.company}
                  </h3>
                  {job.current ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide text-accent uppercase">
                      Actual
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-faint">
                  <span className="text-ink-muted">{job.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.mode}</span>
                </p>

                <ul className="mt-7 space-y-4">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-6 text-ink-muted before:absolute before:top-[0.6em] before:left-0 before:h-px before:w-3 before:bg-hairline-strong"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-hairline px-2.5 py-1 font-mono text-xs text-ink-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
