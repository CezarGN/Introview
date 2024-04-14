export interface SubmitModel {
    questions: SubmitAnswer[]
}

export interface SubmitAnswer {
    questionId: number,
    answers: {
        selected: boolean,
        answerId: number
    }[]
}

export interface PostAnswer {
    questionId: number,
    answerIds: number[]
}