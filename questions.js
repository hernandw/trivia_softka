import { data } from './data/data.js'
import { Question } from './models/question.js'

export const questions = data.map( p => new Question(p.question, p.choices, p.answer))

