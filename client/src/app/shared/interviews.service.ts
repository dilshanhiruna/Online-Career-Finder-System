import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Interviews } from './interviews.model';
@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  //initialize objects
  selectedQuestion: Interviews = new Interviews();
  InterviewQuestion: Interviews[] = [];

  //URl
  readonly baseURL = "http://localhost:5000/Interviews";

  readonly URL_addInterview = "http://localhost:5000/Interviews/add";

  readonly URL_getCommonInterviews = "http://localhost:5000/Interviews/displayci";

  readonly URL_getInterviewtips = "http://localhost:5000/Interviews/displayig";

  readonly URL_getQuestiopool = "http://localhost:5000/Interviews/displayuserqp";

  readonly URL_getsavedQuestions = "http://localhost:5000/Interviews/displaysq";

  readonly URL_update = "http://localhost:5000/Interviews/update";

  readonly URL_getCurrentDataToupdate = "http://localhost:5000/Interviews/getuersbyID";

  //constructor
  constructor(private http: HttpClient) { }

  //using this postInterview methods users can add interview questions
  postInterview(In : Interviews){
    return this.http.post(this.URL_addInterview,In)
  }

  //getCommonInterviewList method use to retrieve all common interview questions
  getCommonInterviewList(){
    return this.http.get(this.URL_getCommonInterviews);
  }

  //getInterviewGuidelineList method use to retrieve all interview tips
  getInterviewGuidelineList(){
    return this.http.get(this.URL_getInterviewtips);
  }

  //using this method users can view all the questions they have added
  getQuestionpool(){
    return this.http.get(this.URL_getQuestiopool);
  }

  //getsavedQuestions method used to retrieve all bookmarked questions
  getsavedQuestions(){
    return this.http.get(this.URL_getsavedQuestions);
  }
  //to update
  getCurrentData(_id:String): Observable<Interviews>{
    return this.http.get<Interviews>(this.URL_getCurrentDataToupdate+`/${_id}`)
  }
  putInterviews(In : Interviews){
    return this.http.put(this.URL_update + `/${In._id}`, In);
  }

  deleteInterview(_id : string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  saveQuestion(In : Interviews){
    return this.http.put(this.URL_update + '/${In._id}',In);
  }
}
