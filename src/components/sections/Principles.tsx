import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { principles } from "@/data/profile";

export default function Principles() {
  return (
    <Section
      id="enfoque"
      index="02"
      eyebrow="Enfoque"
      title="Áreas de especialización"
      intro="Seis áreas de trabajo, con las prácticas y tecnologías que aplico en cada una."
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <li key={principle.title} className="bg-canvas">
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
        ))}
      </ul>
    </Section>
  );
}
