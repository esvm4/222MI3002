import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  Products = {
    ProductId: 123,
    ProductName: 'Atomic Habits',
    ProductPrice: 300,
    ProductImage: '../assets/atomic-habits.jpg',
  };
}
