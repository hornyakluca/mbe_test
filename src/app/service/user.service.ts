import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string ='https://nettuts.hu/jms/reka/';
  entityName: string ='users';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiUrl}${this.entityName}`,
      user
    );
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}${this.entityName}/${user.id}`,
      user
    );
  }

  remove(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}${this.entityName}/${id}`);
  }




}
