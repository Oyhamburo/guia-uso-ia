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
    kicker: "Primera parada · Bruna mira el mapa",
    title: "Conocé a la IA",
    promise: "Entendé qué estás usando sin palabras raras ni magia.",
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
    kicker: "Segunda parada · Paco ordena la misión",
    title: "Dale una misión clara",
    promise: "Pasá de «haceme algo» a un pedido que se pueda evaluar.",
    dino: "paco",
    color: "amber",
    concepts: [
      {
        icon: "🎯",
        title: "Objetivo",
        text: "Decí qué necesitás conseguir, no sólo el tema."
      },
      {
        icon: "🗺️",
        title: "Contexto",
        text: "Contá para quién es, qué información importa y en qué situación se usará."
      },
      {
        icon: "📦",
        title: "Formato y límites",
        text: "Indicá cómo querés recibirlo y qué debería evitar."
      },
      {
        icon: "🔎",
        title: "Criterio de calidad",
        text: "Explicá cómo sabrás que el resultado está bien."
      }
    ],
    takeaways: [
      "No existe un prompt mágico: existe un problema mejor encuadrado.",
      "El rol es opcional; objetivo y contexto suelen importar más.",
      "Si falta algo decisivo, la IA debería preguntar; si no, declarar supuestos y avanzar."
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
