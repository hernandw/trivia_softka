import { Quiz } from "./trivia.js";

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
      <h2> ${nombre} your score is: ${score}</h2>
            `;
    const resultado = document.getElementById("quiz");
    resultado.innerHTML = quizEndhtml;
  }
  showProgress(currentIndex, total) {
    const elemento = document.getElementById("progreso");
    elemento.innerHTML = `Question ${currentIndex} of ${total}`;
  }
  showLevel(score){
      if(score==5){
        console.log('su nivel es bueno')
      }else if(score==4){
    
            console.log('Su nivel es basico')
        
      }if(score==3){console.log('su nivel es bajo')}

  }
}
