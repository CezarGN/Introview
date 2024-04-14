import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  @Input() number: number = 0;

  constructor(private router: Router) { }

  backToQuizzes(): void {
    this.router.navigate(['/quizzes']);
  }
}
