import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../core/service/interview.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent{

  constructor(private interviewService : InterviewService){}

  selected: Date = new Date("2024-04-20");
  

  
}
