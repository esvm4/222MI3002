import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IB15 } from '../interfaces/IB15';

@Injectable({
  providedIn: 'root',
})
export class B15Service {
  private _url: string = '../assets/data/B15.json';
  constructor(private _http: HttpClient) {}
  getProducts(): Observable<IB15[]> {
    return this._http.get<IB15[]>(this._url);
  }
}
