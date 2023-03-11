import { Component } from '@angular/core';
import { B15Service } from '../Services/b15.service';

@Component({
  selector: 'app-b15',
  templateUrl: './b15.component.html',
  styleUrls: ['./b15.component.css'],
})
export class B15Component {
  products: any;
  constructor(private _service: B15Service) {
    this._service.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }
}
