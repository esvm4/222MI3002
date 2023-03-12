import { Component } from '@angular/core';
import { B54Service } from '../services/b54.service';

@Component({
  selector: 'app-b54',
  templateUrl: './b54.component.html',
  styleUrls: ['./b54.component.css'],
})
export class B54Component {
  books: any;
  errMessage: string = '';
  constructor(private _service: B54Service) {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  viewDetail() {}
  createBook() {}

  updateBook() {}

  deleteBook() {}
}
