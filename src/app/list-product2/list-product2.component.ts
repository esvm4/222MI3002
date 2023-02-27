import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product2',
  templateUrl: './list-product2.component.html',
  styleUrls: ['./list-product2.component.css'],
})
export class ListProduct2Component {
  Products: any;

  constructor(private pservice: ProductService) {
    this.Products = this.pservice.getProducts();
  }
}
