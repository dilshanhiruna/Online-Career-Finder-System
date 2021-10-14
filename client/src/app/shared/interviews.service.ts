import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Interviews } from './interviews.model';
@Injectable({
  providedIn: 'root',
})
export class InterviewsService {
  //initialize objects
  selectedQuestion: Interviews = new Interviews();
  InterviewQuestion: Interviews[] = [];

  //URl
  readonly baseURL = 'https://careerfinderserver.herokuapp.com/Interviews';

  readonly URL_addInterview =
    'https://careerfinderserver.herokuapp.com/Interviews/add';

  readonly URL_getCommonInterviews =
    'https://careerfinderserver.herokuapp.com/Interviews/displayci';

  readonly URL_getInterviewtips =
    'https://careerfinderserver.herokuapp.com/Interviews/displayig';

  readonly URL_getQuestiopool =
    'https://careerfinderserver.herokuapp.com/Interviews/displayuserqp';

  readonly URL_getsavedQuestions =
    'https://careerfinderserver.herokuapp.com/Interviews/displaysq';

  readonly URL_update =
    'https://careerfinderserver.herokuapp.com/Interviews/update';

  readonly URL_getCurrentDataToupdate =
    'https://careerfinderserver.herokuapp.com/Interviews/getuersbyID';

  readonly URL_delete =
    'https://careerfinderserver.herokuapp.com/Interviews/delete';

  readonly URL_save =
    'https://careerfinderserver.herokuapp.com/Interviews/updatestatus';

  readonly URL_Notsave =
    'https://careerfinderserver.herokuapp.com/Interviews/reupdatestatus';

  //constructor
  constructor(private http: HttpClient) {}

  //using this postInterview methods users can add interview questions
  postInterview(In: Interviews) {
    return this.http.post(this.URL_addInterview, In);
  }

  //getCommonInterviewList method use to retrieve all common interview questions
  getCommonInterviewList() {
    return this.http.get(this.URL_getCommonInterviews);
  }

  //getInterviewGuidelineList method use to retrieve all interview tips
  getInterviewGuidelineList() {
    return this.http.get(this.URL_getInterviewtips);
  }

  //using this method users can view all the questions they have added
  getQuestionpool() {
    return this.http.get(this.URL_getQuestiopool);
  }

  //getsavedQuestions method used to retrieve all bookmarked questions
  getsavedQuestions() {
    return this.http.get(this.URL_getsavedQuestions);
  }

  //to update fetch the data into update form
  getCurrentData(_id: String): Observable<Interviews> {
    return this.http.get<Interviews>(
      this.URL_getCurrentDataToupdate + `/${_id}`
    );
  }

  //update data
  updateInterviews(id: String, In: Interviews): Observable<Interviews> {
    return this.http.put<Interviews>(this.URL_update + `/${In._id}`, In);
  }

  //delete question and answer
  deleteInterview(_id: string): Observable<Interviews> {
    return this.http.delete<Interviews>(this.URL_delete + `/${_id}`);
  }

  //save button
  saveQuestion(_id: string, In: Interviews): Observable<Interviews> {
    return this.http.put<Interviews>(this.URL_save + `/${_id}`, In);
  }

  //unsave
  unsaveQuestion(_id: string, In: Interviews): Observable<Interviews> {
    return this.http.put<Interviews>(this.URL_Notsave + `/${_id}`, In);
  }
}
