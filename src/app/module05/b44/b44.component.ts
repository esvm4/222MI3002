import { Component } from '@angular/core';
import { BookAPIService } from '../services/books-api.service';

@Component({
  selector: 'app-b44',
  templateUrl: './b44.component.html',
  styleUrls: ['./b44.component.css'],
})
export class B44Component {
  book: any;
  errMessage: string = '';
  constructor(private _service: BookAPIService) {}
  searchBook(bookID: string) {
    this._service.getBook(bookID).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
