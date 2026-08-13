import { profile } from "@/data/profile";
import type { Copy } from "@/data/copy";
import { LANG_LABEL, otherLang, path, type Lang } from "@/i18n/config";

export default function Footer({ lang, copy }: { lang: Lang; copy: Copy }) {
  const alt = otherLang(lang);

  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} {profile.name} — {copy.meta.role},{" "}
            {copy.about.location}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <a
                href={path("home", lang)}
                className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
              >
                {copy.ui.backToHome}
              </a>
            </li>
            <li>
              <a
                href={path("techMap", lang)}
                className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
              >
                {copy.mapTeaser.eyebrow}
              </a>
            </li>
            <li>
              <a
                href={path("home", alt)}
                hrefLang={alt}
                className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
              >
                {LANG_LABEL[alt]}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <p className="font-mono text-xs text-ink-faint">
          {copy.footer.builtWith} ·{" "}
          <a
            href={`${profile.github}/portfolio-next`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            {copy.footer.sourceCode}
          </a>
        </p>
      </div>
    </footer>
  );
}
