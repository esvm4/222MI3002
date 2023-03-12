import { Component } from '@angular/core';
import { BookAPIService } from '../services/books-api.service';
import { IBook, Book } from '../interfaces/ibook';

@Component({
  selector: 'app-b48-b49',
  templateUrl: './b48-b49.component.html',
  styleUrls: ['./b48-b49.component.css'],
})
export class B48B49Component {
  book = new Book();
  books: any;
  errMessage: string = '';
  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putBook() {
    this._service.putBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
