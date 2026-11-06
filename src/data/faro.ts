/** Identidad pública compartida por la página, sus metadatos y el schema. */
export const faro = {
  name: "FARO",
  fullName: "Fuente Abierta de Regulación y Ordenamiento",
  title: "FARO | Digesto digital para municipios de Argentina",
  description:
    "Software de digesto digital municipal para organizar ordenanzas, decretos y resoluciones. Búsqueda normativa, lectura por artículos y mapa legal para municipios de Argentina.",
  path: "/faro",
  dateModified: "2026-11-06",
  socialImage: "/images/faro/faro-social.png",
  socialImageAlt:
    "FARO, digesto digital para municipios: logo del faro sobre un libro, red normativa y escudo, junto a sus funciones de búsqueda y mapa legal.",
  imageAlt:
    "FARO: un faro iluminando un libro abierto, símbolo de claridad y acceso a la normativa municipal.",
} as const;

export const faroQuestions = [
  [
    "¿Qué es FARO y para qué sirve?",
    "FARO, Fuente Abierta de Regulación y Ordenamiento, es una plataforma de digesto digital y gestión de normativa municipal. Permite organizar ordenanzas, decretos y resoluciones, buscar disposiciones, consultar sus artículos y explorar sus conexiones en un mapa legal.",
  ],
  [
    "¿Qué es un digesto digital municipal?",
    "Es una colección organizada de la normativa de un municipio que se puede consultar en línea. FARO reúne ordenanzas, decretos y resoluciones con fichas, categorías y, cuando está disponible, su articulado. La cobertura y la actualización dependen del material incorporado y del circuito de revisión acordado con la institución.",
  ],
  [
    "¿Cómo se incorporan las ordenanzas y los decretos existentes?",
    "Se revisan las fuentes y los archivos disponibles, se identifican las normas y se acuerdan las prioridades de incorporación. Si parte del material está en papel o en PDF escaneado, se evalúan la digitalización y la revisión necesarias antes de definir el alcance y el presupuesto.",
  ],
  [
    "¿El mapa legal determina si una norma está vigente?",
    "El mapa ayuda a explorar referencias, modificaciones y derogaciones registradas entre normas. La vigencia requiere revisar las fuentes y el contexto jurídico: la visualización y los resúmenes orientan la consulta, pero no sustituyen el texto oficial ni la revisión de los responsables de la normativa.",
  ],
  [
    "¿FARO se adapta a un municipio pequeño?",
    "Sí. La implementación se define según el volumen de normativa, el equipo disponible y las prioridades del municipio. Se puede comenzar con un conjunto acotado y ampliar la cobertura por etapas.",
  ],
  [
    "¿Tenemos que tener todas las normas digitalizadas?",
    "No. El material disponible se releva y se acuerda el alcance inicial. La incorporación se organiza por etapas, distinguiendo las fichas de referencia de las normas cuyo articulado ya está disponible.",
  ],
  [
    "¿Cómo se actualiza la información?",
    "Se define un circuito de publicación con el equipo municipal: responsables, revisión y frecuencia de actualización. La capacitación y el acompañamiento se acuerdan en la propuesta.",
  ],
  [
    "¿Incluye mantenimiento y soporte?",
    "La propuesta puede incluir puesta en marcha, capacitación, soporte y mantenimiento. El alcance y las responsabilidades se dejan acordados desde el inicio.",
  ],
  [
    "¿Cuál es el precio?",
    "La cotización depende del volumen inicial de normativa, el trabajo de organización, la implementación y el acompañamiento requerido. A partir del relevamiento se presenta una propuesta con alcance y condiciones definidos.",
  ],
] as const;
