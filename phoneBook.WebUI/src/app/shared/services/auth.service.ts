import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppGlobals } from '../models/appglobals';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private globals: AppGlobals) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.globals.apiBaseUrl}/api/auth/signin`, {username: username, password: password})
      .pipe(
        map(result => {
          console.log(result.accessToken);
          console.log(result.user);
          localStorage.setItem('access_token', result.accessToken);
          localStorage.setItem('currentUer', result.user);
          this.globals.loggedInUser = result.user.username;
          this.globals.loggedInUserId = result.user.id;
          return result;
        })
      );
  }

  singup(username: string, password: string, name: string): Observable<boolean> {
    return this.http.post<{success: boolean, message: string}>(`${this.globals.apiBaseUrl}/api/auth/signup`, {username: username, password: password, name})
      .pipe(
        map(result => {
          console.log(result.success +  result.message);
          if(result.success === true)
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('currentUer');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}