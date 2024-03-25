interface ContentItem {
  type: "text" | "image";
  data?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface Subsection {
  content: ContentItem[];
  title: string;
}

interface Section {
  header: string;
  content: ContentItem[];
  subsections: Subsection[];
}

export interface BlogPost {
  id: number;
  sections: Section[];
  slug: string;
  title: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "fundamentos-del-desarrollo-web",
    title: "Fundamentos del Desarrollo Web: HTML, CSS y JavaScript",
    sections: [
      {
        header: "Introducción",
        content: [
          {
            type: "text",
            data: "El desarrollo web es una disciplina que involucra la construcción y mantenimiento de sitios web. Se divide principalmente en tres tecnologías fundamentales: HTML para la estructura, CSS para el diseño y JavaScript para la funcionalidad.",
          },
        ],
        subsections: [],
      },
      {
        header: "¿Qué es HTML?",
        content: [
          {
            type: "text",
            data: "HTML es el lenguaje de marcado estándar para crear páginas web. Define la estructura de la información en un sitio web permitiendo integrar texto, enlaces, imágenes y otros elementos.",
          },
          {
            type: "image",
            src: "/path/to/html-structure-image.jpg",
            alt: "Estructura básica de HTML",
            width: 700,
            height: 400,
          },
        ],
        subsections: [
          {
            title: "Historia de HTML",
            content: [
              {
                type: "text",
                data: "HTML fue creado por Tim Berners-Lee en 1991, marcando el inicio de la web como la conocemos. Ha evolucionado a través de varias versiones, siendo HTML5 la más reciente.",
              },
            ],
          },
          {
            title: "Estructura Básica de una Página HTML",
            content: [
              {
                type: "text",
                data: "Una página HTML básica está compuesta por la declaración de tipo de documento, y elementos `<html>`, `<head>`, y `<body>`. Dentro del `<body>`, se colocan los contenidos visibles de la página.",
              },
            ],
          },
        ],
      },
      {
        header: "CSS: Estilizando la Web",
        content: [
          {
            type: "text",
            data: "CSS es el lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML. CSS describe cómo deben mostrarse los elementos en la pantalla, en papel, en el habla o en otras formas.",
          },
          {
            type: "image",
            src: "/path/to/css-design-image.jpg",
            alt: "Diseño web con CSS",
            width: 700,
            height: 400,
          },
        ],
        subsections: [
          {
            title: "Selectores CSS",
            content: [
              {
                type: "text",
                data: "Los selectores permiten aplicar estilos a elementos específicos en los documentos HTML. Hay varios tipos, incluyendo selectores de clase, ID, y de etiqueta.",
              },
            ],
          },
          {
            title: "Box Model",
            content: [
              {
                type: "text",
                data: "El modelo de caja de CSS es fundamentalmente importante en el diseño web, ya que afecta al diseño de todos los elementos en la página. Consiste en márgenes, bordes, relleno y el contenido real.",
              },
            ],
          },
        ],
      },
      {
        header: "JavaScript: Añadiendo Interactividad",
        content: [
          {
            type: "text",
            data: "JavaScript es un lenguaje de programación que permite implementar funciones complejas en páginas web. Cada vez que una página web hace más que simplemente mostrar información estática, JavaScript probablemente esté involucrado.",
          },
          {
            type: "image",
            src: "/path/to/javascript-functions-image.jpg",
            alt: "Funciones JavaScript",
            width: 700,
            height: 400,
          },
        ],
        subsections: [
          {
            title: "Variables y Estructuras de Control",
            content: [
              {
                type: "text",
                data: "JavaScript utiliza variables para almacenar datos y estructuras de control como bucles e instrucciones if-else para manejar el flujo de operaciones.",
              },
            ],
          },
          {
            title: "Manipulación del DOM",
            content: [
              {
                type: "text",
                data: "Una de las características más poderosas de JavaScript es su capacidad para manipular el Document Object Model (DOM), permitiendo modificar el contenido, estructura y estilo de una página.",
              },
            ],
          },
        ],
      },
      {
        header: "Conclusión",
        content: [
          {
            type: "text",
            data: "HTML, CSS, y JavaScript forman la trinidad de tecnologías fundamentales para el desarrollo web moderno. Cada una juega un papel único e indispensable en la creación de experiencias web ricas y dinámicas.",
          },
        ],
        subsections: [],
      },
    ],
  },
];

export default blogPosts;
