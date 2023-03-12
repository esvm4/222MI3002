import { Observable, catchError, map, retry, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/ibook';

@Injectable({
  providedIn: 'root',
})
export class BookAPIService {
  constructor(private _http: HttpClient) {}

  // get all books
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
        map((res) => JSON.parse(res) as Array<IBook>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // handle error
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  // get book by ID
  getBook(BookID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('http://localhost:3000/books/' + BookID, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as IBook),
        retry(3),
        catchError(this.handleError)
      );
  }

  // post book
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>(
        'http://localhost:3000/books/',
        JSON.stringify(aBook),
        requestOptions
      )
      .pipe(
        map((res) => JSON.parse(res) as Array<IBook>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
