import { Component } from '@angular/core';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrls: ['./list-catalogue.component.css'],
})
export class ListCatalogueComponent {
  database = [
    {
      CateID: 'Cate1',
      CateName: 'Computers',
      Products: [
        {
          ProductID: 'P1',
          ProductName: 'Dell 113',
          ProductPrice: 1000,
        },
        {
          ProductID: 'P2',
          ProductName: 'Aspiron 123',
          ProductPrice: 2000,
        },
        {
          ProductID: 'P3',
          ProductName: 'Macbook 123',
          ProductPrice: 3000,
        },
        {
          ProductID: 'P4',
          ProductName: 'Sony 123',
          ProductPrice: 3000,
        },
        {
          ProductID: 'P5',
          ProductName: 'HP 123',
          ProductPrice: 3000,
        },
      ],
    },

    {
      CateID: 'Cate2',
      CateName: 'Mobiles',
      Products: [
        {
          ProductID: 'P1',
          ProductName: 'Google Pixel 7',
          ProductPrice: 499,
        },
        {
          ProductID: 'P2',
          ProductName: 'Samsung Galaxy A32 5G',
          ProductPrice: 419,
        },
        {
          ProductID: 'P3',
          ProductName: 'Samsung Galaxy S22 Ultra',
          ProductPrice: 1199,
        },
        {
          ProductID: 'P4',
          ProductName: 'Samsung Galaxy Z Fold 4',
          ProductPrice: 1699,
        },
        {
          ProductID: 'P5',
          ProductName: 'Samsung Galaxy Z Flip 3',
          ProductPrice: 999,
        },
      ],
    },
    {
      CateID: 'Cate3',
      CateName: 'Headphones',
      Products: [
        {
          ProductID: 'P1',
          ProductName: 'Bose QuietComfort 45',
          ProductPrice: 279,
        },
        {
          ProductID: 'P2',
          ProductName: 'Sony WH-1000XM4',
          ProductPrice: 259,
        },
        {
          ProductID: 'P3',
          ProductName: 'Bose Noise Cancelling Headphones 700',
          ProductPrice: 249,
        },
        {
          ProductID: 'P4',
          ProductName: 'Jabra Elite 45h',
          ProductPrice: 83.5,
        },
        {
          ProductID: 'P5',
          ProductName: 'Sony WH-1000XM5',
          ProductPrice: 398,
        },
      ],
    },
  ];
}
