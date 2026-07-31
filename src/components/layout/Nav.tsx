"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Fondo sólido sólo después de despegarse del hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: marca el ítem cuya sección ocupa la franja superior del viewport.
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const first = visible[0];
        if (first) setActive(`#${first.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Con el menú móvil abierto, el fondo no debe scrollear.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape cierra el menú.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-canvas"
      >
        Saltar al contenido
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-hairline bg-canvas/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Principal"
          className="container-page flex h-16 items-center justify-between sm:h-18"
        >
          <a
            href="#inicio"
            className="group flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight"
          >
            <span className="grid size-8 place-items-center rounded-md border border-hairline-strong bg-raised text-[0.7rem] font-semibold text-accent transition-colors group-hover:border-accent">
              {profile.initials}
            </span>
            <span className="hidden text-ink sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active === item.href
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Hablemos de un proyecto")}`}
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:inline-block"
            >
              Contratame
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-10 place-items-center rounded-md border border-hairline text-ink md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                className="size-5"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 top-16 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-6">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-hairline py-4 text-2xl font-medium tracking-tight text-ink"
              >
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Hablemos de un proyecto")}`}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent px-5 py-3.5 text-center font-medium text-canvas"
            >
              Contratame
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
