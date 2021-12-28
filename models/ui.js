export class UI {
  constructor() {}

  showQuestion(text) {
    const pregunta = document.getElementById("question");
    pregunta.innerHTML = text;
  }
  showChoices(choices, callback) {
    const opciones = document.getElementById("choices");
    opciones.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      opciones.append(button);
    }
  }
}
