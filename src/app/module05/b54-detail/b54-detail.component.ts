import { Component } from '@angular/core';
import { B54Service } from '../services/b54.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IB54, CB54 } from '../interfaces/b54';

@Component({
  selector: 'app-b54-detail',
  templateUrl: './b54-detail.component.html',
  styleUrls: ['./b54-detail.component.css'],
})
export class B54DetailComponent {
  errMessage: string = '';
  selectedBook: any;

  constructor(
    private _service: B54Service,
    private activateRoute: ActivatedRoute,
    private _router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let isbn = param.get('isbn');
      if (isbn != null) {
        this.searchBook(isbn);
      }
    });
  }

  ngOnInit(): void {}

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

  goBack() {
    this._router.navigate(['/b54']);
  }
}
