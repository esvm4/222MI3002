import { Component } from '@angular/core';
import { ProductHttpService } from '../Services/product-http.service';

@Component({
  selector: 'app-b16',
  templateUrl: './b16.component.html',
  styleUrls: ['./b16.component.css'],
})
export class B16Component {
  products: any;
  errMessage: string = '';
  constructor(_service: ProductHttpService) {
    _service.getProductsHandleError().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
