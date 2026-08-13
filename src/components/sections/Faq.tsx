import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { Copy } from "@/data/copy";
import type { Lang } from "@/i18n/config";

/**
 * Preguntas y respuestas en `<details>`: sin JavaScript, accesible por teclado
 * y con el texto de la respuesta siempre presente en el HTML —que es lo que
 * necesita el FAQPage de JSON-LD para no contradecir a la página.
 */
export default function Faq({ copy }: { lang: Lang; copy: Copy }) {
  return (
    <Section
      id="faq"
      index="07"
      eyebrow={copy.faq.eyebrow}
      title={copy.faq.title}
      intro={copy.faq.intro}
    >
      <ul className="space-y-px overflow-hidden rounded-xl border border-hairline bg-hairline">
        {copy.faq.items.map((item, i) => (
          <li key={item.q} className="bg-canvas">
            <Reveal delay={Math.min(i, 5) * 50}>
              <details className="group p-6 sm:p-8">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-h3 font-semibold text-ink marker:content-['']">
                  <h3 className="text-h3 font-semibold">{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-hairline-strong text-ink-faint transition-transform group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="size-3.5"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
