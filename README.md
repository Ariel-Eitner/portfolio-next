# Portfolio — Ariel Eitner

Sitio personal de [Ariel Eitner](https://github.com/Ariel-Eitner), Desarrollador Full Stack.
Landing de una sola página: perfil, enfoque de trabajo, stack, experiencia, proyectos y contacto.

**Producción:** https://portfolio-next-xi-nine.vercel.app

## Stack

| Capa       | Tecnología                                       |
| ---------- | ------------------------------------------------ |
| Framework  | Next.js 16 (App Router, React Server Components)  |
| UI         | React 19 · TypeScript 5.9 (`strict`)              |
| Estilos    | Tailwind CSS 4 (configuración CSS-first)          |
| Tipografía | Inter + JetBrains Mono vía `next/font`            |
| Analítica  | Google Analytics vía `@next/third-parties`        |
| Deploy     | Vercel                                            |

Sin variables de entorno: el sitio es estático y se despliega sin configuración previa.

## Empezar

```bash
npm install
npm run dev          # http://localhost:3000
```

Otros comandos:

```bash
npm run build        # build de producción
npm run lint         # ESLint (flat config)
npm run typecheck    # tsc --noEmit
```

Requiere Node.js >= 20.9.

## Estructura

```
src/
├── app/
│   ├── layout.tsx            # metadata, fuentes, JSON-LD (schema.org Person)
│   ├── page.tsx              # composición de secciones
│   ├── globals.css           # tokens de diseño (@theme) y utilidades
│   ├── opengraph-image.tsx   # imagen de compartido generada en build
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/               # Nav (scrollspy + menú móvil), Footer
│   ├── sections/             # Hero, About, Principles, Stack, Experience, Projects, Contact
│   └── ui/                   # Section (wrapper), Reveal (animación al scroll)
└── data/
    └── profile.ts            # ← todo el contenido del sitio vive acá
```

## Editar el contenido

El perfil, las métricas, el stack, la experiencia y los proyectos salen de un único archivo:
[`src/data/profile.ts`](src/data/profile.ts). Actualizar cualquiera de esos datos no
requiere tocar JSX. Los títulos e introducciones de cada sección sí viven en su
componente, en [`src/components/sections/`](src/components/sections).

El CV en PDF se sirve desde [`public/cv/`](public/cv).

## Decisiones de diseño

- **Sistema de tokens en CSS.** Tailwind 4 se configura desde `globals.css` con `@theme`:
  colores, escala tipográfica fluida (`clamp()`) y ritmo vertical compartido. No hay
  `tailwind.config.ts`.
- **Escala tipográfica fluida.** Los títulos interpolan con el viewport en lugar de saltar
  entre breakpoints.
- **Animaciones sin dependencias.** El efecto de aparición usa `IntersectionObserver` en un
  único componente cliente (`Reveal`); el resto del árbol son Server Components.
- **Degradación elegante.** El estado inicial oculto cuelga del atributo `data-js`, que
  escribe un script inline. Sin JavaScript el contenido se ve completo.
- **Accesibilidad.** Enlace de salto al contenido, foco visible, `aria-current` en la
  navegación, respeto por `prefers-reduced-motion` y contraste AA sobre el fondo oscuro.
