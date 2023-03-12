import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IB54 } from '../interfaces/b54';

@Injectable({
  providedIn: 'root',
})
export class B54Service {
  constructor(private _http: HttpClient) {}
  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('http://localhost:3000/books', requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IB54>),
        retry(3),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
