import { Component } from '@angular/core';

@Component({
  selector: 'app-b12',
  templateUrl: './b12.component.html',
  styleUrls: ['./b12.component.css'],
})
export class B12Component {
  constructor() {}
  products = [
    {
      id: 'p1',
      name: 'Coca',
      price: 100,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdl2jx7zfbtwvr.cloudfront.net%2Fproduct_largeimages%2Fsoft7010_1.jpg&f=1&nofb=1&ipt=af4d3d30be412e94b986342724ba92cecdd767707f788c16ba8765d3e4931489&ipo=images',
    },
    {
      id: 'p2',
      name: 'Pepsi',
      price: 300,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.etilize.com%2FOriginal%2F1029886380.jpg&f=1&nofb=1&ipt=40b89e6705f589ada261a2b8345bf3f9c14083efc3befe68bbce597f82f7b056&ipo=images',
    },
    {
      id: 'p3',
      name: 'Sting',
      price: 300,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.hienthaoshop.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fsting-energy-drink-sleek-strawberry-flavor-can-of-330ml.jpg%3Fw%3D750%26ssl%3D1&f=1&nofb=1&ipt=347b05859b8135aa462cf05892f1b1873ab2676b04d537d56d83a2b28791889d&ipo=images',
    },
  ];
}
