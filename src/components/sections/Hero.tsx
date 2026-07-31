import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { profile, stats } from "@/data/profile";
// Ruta relativa y no "/public/...": Turbopack no resuelve ese prefijo,
// y el import estático es lo que habilita placeholder="blur".
import retrato from "../../../public/images/7.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Rejilla tenue + halo ámbar, ambos puramente decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 size-168 -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <Reveal delay={80}>
              <h1 className="text-display font-semibold text-gradient">
                {profile.heroStatement.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lead text-ink-muted">
                {profile.role} con {profile.yearsOfExperience} años de
                experiencia. Hoy lidero una plataforma edtech multi-país:
                microservicios, pagos internacionales, IA aplicada y SEO técnico.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#proyectos"
                  className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
                >
                  Ver proyectos
                </a>
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("Hablemos de un proyecto")}`}
                  className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
                >
                  Escribime
                </a>
                <a
                  href="/cv/CV-Ariel-Eitner-ES.pdf"
                  download
                  className="px-2 py-3.5 text-sm font-medium text-ink-muted underline decoration-hairline-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                >
                  Descargar CV
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="relative w-fit">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-accent/12 blur-2xl"
              />
              <Image
                src={retrato}
                alt={`Retrato de ${profile.name}`}
                width={200}
                height={200}
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 200px, 128px"
                className="relative size-32 rounded-full border border-hairline-strong object-cover lg:size-50"
              />
            </div>
          </Reveal>
        </div>

        {/* Métricas */}
        <Reveal delay={400}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-canvas px-5 py-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-semibold tracking-tight text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-ink-faint">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
