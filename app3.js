import { questions } from "./questions.js";
import { Quiz } from "./models/trivia3.js";
import { UI } from "./models/ui3.js";

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

const main = () => {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
  
};

main();
