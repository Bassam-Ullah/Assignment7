import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    // console.log('getUsers called!!');
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`);
  }

  postUser(user: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(`${this.apiUrl}/users`, user);
    console.log(user);
  }

  updateUsers(user: UserModel): Observable<UserModel[]> {
    return this.http.put<UserModel[]>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete<UserModel[]>(`${this.apiUrl}/users/${id}`);
  }
}
