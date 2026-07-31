import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  /** Numeral mostrado en la etiqueta monoespaciada, p. ej. "02". */
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Envoltorio de sección: mantiene idéntico el ritmo vertical, la cabecera y
 * la numeración a lo largo de toda la página.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-hairline py-section ${className}`}
    >
      <div className="container-page">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow">
              <span className="text-accent">{index}</span>
              <span aria-hidden="true" className="h-px w-6 bg-hairline-strong" />
              {eyebrow}
            </p>
            <h2 className="mt-5 text-h2 font-semibold text-gradient">{title}</h2>
            {intro ? (
              <p className="mt-6 text-lead text-ink-muted">{intro}</p>
            ) : null}
          </header>
        </Reveal>

        <div className="mt-14 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
