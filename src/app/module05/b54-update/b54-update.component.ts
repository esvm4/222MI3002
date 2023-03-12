import { Component } from '@angular/core';
import { IB54, CB54 } from '../interfaces/b54';
import { B54Service } from '../services/b54.service';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-b54-update',
  templateUrl: './b54-update.component.html',
  styleUrls: ['./b54-update.component.css'],
})
export class B54UpdateComponent {
  selectedBook = new CB54();
  books: any;
  errMessage: string = '';

  constructor(
    private _service: B54Service,
    private _router: Router,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let isbn = param.get('isbn');

      if (isbn != null) {
        this.searchBook(isbn);
      }
    });
  }

  searchBook(isbn: string) {
    this._service.getBook(isbn).subscribe({
      next: (data) => {
        this.selectedBook = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  putBook() {
    this._service.putBook(this.selectedBook).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.goBack();
  }

  goBack() {
    this._router.navigate(['b54']);
  }
}
