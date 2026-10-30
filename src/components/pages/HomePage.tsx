import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Principles from "@/components/sections/Principles";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import FaroTeaser from "@/components/sections/FaroTeaser";
import TechMapTeaser from "@/components/sections/TechMapTeaser";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

import { getCopy } from "@/data/copy";
import { homeJsonLd } from "@/lib/seo";
import { otherLang, path, type Lang } from "@/i18n/config";

/** La landing completa. Las dos versiones de idioma renderizan esto mismo. */
export default function HomePage({ lang }: { lang: Lang }) {
  const copy = getCopy(lang);

  return (
    <>
      <script
        type="application/ld+json"
        // Datos propios y estáticos, no entrada de usuario.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(lang, copy)) }}
      />

      <Nav
        lang={lang}
        siteName={copy.meta.siteName}
        nav={copy.nav}
        ui={copy.ui}
        isHome
        altHref={path("home", otherLang(lang))}
      />

      <main id="contenido">
        <Hero lang={lang} copy={copy} />
        <About lang={lang} copy={copy} />
        <Principles lang={lang} copy={copy} />
        <Stack lang={lang} copy={copy} />
        <Experience lang={lang} copy={copy} />
        <Projects lang={lang} copy={copy} />
        <FaroTeaser lang={lang} />
        <TechMapTeaser lang={lang} copy={copy} />
        <Faq lang={lang} copy={copy} />
        <Contact lang={lang} copy={copy} />
      </main>

      <Footer lang={lang} copy={copy} />
    </>
  );
}
