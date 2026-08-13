import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/app/globals.css";
import { site } from "@/data/profile";
import type { Lang } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jet",
  display: "swap",
});

/**
 * Envoltorio compartido por los dos root layouts.
 *
 * El sitio tiene un layout raíz por idioma —`(es)` y `(en)`— porque `<html lang>`
 * tiene que declarar el idioma real de la página: es lo que usan los lectores de
 * pantalla y lo que evita que el traductor del navegador se confunda. Lo único
 * que cambia entre ambos es ese atributo, así que el resto vive acá.
 */
export default function RootHtml({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Marca que hay JS antes del primer paint. El CSS de las animaciones
            de entrada cuelga de este atributo, así que sin JavaScript el
            contenido se renderiza visible en lugar de quedar en opacity: 0. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.js="on"`,
          }}
        />
        {children}
        <GoogleAnalytics gaId={site.gaId} />
      </body>
    </html>
  );
}
