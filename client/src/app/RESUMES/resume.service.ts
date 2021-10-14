import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(
      'https://careerfinderserver.herokuapp.com/api/resumes'
    );
  }

  insertData(data) {
    return this.httpClient.post(
      'https://careerfinderserver.herokuapp.com/api/resume/add',
      data
    );
  }

  getDataById(id) {
    return this.httpClient.get(
      'https://careerfinderserver.herokuapp.com/api/resume/' + id
    );
  }

  updateData(id, data) {
    return this.httpClient.put(
      'https://careerfinderserver.herokuapp.com/api/resume/edit/' + id,
      data
    );
  }

  deleteData(id) {
    return this.httpClient.delete(
      'https://careerfinderserver.herokuapp.com/api/resume/' + id
    );
  }
}
