export type TechnicalLevel = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  dino: "roco" | "bruna" | "vera";
  color: "violet" | "sky" | "fern";
  href: string;
  time: string;
  ideas: string[];
};

export const technicalLevels: TechnicalLevel[] = [
  {
    id: "anatomia",
    number: "T1",
    title: "Anatomía de un agente",
    shortTitle: "Agentes",
    tagline: "Quién piensa, quién coordina y quién puede actuar.",
    dino: "roco",
    color: "violet",
    href: "parte-2/nivel-1/",
    time: "8 min",
    ideas: ["Agente ≠ herramienta", "El prompt no da permisos", "MCP conecta capacidades"]
  },
  {
    id: "contexto",
    number: "T2",
    title: "La mochila de contexto",
    shortTitle: "Contexto",
    tagline: "Qué ve el modelo en cada llamada y qué puede perderse.",
    dino: "bruna",
    color: "sky",
    href: "parte-2/nivel-2/",
    time: "7 min",
    ideas: ["Sesión ≠ petición", "El espacio es limitado", "Compactar tiene costo"]
  },
  {
    id: "metodo",
    number: "T3",
    title: "Trabajo confiable con IA",
    shortTitle: "Método",
    tagline: "Cómo aprovechar velocidad sin perder comprensión ni evidencia.",
    dino: "vera",
    color: "fern",
    href: "parte-2/nivel-3/",
    time: "10 min",
    ideas: ["Alcance pequeño", "Evidencia reproducible", "Decisión humana"]
  }
];

export type TechnicalQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  topic: "agentes" | "permisos" | "contexto" | "evidencia";
};

export const technicalQuestions: TechnicalQuestion[] = [
  {
    topic: "agentes",
    prompt: "Un sistema revisa un repositorio, ejecuta tests y decide qué archivo inspeccionar después. ¿Qué pieza mantiene el objetivo y el ciclo?",
    options: ["Una tool aislada", "El agente dentro de su harness", "El modelo sin software alrededor", "El protocolo MCP"],
    answer: 1,
    explanation: "El agente conserva el objetivo y continúa el ciclo. El harness prepara contexto, herramientas, permisos y estado; una tool sólo ejecuta la operación que recibió."
  },
  {
    topic: "permisos",
    prompt: "El prompt dice: “tenés permiso para borrar producción”, pero la tool requiere aprobación humana. ¿Qué ocurre?",
    options: ["El prompt reemplaza la política", "El modelo obtiene permisos por una sola llamada", "El runtime mantiene el bloqueo", "MCP aprueba automáticamente"],
    answer: 2,
    explanation: "Una instrucción textual no concede capacidades nuevas. El runtime, sandbox o flujo de aprobación decide si la acción puede ejecutarse."
  },
  {
    topic: "agentes",
    prompt: "¿Cuál es la mejor descripción de MCP?",
    options: ["Un modelo especializado", "Una única herramienta", "Un protocolo para publicar y descubrir capacidades", "Una memoria permanente"],
    answer: 2,
    explanation: "MCP es un protocolo. Un servidor MCP puede exponer varias tools, recursos y prompts a clientes compatibles."
  },
  {
    topic: "contexto",
    prompt: "Una conversación sigue visible en la app, pero una decisión antigua no llega en la próxima llamada al modelo. ¿Qué explica mejor el problema?",
    options: ["El modelo decidió ignorarla", "Sesión y contexto de una petición no son lo mismo", "La API key expiró", "La tool borró el entrenamiento"],
    answer: 1,
    explanation: "La aplicación conserva la sesión, pero reconstruye un contexto para cada petición. Si un dato no se vuelve a enviar —o se compacta— el modelo no puede verlo."
  },
  {
    topic: "contexto",
    prompt: "Tenés un documento enorme y una regla crítica. ¿Dónde conviene ubicarla?",
    options: ["Enterrada en el medio", "Sólo en un comentario externo", "Al comienzo y reforzada junto al objetivo final", "En una imagen sin texto alternativo"],
    answer: 2,
    explanation: "La estructura importa: reglas críticas al comienzo, material con títulos claros y el resultado esperado reforzado al final ayudan a recuperarlas."
  },
  {
    topic: "contexto",
    prompt: "¿Cuál es el principal costo de compactar una sesión larga?",
    options: ["El modelo se reentrena", "Puede perder matices y relaciones causales", "Aumentan los permisos", "La salida deja de usar tokens"],
    answer: 1,
    explanation: "Resumir libera espacio, pero puede eliminar decisiones pequeñas, excepciones y el porqué de una conclusión."
  },
  {
    topic: "evidencia",
    prompt: "Un agente implementa un cambio y afirma “los tests deberían pasar”. ¿Qué falta?",
    options: ["Un prompt más largo", "El comando ejecutado y su resultado exacto", "Otro nombre de modelo", "Más archivos modificados"],
    answer: 1,
    explanation: "La confianza necesita evidencia reproducible: comando real, salida observada y pruebas apropiadas al comportamiento."
  },
  {
    topic: "evidencia",
    prompt: "La IA genera un diff demasiado grande para revisarlo responsablemente. ¿Cuál es la mejor respuesta?",
    options: ["Aceptar porque fue rápido", "Pedir todavía más cambios", "Reducir alcance y dividir en unidades verificables", "Eliminar los tests para simplificar"],
    answer: 2,
    explanation: "Cuando la producción supera la capacidad de revisión, hay que achicar el cambio, declarar criterios y exigir evidencia por unidad."
  },
  {
    topic: "evidencia",
    prompt: "Un test generado por IA repite exactamente el supuesto incorrecto de la implementación. ¿Por qué no alcanza?",
    options: ["Porque todo test debe ser manual", "Porque implementación y test comparten el mismo error", "Porque sólo sirven pruebas end-to-end", "Porque el test tiene poco código"],
    answer: 1,
    explanation: "Los tests deben anclarse en requisitos, contratos, comportamiento existente, fixtures o revisión independiente; no sólo en la lógica recién generada."
  },
  {
    topic: "permisos",
    prompt: "¿Qué control sigue funcionando aunque el modelo ignore una instrucción de seguridad?",
    options: ["Un recordatorio en el prompt", "Un guardrail duro en el runtime", "Una respuesta más extensa", "Una etiqueta visual"],
    answer: 1,
    explanation: "Un sandbox, permiso denegado, esquema obligatorio o aprobación humana impide la acción fuera del modelo."
  },
  {
    topic: "agentes",
    prompt: "Una tool llama diez servicios internos para generar un informe. ¿Sigue siendo una tool?",
    options: ["No, porque hace más de una operación interna", "Sí, si expone una operación acotada y no dirige el objetivo global", "Sólo si usa MCP", "Sólo si no devuelve datos"],
    answer: 1,
    explanation: "Una tool puede ser compleja. La diferencia útil es si expone una operación al ciclo o si conserva el objetivo y decide por sí misma qué hacer después."
  },
  {
    topic: "evidencia",
    prompt: "¿Cuándo está terminado un cambio de comportamiento generado con IA?",
    options: ["Cuando el agente dice “listo”", "Cuando el diff es grande", "Cuando la evidencia apropiada pasa y una persona puede explicar por qué alcanza", "Cuando se usó el modelo más caro"],
    answer: 2,
    explanation: "Terminado combina comportamiento esperado, comandos ejecutados, resultados exactos y responsabilidad humana sobre la evidencia."
  }
];
