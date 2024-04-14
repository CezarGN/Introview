import { Answer } from "./answer.model";
import { Question } from "./question.model";

export interface QuizModel {
  id: number,
  description: string,
  questionList: Question[]
  feedback: string,
  score? :string
}
