import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ErrorService} from "./error.service";
import {HttpClient} from "@angular/common/http";
import {Observable, catchError, tap} from "rxjs";
import {QuizModel} from "../../shared/quiz.model";
import { ApiPaths } from '../../urlmapping';
import { PostAnswer, SubmitAnswer } from '../../shared/submit.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url;
  constructor(private http: HttpClient, private tokenService: HttpService, private errorService: ErrorService) {
    this.url = tokenService.url + ApiPaths.Quiz;
  }

  quiz: QuizModel = {
    id: 1,
    description: "bla bla",
    feedback: "bla bla",
    questionList: [
      {
        id: 1,
        description: "bla bla",
        feedback: "haha",
        answerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
          {
            id: 2,
            description: "oinvoerin",
          }
        ],
        correctAnswerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
        ]
      },
      {
        id: 1,
        description: "bla bla",
        feedback: "haha",
        answerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
          {
            id: 2,
            description: "oinvoerin",
          }
        ],
        correctAnswerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
        ]
      },
      {
        id: 1,
        description: "bla bla",
        feedback: "haha",
        answerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
          {
            id: 2,
            description: "oinvoerin",
          }
        ],
        correctAnswerList: [
          {
            id: 1,
            description: "oinvoerin",
          },
        ]
      },
    ]
  }


  findAll(): Observable <QuizModel[]> {
    return this.http.get<QuizModel[]>(this.url+ "/get_quizzes", this.tokenService.getHttpOptions())
  }

  findQuizById(id:number): Observable<QuizModel> {
    return this.http.get<QuizModel>(`${this.url}/${id}`, this.tokenService.getHttpOptions())
  }

  submitQuiz(submitAnswers: PostAnswer[], quizId: number) {
    return this.http.post<any>(this.tokenService.url + `/quiz/process/1/${quizId}`, submitAnswers, this.tokenService.getHttpOptions());
  }
}
