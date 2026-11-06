export type VisualConcept = {
  icon: string;
  title: string;
  text: string;
  note?: string;
};

export type InitialLevel = {
  number: number;
  slug: string;
  kicker: string;
  title: string;
  promise: string;
  dino: "bruna" | "paco" | "anky";
  color: "sky" | "amber" | "fern";
  concepts: VisualConcept[];
  takeaways: string[];
};

export const initialLevels: InitialLevel[] = [
  {
    number: 1,
    slug: "nivel-1",
    kicker: "Primera parada · La pregunta clave",
    title: "¿Qué es la IA?",
    promise: "Es tecnología que usa modelos entrenados con datos para reconocer patrones y generar resultados. No piensa ni entiende como una persona.",
    dino: "bruna",
    color: "sky",
    concepts: [
      {
        icon: "🧭",
        title: "Herramienta, no autoridad",
        text: "Sirve para explorar, ordenar y crear borradores. El criterio sigue siendo tuyo."
      },
      {
        icon: "🌿",
        title: "Una familia enorme",
        text: "Hay IA para texto, imágenes, audio, voz y video. Un producto puede combinar varias."
      },
      {
        icon: "⚙️",
        title: "Motor, acceso y experiencia",
        text: "Modelo, proveedor y producto son capas distintas."
      }
    ],
    takeaways: [
      "La seguridad del tono no demuestra que una respuesta sea cierta.",
      "El mismo modelo puede sentirse distinto según el producto.",
      "Suscripción y consumo por API son accesos diferentes."
    ]
  },
  {
    number: 2,
    slug: "nivel-2",
    kicker: "Segunda parada · Paco prepara la expedición",
    title: "¿Cómo la uso?",
    promise: "Empezá por el objetivo, dale el contexto justo y ajustá el resultado paso a paso.",
    dino: "paco",
    color: "amber",
    concepts: [
      {
        icon: "👥",
        title: "Para quién",
        text: "Quién va a leer, usar o recibir el resultado."
      },
      {
        icon: "📎",
        title: "Material útil",
        text: "Datos, notas, ejemplos o archivos que cambian la respuesta."
      },
      {
        icon: "🚧",
        title: "Límites",
        text: "Extensión, tono, tiempo y cosas que debe evitar."
      }
    ],
    takeaways: [
      "Un prompt es un punto de partida, no una fórmula secreta.",
      "Definí qué querés lograr y qué contexto cambia la respuesta.",
      "Elegí modelo y esfuerzo según la tarea; después revisá e iterá."
    ]
  },
  {
    number: 3,
    slug: "nivel-3",
    kicker: "Tercera parada · Anky protege el nido",
    title: "Usala con criterio y seguridad",
    promise: "Aprendé cuándo confiar, cuándo verificar y cuándo frenar.",
    dino: "anky",
    color: "fern",
    concepts: [
      {
        icon: "🧪",
        title: "Buscá evidencia",
        text: "Fuentes, pruebas y contraejemplos valen más que una explicación convincente."
      },
      {
        icon: "🚦",
        title: "Medí el riesgo",
        text: "Cuanto más difícil sea deshacer una decisión, más fuerte debe ser la verificación."
      },
      {
        icon: "🪺",
        title: "Cuidá los datos",
        text: "No compartas secretos, datos personales o información confidencial sin autorización."
      },
      {
        icon: "🙋",
        title: "Conservá la decisión",
        text: "La IA propone; una persona acepta el resultado y sus consecuencias."
      }
    ],
    takeaways: [
      "Para ideas reversibles alcanza un control liviano.",
      "Salud, dinero, legal, seguridad y producción necesitan fuentes y personas calificadas.",
      "«Local», «gratis» y «pesos abiertos» no significan automáticamente «privado»."
    ]
  }
];

export const ecosystemLayers = [
  { id: "modelo", label: "Modelo", hint: "El motor que genera una salida", icon: "⚙️" },
  { id: "proveedor", label: "Proveedor", hint: "Quien ofrece o ejecuta ese motor", icon: "🏢" },
  { id: "producto", label: "Producto", hint: "La app o experiencia que usás", icon: "🖥️" },
  { id: "modalidad", label: "Tipo de contenido", hint: "Texto, imagen, audio o video", icon: "🎨" }
] as const;

export const riskGuide = [
  { tone: "green", label: "Explorá", description: "Ideas, nombres, borradores o alternativas fáciles de descartar." },
  { tone: "yellow", label: "Verificá", description: "Información que afecta trabajo, personas o una decisión relevante." },
  { tone: "red", label: "Frená y pedí ayuda", description: "Salud, legal, dinero, seguridad, producción o acciones irreversibles." }
] as const;

export const safeCycle = [
  { step: "1", title: "Acotá", text: "Un objetivo y un límite claros." },
  { step: "2", title: "Observá", text: "Revisá supuestos y lo que la IA propone." },
  { step: "3", title: "Pedí evidencia", text: "Fuentes, pruebas o resultados reproducibles." },
  { step: "4", title: "Decidí", text: "Aceptá, corregí o descartá vos." }
] as const;
