import { questions } from "./questions.js";
import { Quiz } from "./models/trivia.js";
import { UI } from "./models/ui.js";

const renderPage = (quiz, ui) => {
  if (quiz.isEndend()) {
    console.log(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
