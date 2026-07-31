import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-faint">
          Next.js · TypeScript · Tailwind CSS ·{" "}
          <a
            href={`${profile.github}/portfolio-next`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            código
          </a>
        </p>
      </div>
    </footer>
  );
}
