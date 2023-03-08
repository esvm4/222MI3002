import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas = [
    {
      Cateid: 'cate1',
      CateName: 'Coke',
      Products: [
        {
          ProductId: 'p1',
          ProductName: 'Coca',
          Price: 100,
          Image:
            'https://www.degrocery.com/de-grocery/2019/11/e0c195ca-cdff-4ea6-8662-eaee8f50b839.jpeg',
        },
        {
          ProductId: 'p2',
          ProductName: 'Pepsi',
          Price: 300,
          Image:
            'https://beverages2u.com/wp-content/uploads/2019/05/0001200010010_B.jpg',
        },
        {
          ProductId: 'p3',
          ProductName: 'Sting',
          Price: 200,
          Image:
            'https://image3.mouthshut.com/images/ImagesR/2018/3/Sting-Energy-Drink-925923531-639101056-2.jpg',
        },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Beer',
      Products: [
        {
          ProductId: 'p4',
          ProductName: 'Heineken',
          Price: 500,
          Image:
            'https://assets.iceland.co.uk/i/iceland/Heineken_650m_Lager_67963.jpg?$pdpzoom$',
        },
        {
          ProductId: 'p5',
          ProductName: '333',
          Price: 400,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0367%2F6189%2F4956%2Fproducts%2Fsesofoods-bia-333_1200x1200.jpg%3Fv%3D1601124070&f=1&nofb=1&ipt=a209b77ba014ab5350f09b459c4bb1263e2968dff950bdd6b44097f10ab733d4&ipo=images',
        },
        {
          ProductId: 'p6',
          ProductName: 'Sai Gon',
          Price: 600,
          Image:
            'https://www.zing-asia.co.uk/26082-large_default/bia-saigon-export-original-4-9-percent-vol-355ml-vietnamese-export-saigon-beer.jpg',
        },
      ],
    },
  ];
  constructor() {}

  getCategories() {
    return this.datas;
  }
}
