export class Question {
    constructor(text,choices,answer,level){

        
        this.text = text
        this.choices = choices
        this.answer = answer
        this.level = level
    }
    correctAnswer(choices){
        return choices === this.answer
    }
}