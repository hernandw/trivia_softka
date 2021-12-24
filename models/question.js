export class Question {
    constructor(text,choices,answer){
        this.text = text
        this.choices = choices
        this.answer = answer
    }
    correctAnswer(choices){
        return choices === this.answer
    }
}


const question = new Question('como te llamas', ['a','b'],'a');

console.log(question);
console.log(question.correctAnswer('c'));

