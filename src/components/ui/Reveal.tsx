"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Retardo en ms, para escalonar elementos de una misma grilla. */
  delay?: number;
  className?: string;
};

/**
 * Aparición al entrar en viewport. El estado inicial ("pending") se renderiza
 * en el servidor y lo neutraliza un <noscript> en el layout, así el contenido
 * sigue siendo visible sin JavaScript.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el usuario pide menos movimiento, mostramos sin observar nada.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.reveal = "visible";
      return;
    }

    // Un elemento ya visible al cargar (p. ej. el hero) no debe esperar scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal="pending"
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
