import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product2',
  templateUrl: './list-product2.component.html',
  styleUrls: ['./list-product2.component.css'],
})
export class ListProduct2Component {
  Products = [
    {
      ProductID: 1,
      ProductName: 'Kem Duong Da',
      ProductPrice: 500,
      ProductImage: '../../assets/kem-duong-da.png',
    },
    {
      ProductID: 2,
      ProductName: 'Kem Chong Nang',
      ProductPrice: 500,
      ProductImage: '../../assets/kem-chong-nang.jpeg',
    },
    {
      ProductID: 3,
      ProductName: 'Kem 3',
      ProductPrice: 500,
      ProductImage: '../../assets/kem3.jpg',
    },
    {
      ProductID: 4,
      ProductName: 'Kem 4',
      ProductPrice: 200,
      ProductImage: '../../assets/kem4.jpg',
    },
    {
      ProductID: 5,
      ProductName: 'Kem 5',
      ProductPrice: 300,
      ProductImage: '../../assets/kem5.jpg',
    },
    {
      ProductID: 6,
      ProductName: 'Kem 6',
      ProductPrice: 400,
      ProductImage: '../../assets/kem6.jpg',
    },
    {
      ProductID: 7,
      ProductName: 'Kem 7',
      ProductPrice: 500,
      ProductImage: '../../assets/kem7.jpeg',
    },
    {
      ProductID: 8,
      ProductName: 'Kem 8',
      ProductPrice: 600,
      ProductImage: '../../assets/kem8.png',
    },
    {
      ProductID: 9,
      ProductName: 'Kem 9',
      ProductPrice: 700,
      ProductImage: '../../assets/kem9.jpeg',
    },
    {
      ProductID: 10,
      ProductName: 'Kem 10',
      ProductPrice: 800,
      ProductImage: '../../assets/kem10.jpeg',
    },
  ];
}
