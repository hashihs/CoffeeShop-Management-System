import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Order } from '../models/order';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  //private cart;

  uri = 'http://localhost:8000/orders';

  constructor(private http: HttpClient) {}

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

  getOrder(){
    return this
    .http
    .get(`${this.uri}/`);
  }

  doOrder(order){
    //console.log("fsdr",order);
    return this.http.post('http://localhost:8000/orders/order', order);
  };

  deleteOrder(id: string): Observable<{}> {
    const url = `${this.uri}/${id}`;
    return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
  }

}