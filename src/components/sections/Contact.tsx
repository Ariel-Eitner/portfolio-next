import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const MAIL_SUBJECT = encodeURIComponent("Hablemos de un proyecto");

type Channel = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=${MAIL_SUBJECT}`,
  },
  {
    label: "LinkedIn",
    value: "in/ariel-eitner",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Ariel-Eitner",
    href: profile.github,
    external: true,
  },
  {
    label: "Teléfono",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 size-160 -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]"
      />

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">06</span>
            <span aria-hidden="true" className="h-px w-6 bg-hairline-strong" />
            Contacto
          </p>
          <h2 className="mt-5 max-w-3xl text-h2 font-semibold text-gradient">
            Disponible para proyectos remotos
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-ink-muted">
            Trabajo en remoto desde {profile.location}. Abierto a posiciones
            full-time y a contratos por proyecto.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}?subject=${MAIL_SUBJECT}`}
              className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <a
              href="/cv/CV-Ariel-Eitner-ES.pdf"
              download
              className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
            >
              Descargar CV (ES)
            </a>
            <a
              href="/cv/CV-Ariel-Eitner-EN.pdf"
              download
              className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
            >
              Download CV (EN)
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <li key={channel.label} className="bg-canvas">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block p-6 transition-colors hover:bg-raised"
                >
                  <span className="eyebrow">{channel.label}</span>
                  <span className="mt-3 block truncate text-ink transition-colors group-hover:text-accent">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
