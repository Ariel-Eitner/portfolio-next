import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { sectionId, type Copy } from "@/data/copy";
import type { Lang } from "@/i18n/config";

export default function About({ copy }: { lang: Lang; copy: Copy }) {
  return (
    <Section
      id={sectionId(copy, "about")}
      index="01"
      eyebrow={copy.about.eyebrow}
      title={copy.about.title}
    >
      <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lead text-ink-muted">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={100}>
            <div>
              <h3 className="eyebrow">{copy.about.languagesTitle}</h3>
              <ul className="mt-5 space-y-4">
                {copy.about.languages.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-hairline pb-4 last:border-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-ink">{item.name}</span>
                      <span className="font-mono text-xs text-accent">
                        {item.level}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink-faint">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <h3 className="eyebrow">{copy.about.educationTitle}</h3>
              <ul className="mt-5 space-y-4">
                {copy.about.education.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-hairline pb-4 last:border-0"
                  >
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-faint">{item.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="card-hairline rounded-xl p-6">
              <h3 className="eyebrow">{copy.about.baseTitle}</h3>
              <p className="mt-4 text-ink">{copy.about.location}</p>
              <p className="mt-1 text-sm text-ink-faint">
                {copy.about.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
