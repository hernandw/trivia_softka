import { questions } from "../questions.js";


export class Quiz {
  questionIndex = 0;
  score = 10;
  constructor(questions) {
    this.questions = questions;
  }
  getQuestionIndex() {
    
      this.questions = questions.filter((item) => item.level === "advanced");
      return this.questions[this.questionIndex];
    
  }
  isEndend() {
    return this.questions.length === this.questionIndex;
  }
  guess(answer) {
    console.log(answer);
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
