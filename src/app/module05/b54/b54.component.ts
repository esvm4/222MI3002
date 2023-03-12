import { Component } from '@angular/core';
import { B54Service } from '../services/b54.service';
import { Router } from '@angular/router';
import { IB54, CB54 } from '../interfaces/b54';

@Component({
  selector: 'app-b54',
  templateUrl: './b54.component.html',
  styleUrls: ['./b54.component.css'],
})
export class B54Component {
  books: any;
  errMessage: string = '';
  constructor(private _service: B54Service, private _router: Router) {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  viewDetail(book: any) {
    this._router.navigate(['b54', book.isbn]);
  }
  createBook() {}

  updateBook(book: any) {
    this._router.navigate(['b54/edit', book.isbn]);
  }

  deleteBook(book: any) {}
}
