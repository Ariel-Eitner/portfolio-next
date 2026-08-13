import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/profile";
import { sectionId, type Copy } from "@/data/copy";
import type { Lang } from "@/i18n/config";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-hairline px-2.5 py-1 font-mono text-xs text-ink-faint"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  project,
  copy,
  featured = false,
}: {
  project: Project;
  copy: Copy;
  featured?: boolean;
}) {
  const text = copy.projects.items[project.id];

  const heading = (
    <span className="inline-flex items-center gap-2">
      {text.title}
      {project.href ? <ArrowIcon /> : null}
    </span>
  );

  return (
    <article
      className={`group card-hairline flex h-full flex-col rounded-xl p-7 transition-colors hover:border-hairline-strong lg:p-8 ${
        featured ? "lg:p-10" : ""
      }`}
    >
      {text.metric ? (
        <p className="eyebrow mb-5 text-accent">{text.metric}</p>
      ) : null}

      <h3 className={`font-semibold text-ink ${featured ? "text-h2" : "text-h3"}`}>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:content-['']"
          >
            {heading}
          </a>
        ) : (
          heading
        )}
      </h3>

      <p className="mt-3 text-lead text-ink-muted">{text.blurb}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-faint">
        {text.description}
      </p>

      <div className="mt-auto">
        <StackList stack={project.stack} />
      </div>
    </article>
  );
}

export default function Projects({ copy }: { lang: Lang; copy: Copy }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id={sectionId(copy, "projects")}
      index="05"
      eyebrow={copy.projects.eyebrow}
      title={copy.projects.title}
      intro={copy.projects.intro}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 80} className="relative h-full">
            <ProjectCard project={project} copy={copy} featured />
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 60} className="relative h-full">
            <ProjectCard project={project} copy={copy} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
