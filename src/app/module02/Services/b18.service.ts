import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class B18Service {
  private _url: string = '../assets/data/B18.json';
  constructor(private _http: HttpClient) {}
  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._url);
  }
}
