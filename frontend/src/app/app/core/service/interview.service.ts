import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { InterviewModel } from '../../shared/interview.model';

@Injectable()
export class InterviewService {

  private interviewerUrl;
  private interviewUrl;
  constructor(private http: HttpClient, private tokenService : HttpService) { 
    this.interviewerUrl = tokenService.url + '/interviewer';
    this.interviewUrl = tokenService.url + '/interview'
  }

  getAllInterviewes() {
    return this.http.get<any[]>(this.interviewerUrl + '/get_interviewer', this.tokenService.getHttpOptions());
  }
  createInterview(postData : InterviewModel){
    return this.http.post<any[]>(this.interviewUrl + '/create', postData ,this.tokenService.getHttpOptions());
  }

  getClientInterviews(clientId : number){
    return this.http.get<any[]>(this.interviewUrl + `/get_interview/${clientId}`)
  }
}
