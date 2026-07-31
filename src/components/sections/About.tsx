import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { education, languages, profile } from "@/data/profile";

export default function About() {
  return (
    <Section
      id="sobre-mi"
      index="01"
      eyebrow="Sobre mí"
      title="Perfil profesional"
    >
      <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lead text-ink-muted">
            <p>{profile.summary}</p>
            <p>{profile.summarySecondary}</p>
            <p>{profile.summaryTertiary}</p>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={100}>
            <div>
              <h3 className="eyebrow">Idiomas</h3>
              <ul className="mt-5 space-y-4">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="border-b border-hairline pb-4 last:border-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-ink">{lang.name}</span>
                      <span className="font-mono text-xs text-accent">
                        {lang.level}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink-faint">{lang.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <h3 className="eyebrow">Formación</h3>
              <ul className="mt-5 space-y-4">
                {education.map((item) => (
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
              <h3 className="eyebrow">Base</h3>
              <p className="mt-4 text-ink">{profile.location}</p>
              <p className="mt-1 text-sm text-ink-faint">
                {profile.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
