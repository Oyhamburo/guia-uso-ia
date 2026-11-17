/**
 * Contenido preservado del antiguo Nivel 4.
 * No se publica todavía: será la base de la tercera parte avanzada.
 */
export const part3Draft = {
  title: "Coordinar varios agentes",
  guide: "Roco",
  promise:
    "Más agentes aumentan capacidad, pero también el costo de coordinación.",
  sections: [
    {
      title: "Coordinador y subagente",
      points: [
        "El coordinador conserva el objetivo global, divide el trabajo y sintetiza.",
        "Un subagente recibe una responsabilidad acotada; no es un modelo especial.",
        "El contexto, la memoria y los permisos no se comparten automáticamente."
      ]
    },
    {
      title: "Roles con salidas distintas",
      points: [
        "Explorer o scout: mapa y evidencia en modo solo lectura.",
        "Planner: enfoque, dependencias, riesgos y criterios de aceptación.",
        "Writer: un responsable del cambio y un alcance explícito.",
        "Verifier: pruebas reproducibles e independientes.",
        "Reviewer: hallazgos priorizados sobre riesgo, diseño y mantenibilidad."
      ]
    },
    {
      title: "Paralelo o secuencial",
      points: [
        "Paralelizar investigación independiente y comparaciones.",
        "Secuenciar cuando una salida cambia la pregunta siguiente.",
        "Evitar varios escritores sobre los mismos archivos; aislarlos si es necesario."
      ]
    },
    {
      title: "Artefactos y evidencia",
      points: [
        "Planes, especificaciones, alcance permitido, diffs y resultados de pruebas.",
        "La coordinación no debería depender sólo de resúmenes flotantes de chat.",
        "Una persona conserva la decisión final y acepta el riesgo."
      ]
    },
    {
      title: "Fallas y límites",
      points: [
        "Contexto fragmentado, trabajo duplicado, ediciones en conflicto y autoridad difusa.",
        "Varios agentes pueden coincidir por compartir modelo, datos o supuestos.",
        "Coordinar también cuesta tokens, latencia y atención humana.",
        "Un resumen sin citas, comandos o evidencia puede ocultar lo importante.",
        "La delegación necesita una persona o agente responsable de cerrar la decisión.",
        "No delegar tareas pequeñas, muy acopladas o con un objetivo todavía confuso."
      ]
    }
  ]
} as const;
