import { questions } from "./questions.js";
import { Quiz } from "./models/trivia.js";
import { UI } from "./models/ui.js";

const level = (score)=>{
    ui.showLevel(quiz.score)
}

const renderPage = (quiz, ui) => {
  if (quiz.isEndend()) {
      ui.showScore(quiz.score);
      
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  }
};

function main() {
  const quiz = new Quiz(questions);
  const quiz2 = new Quiz()
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
