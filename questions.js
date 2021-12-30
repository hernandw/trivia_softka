import { Data } from './data/data.js'
import { Question } from './models/question.js'


export const questions = Data.map( p => new Question(p.question, p.choices, p.answer, p.level))


