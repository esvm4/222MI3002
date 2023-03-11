import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class B14Service {
  Categories = [
    {
      CateID: 'cate1',
      CateName: 'Coke',
      Products: [
        {
          ProductID: 'p1',
          ProductName: 'Coca',
          Price: 100,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdl2jx7zfbtwvr.cloudfront.net%2Fproduct_largeimages%2Fsoft7010_1.jpg&f=1&nofb=1&ipt=af4d3d30be412e94b986342724ba92cecdd767707f788c16ba8765d3e4931489&ipo=images',
        },
        {
          ProductID: 'p2',
          ProductName: 'Pepsi',
          Price: 300,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.etilize.com%2FOriginal%2F1029886380.jpg&f=1&nofb=1&ipt=40b89e6705f589ada261a2b8345bf3f9c14083efc3befe68bbce597f82f7b056&ipo=images',
        },
        {
          ProductID: 'p3',
          ProductName: 'Sting',
          Price: 200,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.hienthaoshop.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsting-energy-drink-sleek-strawberry-flavor-can-of-330ml.jpg%3Fw%3D750%26ssl%3D1&f=1&nofb=1&ipt=347b05859b8135aa462cf05892f1b1873ab2676b04d537d56d83a2b28791889d&ipo=images',
        },
      ],
    },
    {
      CateID: 'cate2',
      CateName: 'Beer',
      Products: [
        {
          ProductID: 'p4',
          ProductName: 'Heineken',
          Price: 500,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs32891.pcdn.co%2Fwp-content%2Fuploads%2F2015%2F05%2FCEX4AE-e1432131429123.jpg&f=1&nofb=1&ipt=ecd0a47e5683783b5bdc1e8728e262d667c88433ca8f2c553ced5eee72139978&ipo=images',
        },
        {
          ProductID: 'p5',
          ProductName: 'Budweiser',
          Price: 400,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.pkWrjvHy3CBt80BszacYuAHaHa%26pid%3DApi&f=1&ipt=f7886c21adb8a7aafebc4ee4b11aca6c7d1efe6c455aa8c0c4121554b1f2018d&ipo=images',
        },
        {
          ProductID: 'p6',
          ProductName: 'Corona',
          Price: 600,
          Image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lJAS5LdcjOw_sry7nBRkXwHaHa%26pid%3DApi&f=1&ipt=e9b1fb5aacd6eb0910a07703af02d19801a03c468d86cfd4ff5c3b0d2351e73d&ipo=images',
        },
      ],
    },
  ];

  constructor() {}

  getCategories() {
    return this.Categories;
  }
}
