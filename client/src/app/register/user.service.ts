import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise'

import { User } from './user.model';
import { LoginResponse } from './login-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser!: User;
  user!: User[];
  readonly baseURL = 'http://localhost:5000/api/v1/auth/register';

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post<LoginResponse>(this.baseURL, user);
  }
}
