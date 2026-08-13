# Portfolio — Ariel Eitner

Sitio personal de [Ariel Eitner](https://github.com/Ariel-Eitner), Desarrollador Full Stack.
Landing de perfil, enfoque, stack, experiencia y proyectos, más un **mapa técnico**
interactivo de las quince áreas del desarrollo web profesional. En español e inglés.

**Producción:** https://portfolio-next-xi-nine.vercel.app

| Página     | Español                        | English                      |
| ---------- | ------------------------------ | ---------------------------- |
| Landing    | `/`                            | `/en`                        |
| Mapa       | `/mapa-tecnico`                | `/en/tech-map`               |

## Stack

| Capa       | Tecnología                                      |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 16 (App Router, React Server Components) |
| UI         | React 19 · TypeScript 5.9 (`strict`)             |
| Estilos    | Tailwind CSS 4 (configuración CSS-first)         |
| Tipografía | Inter + JetBrains Mono vía `next/font`           |
| Analítica  | Google Analytics vía `@next/third-parties`       |
| Deploy     | Vercel                                           |

Una sola variable de entorno, opcional: `NEXT_PUBLIC_SITE_URL` sobrescribe el dominio
del que se derivan canonical, hreflang, sitemap y JSON-LD. Sin ella se usa el de
producción, así que el sitio se despliega sin configuración previa.

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
npm run icons        # regenera el favicon a partir del mark "AE"
```

Requiere Node.js >= 20.9.

## Estructura

```
src/
├── app/
│   ├── (es)/                     # root layout con lang="es"
│   │   ├── page.tsx              # /
│   │   └── mapa-tecnico/page.tsx # /mapa-tecnico
│   ├── (en)/                     # root layout con lang="en"
│   │   └── en/
│   │       ├── page.tsx          # /en
│   │       └── tech-map/page.tsx # /en/tech-map
│   ├── globals.css               # tokens de diseño (@theme) y utilidades
│   ├── sitemap.ts                # una URL por página e idioma, con hreflang
│   ├── robots.ts
│   └── manifest.ts
├── components/
│   ├── layout/                   # RootHtml, Nav (scrollspy + menú móvil), Footer
│   ├── pages/                    # HomePage y TechMapPage, compartidas por ambos idiomas
│   ├── sections/                 # Hero, About, Principles, Stack, Experience,
│   │                             # Projects, TechMapTeaser, Faq, Contact
│   ├── techmap/                  # Explorer (grafo), Outline (índice), Flows (recorridos)
│   └── ui/                       # Section (wrapper), Reveal (animación al scroll)
├── data/
│   ├── profile.ts                # identidad, stack y estructura — sin prosa
│   ├── copy/{es,en}.ts           # ← todo el texto del sitio vive acá
│   └── techMap/
│       ├── areas.ts              # las 15 áreas, sus conceptos y tecnologías
│       └── layout.ts             # posiciones del grafo, calculadas sin azar
├── i18n/config.ts                # idiomas y tabla de rutas
└── lib/
    ├── seo.ts                    # metadata y JSON-LD
    └── ogImage.tsx               # imágenes de compartido
```

## Editar el contenido

- **Texto:** [`src/data/copy/es.ts`](src/data/copy/es.ts) y
  [`en.ts`](src/data/copy/en.ts). El tipo [`Copy`](src/data/copy/types.ts) los mantiene
  sincronizados: si falta una clave en un idioma, no compila.
- **Stack, experiencia y proyectos:** [`src/data/profile.ts`](src/data/profile.ts) tiene la
  estructura (ids, tecnologías, fechas, enlaces); la prosa correspondiente va en `copy`.
- **Mapa técnico:** [`src/data/techMap/areas.ts`](src/data/techMap/areas.ts). Agregar un área
  o una tecnología es editar ese array; el grafo, el índice y el JSON-LD se recalculan solos.
- **Rutas:** [`src/i18n/config.ts`](src/i18n/config.ts). Es la fuente de la que salen el
  sitemap, los hreflang y el selector de idioma.
- **Iconos:** [`scripts/generate-icons.mjs`](scripts/generate-icons.mjs) dibuja el mark "AE"
  como trazos vectoriales y produce `icon.svg`, `favicon.ico` y el `apple-touch-icon`.
  Cambiar el color de marca es editar una constante y correr `npm run icons`.

El CV en PDF se sirve desde [`public/cv/`](public/cv).

## Decisiones de diseño

- **Un root layout por idioma.** `<html lang>` tiene que declarar el idioma real de la
  página, así que `(es)` y `(en)` son dos layouts raíz que comparten
  [`RootHtml`](src/components/layout/RootHtml.tsx). El español vive en la raíz para no
  convertir la URL ya indexada en una redirección.
- **El mapa se renderiza en el servidor.** Las posiciones del grafo se calculan con
  trigonometría determinista, sin simulación física y sin d3: el SVG sale en el HTML con
  sus etiquetas dentro, Google lo indexa y la hidratación no repinta nada. Debajo, el mismo
  contenido en HTML plano para lectura, lectores de pantalla y rastreadores.
- **Props estrechas en los componentes cliente.** `Nav` y el explorador del mapa reciben
  sólo las claves de `copy` que usan: todo lo que se le pasa a un componente cliente viaja
  en el payload de React.
- **Sistema de tokens en CSS.** Tailwind 4 se configura desde `globals.css` con `@theme`:
  colores, escala tipográfica fluida (`clamp()`) y ritmo vertical compartido. No hay
  `tailwind.config.ts`.
- **Animaciones sin dependencias.** El efecto de aparición usa `IntersectionObserver` en un
  único componente cliente (`Reveal`); el resto del árbol son Server Components.
- **Degradación elegante.** El estado inicial oculto cuelga del atributo `data-js`, que
  escribe un script inline. Sin JavaScript el contenido se ve completo.
- **Accesibilidad.** Enlace de salto al contenido, foco visible, `aria-current` en la
  navegación, nodos del mapa navegables por teclado, respeto por `prefers-reduced-motion`
  y contraste AA sobre el fondo oscuro.
