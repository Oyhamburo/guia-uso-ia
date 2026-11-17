const topicNames = {
  agentes: "Agentes y herramientas",
  permisos: "Permisos y guardrails",
  contexto: "Contexto y compactación",
  evidencia: "Evidencia y testing"
};

document.querySelectorAll("[data-technical-quiz]").forEach((root) => {
  const dataNode = root.querySelector("[data-quiz-data]");
  const questions = JSON.parse(dataNode?.textContent || "[]");
  if (!questions.length) return;

  const stage = root.querySelector("[data-quiz-stage]");
  const finish = root.querySelector("[data-quiz-finish]");
  const prompt = root.querySelector("[data-quiz-prompt]");
  const topic = root.querySelector("[data-quiz-topic]");
  const options = root.querySelector("[data-quiz-options]");
  const feedback = root.querySelector("[data-quiz-feedback]");
  const feedbackTitle = root.querySelector("[data-feedback-title]");
  const feedbackCopy = root.querySelector("[data-feedback-copy]");
  const next = root.querySelector("[data-quiz-next]");
  const counter = root.querySelector("[data-quiz-counter]");
  const progress = root.querySelector("[data-quiz-progress]");
  const progressbar = root.querySelector("[role='progressbar']");
  const summary = root.querySelector("[data-quiz-summary]");
  const recap = root.querySelector("[data-topic-recap]");
  const restart = root.querySelector("[data-quiz-restart]");
  const finishTitle = root.querySelector("[data-quiz-finish-title]");
  let index = 0;
  let correct = 0;
  const topicScores = Object.fromEntries(Object.keys(topicNames).map((key) => [key, { right: 0, total: 0 }]));

  const render = ({ moveFocus = false } = {}) => {
    const question = questions[index];
    topic.textContent = topicNames[question.topic] || question.topic;
    prompt.textContent = question.prompt;
    counter.textContent = `Pregunta ${index + 1} de ${questions.length}`;
    progress.style.width = `${((index + 1) / questions.length) * 100}%`;
    progressbar?.setAttribute("aria-valuenow", String(index + 1));
    feedback.hidden = true;
    next.hidden = true;
    options.replaceChildren();

    question.options.forEach((label, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = label;
      button.addEventListener("click", () => answer(optionIndex));
      options.append(button);
    });
    if (moveFocus) prompt.focus();
  };

  const answer = (selected) => {
    const question = questions[index];
    const buttons = [...options.querySelectorAll("button")];
    const isCorrect = selected === question.answer;
    if (isCorrect) correct += 1;
    topicScores[question.topic].total += 1;
    if (isCorrect) topicScores[question.topic].right += 1;

    buttons.forEach((button, optionIndex) => {
      button.disabled = true;
      if (optionIndex === question.answer) button.classList.add("is-correct");
      else if (optionIndex === selected) button.classList.add("is-wrong");
    });
    feedbackTitle.textContent = isCorrect ? "Buena lectura del sistema" : "Esta huella llevaba a otro lado";
    feedbackCopy.textContent = question.explanation;
    feedback.hidden = false;
    next.hidden = false;
    next.textContent = index === questions.length - 1 ? "Ver mi bitácora →" : "Siguiente huella →";
    feedback.focus();
  };

  const showFinish = () => {
    stage.hidden = true;
    finish.hidden = false;
    summary.textContent = `Resolviste ${correct} de ${questions.length} escenarios. Lo importante no es memorizar etiquetas: es poder explicar qué control, contexto o evidencia necesitás.`;
    recap.replaceChildren();
    Object.entries(topicScores).forEach(([key, score]) => {
      const chip = document.createElement("span");
      chip.className = "recap-chip";
      chip.textContent = `${topicNames[key]}: ${score.right}/${score.total}`;
      recap.append(chip);
    });
    finishTitle?.focus();
  };

  next.addEventListener("click", () => {
    if (index >= questions.length - 1) showFinish();
    else { index += 1; render({ moveFocus: true }); }
  });

  restart.addEventListener("click", () => {
    index = 0;
    correct = 0;
    Object.keys(topicScores).forEach((key) => { topicScores[key] = { right: 0, total: 0 }; });
    finish.hidden = true;
    stage.hidden = false;
    render({ moveFocus: true });
  });

  render();
});
