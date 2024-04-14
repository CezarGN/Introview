import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuizService } from '../core/service/quiz.service';
import { QuizModel } from '../shared/quiz.model';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css'
})
export class QuizesComponent {
  constructor(private quizService: QuizService){

  }
  
  cards: QuizModel[] = [];
  
  ngOnInit() {
    this.quizService.findAll().subscribe((quizes) => this.cards = quizes);
  }
}
