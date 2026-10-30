"use client";

import { useState } from "react";
import styles from "./faro.module.css";

/** La elección es temporal: cada visita nueva comienza en modo claro. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      type="button"
      className={styles.themeToggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={dark}
      title={dark ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={(event) => {
        const next = !dark;
        event.currentTarget
          .closest("[data-faro-theme]")
          ?.setAttribute("data-faro-theme", next ? "dark" : "light");
        setDark(next);
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20.5 13.4A8.5 8.5 0 0 1 10.6 3.5a8.5 8.5 0 1 0 9.9 9.9Z" />
        )}
      </svg>
    </button>
  );
}
