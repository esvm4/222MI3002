import { Component } from '@angular/core';
import { B18Service } from '../Services/b18.service';

@Component({
  selector: 'app-b18',
  templateUrl: './b18.component.html',
  styleUrls: ['./b18.component.css'],
})
export class B18Component {
  customers: any;
  constructor(private _service: B18Service) {
    this._service.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
    });
  }
}
