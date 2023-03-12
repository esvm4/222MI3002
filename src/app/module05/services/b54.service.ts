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

  // GET all
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

  // GET by isbn
  getBook(isbn: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('http://localhost:3000/books/' + isbn, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as IB54),
        retry(3),
        catchError(this.handleError)
      );
  }

  // PUT: update a book
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>(
        'http://localhost:3000/books/',
        JSON.stringify(aBook),
        requestOptions
      )
      .pipe(
        map((res) => JSON.parse(res) as Array<IB54>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // POST: create a book
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
        'http://localhost:3000/books',
        JSON.stringify(aBook),
        requestOptions
      )
      .pipe(
        map((res) => JSON.parse(res) as Array<IB54>),
        retry(3),
        catchError(this.handleError)
      );
  }
}
