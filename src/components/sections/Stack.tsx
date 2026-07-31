import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/profile";

export default function Stack() {
  return (
    <Section
      id="stack"
      index="03"
      eyebrow="Stack"
      title="Stack técnico"
      intro="Tecnologías agrupadas por capa, aplicadas en proyectos desplegados en producción."
    >
      <div className="space-y-px overflow-hidden rounded-xl border border-hairline bg-hairline">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 50}>
            <div className="grid gap-4 bg-canvas p-6 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:p-8">
              <h3 className="eyebrow pt-1">{group.category}</h3>
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
