import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDetailsComponent } from './interviewer-details/interviewer-details.component';
import { InterviewService } from '../core/service/interview.service';
import { InterviewersComponent } from './interviewers.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InterviewerDetailsComponent,
    InterviewersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  providers: [
    InterviewService
  ]
})
export class InterviewersModule { 
}
