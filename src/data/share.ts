import type { Lang } from "@/i18n/config";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

// Printed/downloaded QR codes must keep pointing to production in local previews.
export function portfolioShareUrl(lang: Lang) {
  return `${PUBLIC_SITE_URL}${lang === "en" ? "/en" : "/"}`;
}

export const shareCopy = {
  es: {
    eyebrow: "Sigamos en contacto",
    title: "Llevate mi portafolio",
    intro: "Escaneá para conocer mis proyectos y conectar conmigo.",
    role: "Software · Inteligencia artificial · Tecnología",
    enlarge: "Ampliar QR",
    download: "Guardar tarjeta PNG",
    svg: "Descargar QR SVG",
    png: "Descargar QR PNG",
    share: "Compartir enlace",
    close: "Cerrar",
    hint: "Mostrá este código desde tu celular para que otra persona lo escanee.",
    saved: "Enlace copiado. Ya podés pegarlo donde quieras.",
    failed: "Podés copiar la dirección que aparece debajo del QR.",
    alt: "Código QR para abrir el portafolio de Ariel Eitner",
  },
  en: {
    eyebrow: "Let's stay in touch",
    title: "Take my portfolio with you",
    intro: "Scan to explore my projects and connect with me.",
    role: "Software · Artificial intelligence · Technology",
    enlarge: "Enlarge QR",
    download: "Save PNG card",
    svg: "Download QR SVG",
    png: "Download QR PNG",
    share: "Share link",
    close: "Close",
    hint: "Show this code on your phone so someone else can scan it.",
    saved: "Link copied. You can paste it anywhere.",
    failed: "You can copy the address displayed below the QR code.",
    alt: "QR code to open Ariel Eitner's portfolio",
  },
} as const;
