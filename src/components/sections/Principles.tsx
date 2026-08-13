import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { principleIds } from "@/data/profile";
import { sectionId, type Copy } from "@/data/copy";
import type { Lang } from "@/i18n/config";

export default function Principles({ copy }: { lang: Lang; copy: Copy }) {
  return (
    <Section
      id={sectionId(copy, "approach")}
      index="02"
      eyebrow={copy.principles.eyebrow}
      title={copy.principles.title}
      intro={copy.principles.intro}
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {principleIds.map((id, i) => {
          const principle = copy.principles.items[id];
          return (
            <li key={id} className="bg-canvas">
              <Reveal delay={i * 60} className="h-full">
                <div className="group h-full p-7 transition-colors hover:bg-raised lg:p-8">
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-h3 font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
