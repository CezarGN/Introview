import { Component } from '@angular/core';
import { InterviewService } from '../core/service/interview.service';

@Component({
  selector: 'app-interviewers',
  templateUrl: './interviewers.component.html',
  styleUrl: './interviewers.component.css'
})
export class InterviewersComponent {
  constructor(private interviewService: InterviewService) {}

  interviewers : any[] = []
  ngOnInit() {
    this.interviewService.getAllInterviewes().subscribe((ceva: any[]) => {
      this.interviewers = ceva;
    })
  }
}
