import { Component } from '@angular/core';
import { QuizModel } from '../../shared/quiz.model';
import { QuizService } from '../../core/service/quiz.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PostAnswer, SubmitModel } from '../../shared/submit.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrl: './quiz-attempt.component.css'
})
export class QuizAttemptComponent {
  quiz?: QuizModel;
  submitModel?: SubmitModel;
  id? : number
  score: number = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.quizService.findQuizById(this.id!).subscribe((quiz) => {
      this.quiz = quiz
      this.initSubmitModel(this.quiz!);
    }
    );
  }
  onSubmit() {
    const submitAnswers = this.submitModel?.questions.map((q) => {
      return {
      questionId: q.questionId,
      answerIds: q.answers.filter((a) => a.selected).map((a) => a.answerId),
      } 
    });
    this.quizService.submitQuiz(submitAnswers as PostAnswer[], this.quiz!.id).subscribe(({score}) => {
      alert(score);
      this.router.navigate(['/quizes']);
  });
  }

  private initSubmitModel(quiz: QuizModel) {
    this.submitModel = {
      questions: []
    } 
    quiz.questionList.forEach((q) =>
      this.submitModel?.questions.push({
        questionId: q.id,
        answers: q.answerList.map((a) => { return {selected: false, answerId: a.id}})
      })
    ) 
  }

  setAnswer(i:number, j:number) {
    this.submitModel!.questions[i].answers[j].selected = !this.submitModel!.questions[i].answers[j].selected;
  }
}
