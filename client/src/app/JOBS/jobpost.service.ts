import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobpost } from './jobpost.model';
import { Applicant } from './applicant.model';

@Injectable()
export class JobpostService {
  selectedJob!: Jobpost;
  jobs!: Jobpost[];
  applicant!: Applicant;
  userID = '1';

  readonly baseURLCJ =
    'https://careerfinderserver.herokuapp.com/findjobs/createjob';
  readonly baseURLGA = 'https://careerfinderserver.herokuapp.com/findjobs/jobs';
  readonly baseURLGAMY =
    'https://careerfinderserver.herokuapp.com/findjobs/myjobs';
  readonly baseURLPUBLISH =
    'https://careerfinderserver.herokuapp.com/findjobs/jobs/publish';
  readonly baseURLNA =
    'https://careerfinderserver.herokuapp.com/findjobs/newapplicant';

  constructor(private http: HttpClient) {}

  postJob(job: Jobpost) {
    return this.http.post(this.baseURLCJ, job);
  }
  getalljobs() {
    return this.http.get(this.baseURLGA);
  }
  getAJobPost(jobID: string) {
    return this.http.get(this.baseURLGA + `/${jobID}`);
  }
  updateJobPost(job: Jobpost, jobID: string) {
    return this.http.put(this.baseURLGA + `/${jobID}`, job);
  }
  getmyalljobs() {
    return this.http.get(this.baseURLGAMY + `/${this.userID}`);
  }
  updatePublish(id, value) {
    return this.http.put(this.baseURLPUBLISH + `/${id}`, value);
  }
  deleteJobPost(jobID: string) {
    return this.http.delete(this.baseURLGA + `/${jobID}`);
  }
  newApplicant(jobID: string, value: any) {
    return this.http.put(this.baseURLNA + `/${jobID}`, value);
  }
}
