import { Answer } from "./answer.model";

export interface Question {
    id : number,
    answerList: Answer[],
    correctAnswerList: Answer[],
    description: string,
    feedback: string
}