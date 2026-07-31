import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { profile, site, skillGroups } from "@/data/profile";

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

const description = `${profile.role} con ${profile.yearsOfExperience} años de experiencia en Next.js, React, TypeScript, NestJS y Laravel. Microservicios, pasarelas de pago, IA aplicada y SEO técnico. ${profile.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description,
  applicationName: `Portfolio de ${profile.name}`,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ariel Eitner",
    "Desarrollador Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Laravel",
    "Node.js",
    "Buenos Aires",
    "Argentina",
    "Desarrollador remoto",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_AR",
    url: site.url,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

/** Schema.org Person — alimentado por los mismos datos que renderiza la página. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  description: profile.summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillGroups.flatMap((group) => group.items),
  knowsLanguage: [
    { "@type": "Language", name: "Spanish" },
    { "@type": "Language", name: "English" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Marca que hay JS antes del primer paint. El CSS de las animaciones
            de entrada cuelga de este atributo, así que sin JavaScript el
            contenido se renderiza visible en lugar de quedar en opacity: 0. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.js="on"`,
          }}
        />

        <script
          type="application/ld+json"
          // Datos propios y estáticos, no entrada de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={site.gaId} />
      </body>
    </html>
  );
}
