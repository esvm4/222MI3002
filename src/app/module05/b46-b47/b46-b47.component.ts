import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookAPIService } from '../services/books-api.service';
import { Book, IBook } from '../interfaces/ibook';

@Component({
  selector: 'app-b46-b47',
  templateUrl: './b46-b47.component.html',
  styleUrls: ['./b46-b47.component.css'],
})
export class B46B47Component {
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
  postBook() {
    this._service.postBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
