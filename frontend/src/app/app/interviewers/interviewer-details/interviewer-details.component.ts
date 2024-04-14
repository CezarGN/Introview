import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../core/service/http.service';
import { InterviewService } from '../../core/service/interview.service';
import { InterviewModel } from '../../shared/interview.model';

@Component({
  selector: 'app-interviewer-details',
  templateUrl: './interviewer-details.component.html',
  styleUrl: './interviewer-details.component.css'
})
export class InterviewerDetailsComponent {
  constructor(private router : Router, private interviewService : InterviewService){}
  @Input() name : string = '';
  @Input() description : string = '';

  postData: InterviewModel = {
    client: {
        id: 1,
        user: {
            id: 1,
            username: "Cezar",
            password: "$2a$10$kNJPP7wEtcUoDp4SM3Mrye2/F6xRMKYztHoCOthqHtlNSudstVOD.",
            roles: [
                {
                    id: 1,
                    name: "CLIENT"
                }
            ]
        },
        scoreList: [],
        interviewList: []
    },
    interviewer: {
        id: 1,
        user: {
            id: 2,
            username: "utilizatorTest",
            password: "$2a$10$jvE1SkqnAlcfEk1rZ7N19.s9F/n8A5nnVgZRaDS24jB5JbbnYKuRu",
            roles: [
                {
                    id: 1,
                    name: "CLIENT"
                }
            ]
        },
        domain: "OOP",
        interviewList: []
    },
    description: "descriptionInterview1",
    date: "2024-04-20"
};
  createInterview(){

    this.interviewService.createInterview(this.postData);
  }
}
