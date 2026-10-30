/** Identidad pública compartida por la página, sus metadatos y el schema. */
export const faro = {
  name: "FARO",
  fullName: "Fuente Abierta de Regulación y Ordenamiento",
  title: "FARO | Digesto digital y normativa municipal",
  description:
    "FARO: software de digesto digital para municipios de Argentina. Organice ordenanzas y decretos, consulte artículos y explore conexiones en el mapa legal.",
  path: "/faro",
  dateModified: "2026-10-29",
  imageAlt:
    "FARO: un faro iluminando un libro abierto, símbolo de claridad y acceso a la normativa municipal.",
} as const;

export const faroQuestions = [
  [
    "¿Qué es FARO y para qué sirve?",
    "FARO, Fuente Abierta de Regulación y Ordenamiento, es una plataforma de digesto digital y gestión de normativa municipal. Permite organizar ordenanzas, decretos y resoluciones, buscar disposiciones, consultar sus artículos y explorar sus conexiones en un mapa legal.",
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
