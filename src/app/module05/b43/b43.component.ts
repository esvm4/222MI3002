import { Component } from '@angular/core';
import { BookAPIService } from '../services/books-api.service';

@Component({
  selector: 'app-b43',
  templateUrl: './b43.component.html',
  styleUrls: ['./b43.component.css'],
})
export class B43Component {
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
}
