import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  
  uri = 'http://localhost:8000/users';
  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };


  signupUser(user: User){
   // let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8000/users/signup', user, {headers: headers});
    return this.http.post('http://localhost:8000/users/signup', user);
     //.map(res => res.json());
     
  };

  authenticateUser(user){
    //console.log(user);
    return this.http.post('http://localhost:8000/users/login', user);
  };

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //console.log(headers);
    return this.http.get('http://localhost:8000/users/profile',{headers:headers})
    //.pipe(map(res => res.json()));
  };

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  
/*
  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8000/users/authenticate', { username: username, password: password })
        .pipe(map(user => {

            // login successful if there's a jwt token in the response
            if (user && user.token) {

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}
*/


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  };
  logout() {
    this.authToken = null;
    //console.log("dataout");
    this.user = null;
    localStorage.clear();
    
  };

 /* public getUsers(){
     
   // return localStorage.getItem('id_token');
      return JSON.parse(localStorage.getItem('user'));
  
      
      
  }*/

  sendMsg(message){
    return this.http.post('http://localhost:8000/messages/message', message);
  };

  
}
 