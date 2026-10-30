import type { Metadata } from "next";
import { faro, faroQuestions } from "@/data/faro";
import { profile, site } from "@/data/profile";
import { absolute } from "./seo";

const url = absolute(faro.path);
const root = site.url.replace(/\/$/, "");

export const faroMetadata: Metadata = {
  title: { absolute: faro.title },
  description: faro.description,
  applicationName: faro.name,
  category: "Software para gobiernos locales",
  authors: [{ name: profile.name, url: absolute("/") }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: faro.title,
    description: faro.description,
    url,
    type: "website",
    locale: "es_AR",
    siteName: faro.name,
  },
  // Next añade las imágenes y sus dimensiones desde los archivos de cada ruta.
  twitter: {
    card: "summary_large_image",
    title: faro.title,
    description: faro.description,
  },
  icons: {
    icon: [
      { url: "/images/faro/faro-mark.svg", type: "image/svg+xml" },
      {
        url: "/images/faro/faro-icon.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/images/faro/faro-apple.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

/** Servicio por cotización: no inventar offers.price, estrellas ni reseñas de software. */
export function faroJsonLd() {
  const person = `${root}/#person`;
  const service = `${url}#servicio`;
  const brand = `${url}#marca`;
  const image = `${url}#imagen`;
  const page = `${url}#webpage`;
  const breadcrumb = `${url}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person,
        name: profile.name,
        url: absolute("/"),
        email: profile.email,
        sameAs: [profile.github, profile.linkedin],
      },
      {
        "@type": "Brand",
        "@id": brand,
        name: faro.name,
        alternateName: faro.fullName,
        url,
        logo: { "@id": image },
      },
      {
        "@type": "ImageObject",
        "@id": image,
        url: absolute("/images/faro/faro-mark.png"),
        contentUrl: absolute("/images/faro/faro-mark.png"),
        width: 512,
        height: 512,
        caption: faro.imageAlt,
        creator: { "@id": person },
      },
      {
        "@type": "Service",
        "@id": service,
        name: `${faro.name} — Digesto digital municipal`,
        alternateName: faro.fullName,
        url,
        description: faro.description,
        brand: { "@id": brand },
        provider: { "@id": person },
        image: { "@id": image },
        serviceType:
          "Implementación de digesto digital y gestión de normativa municipal",
        areaServed: { "@type": "Country", name: "Argentina" },
        audience: {
          "@type": "Audience",
          audienceType: "Municipios y equipos de gobierno local",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${url}#contacto`,
          availableLanguage: {
            "@type": "Language",
            name: "Español",
            alternateName: "es",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Implementación y acompañamiento FARO",
          itemListElement: [
            "Relevamiento de normativa municipal",
            "Organización e incorporación del corpus",
            "Implementación y capacitación",
            "Soporte y mantenimiento",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
        mainEntityOfPage: { "@id": page },
      },
      {
        "@type": "WebPage",
        "@id": page,
        url,
        name: faro.title,
        description: faro.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${root}/#website` },
        mainEntity: { "@id": service },
        about: { "@id": brand },
        primaryImageOfPage: { "@id": image },
        breadcrumb: { "@id": breadcrumb },
        dateModified: faro.dateModified,
        publisher: { "@id": person },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumb,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: absolute("/"),
          },
          { "@type": "ListItem", position: 2, name: faro.name, item: url },
        ],
      },
      // Marcado semántico del contenido visible; no promete un FAQ rich result de Google.
      {
        "@type": "FAQPage",
        "@id": `${url}#preguntas`,
        url: `${url}#preguntas`,
        inLanguage: "es-AR",
        isPartOf: { "@id": page },
        mainEntity: faroQuestions.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
}
