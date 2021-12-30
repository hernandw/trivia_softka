import { questions } from "../questions.js";
import { Quiz } from "./trivia2.js";

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
  showScore(score) {
    let nombre;
    nombre = prompt("¿Cual es tu nombre?");

    const quizEndhtml = `
            <h1>Result</h1>
            <h2> ${nombre} your score is: ${score}</h2>`;

    const quizEndhtml2 = `
            <h1>Felicitaciones has pasado al siguiente nivel</h1>
            <h2> ${nombre} your score is: ${score}</h2>
            <a href="index3.html">Continuar</a>
            `;

    if (score < 10) {
      const resultado = document.getElementById("quiz");
      resultado.innerHTML = quizEndhtml;
    } else if (score < 15) {
      const resultado = document.getElementById("quiz");
      resultado.innerHTML = quizEndhtml2;
    }
    
    
  }
  showProgress(currentIndex, total) {
    const elemento = document.getElementById("progreso");
    elemento.innerHTML = `Question ${currentIndex} of ${total}`;
  }
  
  
 
}
