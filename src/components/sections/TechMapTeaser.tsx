import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { sectionId, type Copy } from "@/data/copy";
import { path, type Lang } from "@/i18n/config";
import { areas, planes, TOTAL_TECH } from "@/data/techMap/areas";

/**
 * Puente entre la landing y `/mapa-tecnico`. Muestra las quince áreas como
 * enlaces directos al ancla de cada una: además de invitar a explorar el mapa,
 * es enlazado interno real hacia los términos por los que la página compite.
 */
export default function TechMapTeaser({ lang, copy }: { lang: Lang; copy: Copy }) {
  const href = path("techMap", lang);

  return (
    <Section
      id={sectionId(copy, "map")}
      index="06"
      eyebrow={copy.mapTeaser.eyebrow}
      title={copy.mapTeaser.title}
      intro={copy.mapTeaser.intro}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal>
          <div>
            <ul className="space-y-3">
              {copy.mapTeaser.bullets.map((bullet, i) => (
                <li key={bullet} className="flex gap-3 text-ink-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: planes[i % planes.length]?.color }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-xs text-ink-faint">
              {areas.length} {copy.mapPage.areasNoun} · {TOTAL_TECH}{" "}
              {copy.mapPage.techNoun}
            </p>

            <a
              href={href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
            >
              {copy.mapTeaser.cta}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-3.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
            {areas.map((area) => {
              const plane = planes.find((p) => p.id === area.plane);
              return (
                <li key={area.id} className="bg-canvas">
                  <a
                    href={`${href}#${area.id}`}
                    className="group block h-full p-4 transition-colors hover:bg-raised"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: plane?.color }}
                      />
                      <span className="text-sm font-medium text-ink">
                        {area.label[lang]}
                      </span>
                    </span>
                    <span className="mt-1.5 block text-xs leading-snug text-ink-faint">
                      {area.tagline[lang]}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
