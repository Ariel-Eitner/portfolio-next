import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/profile";
import { sectionId, type Copy } from "@/data/copy";
import type { Lang } from "@/i18n/config";

export default function Stack({ copy }: { lang: Lang; copy: Copy }) {
  return (
    <Section
      id={sectionId(copy, "stack")}
      index="03"
      eyebrow={copy.stack.eyebrow}
      title={copy.stack.title}
      intro={copy.stack.intro}
    >
      <div className="space-y-px overflow-hidden rounded-xl border border-hairline bg-hairline">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 50}>
            <div className="grid gap-4 bg-canvas p-6 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:p-8">
              <h3 className="eyebrow pt-1">{copy.stack.categories[group.id]}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-hairline bg-raised px-2.5 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-hairline-strong hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
