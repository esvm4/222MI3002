import { Component } from '@angular/core';
import { BookAPIService } from '../services/books-api.service';

@Component({
  selector: 'app-b50-b51',
  templateUrl: './b50-b51.component.html',
  styleUrls: ['./b50-b51.component.css'],
})
export class B50B51Component {
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
  deleteBook(bookID: any) {
    this._service.deleteBook(bookID).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
