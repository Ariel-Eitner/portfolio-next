import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { profile, statIds, statValues } from "@/data/profile";
import { sectionId, type Copy } from "@/data/copy";
import { path, type Lang } from "@/i18n/config";
// Ruta relativa y no "/public/...": Turbopack no resuelve ese prefijo,
// y el import estático es lo que habilita placeholder="blur".
import retrato from "../../../public/images/7.png";

export default function Hero({ lang, copy }: { lang: Lang; copy: Copy }) {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(copy.ui.mailSubject)}`;

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
        <div className="flex items-center justify-between gap-6">
          <Reveal>
            <p className="eyebrow">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {copy.hero.availability}
            </p>
          </Reveal>

          {/* En móvil el retrato acompaña al nombre en la parte alta; en
              escritorio vuelve a la columna derecha, más grande. */}
          <Reveal className="shrink-0 lg:hidden">
            <Image
              src={retrato}
              alt={copy.hero.portraitAlt}
              width={200}
              height={200}
              priority
              placeholder="blur"
              sizes="72px"
              className="size-18 rounded-full border border-hairline-strong object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <Reveal delay={80}>
              {/* El nombre es el H1: es la consulta por la que más importa
                  aparecer y, en pantallas chicas, lo primero que hay que leer. */}
              <h1 className="font-semibold">
                <span className="block text-display text-gradient">
                  {profile.name}
                </span>
                <span className="mt-3 block text-h3 font-medium text-accent">
                  {copy.hero.role}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 font-mono text-xs tracking-wide text-ink-faint sm:text-sm">
                {copy.hero.tagline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lead font-medium text-ink">
                {copy.hero.statement}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">
                {copy.hero.lead}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`#${sectionId(copy, "projects")}`}
                  className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
                >
                  {copy.hero.ctaProjects}
                </a>
                <a
                  href={mailto}
                  className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
                >
                  {copy.hero.ctaMail}
                </a>
                <a
                  href={path("techMap", lang)}
                  className="rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised"
                >
                  {copy.mapTeaser.eyebrow}
                </a>
                <a
                  href={profile.cv[lang]}
                  download
                  className="px-2 py-3.5 text-sm font-medium text-ink-muted underline decoration-hairline-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                >
                  {copy.hero.ctaCv}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320} className="hidden lg:block">
            <div className="relative w-fit">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-accent/12 blur-2xl"
              />
              <Image
                src={retrato}
                alt={copy.hero.portraitAlt}
                width={200}
                height={200}
                priority
                placeholder="blur"
                sizes="200px"
                className="relative size-50 rounded-full border border-hairline-strong object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Métricas */}
        <Reveal delay={400}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline lg:grid-cols-4">
            {statIds.map((id) => (
              <div key={id} className="bg-canvas px-5 py-6">
                <dt className="sr-only">{copy.stats[id]}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-semibold tracking-tight text-ink">
                    {statValues[id]}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-ink-faint">
                    {copy.stats[id]}
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
