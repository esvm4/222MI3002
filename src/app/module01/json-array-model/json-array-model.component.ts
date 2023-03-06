import { Component } from '@angular/core';

@Component({
  selector: 'app-json-array-model',
  templateUrl: './json-array-model.component.html',
  styleUrls: ['./json-array-model.component.css'],
})
export class JsonArrayModelComponent {
  products = [
    {
      id: 'p1',
      name: 'Coca',
      price: 100,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J9Xv1GcDcf6GHoF9KNHg7gHaLI%26pid%3DApi&f=1&ipt=d1438defc2a90c078ee9a20f6873e03de99c565f4aecce26a0aee68de89a4c4e&ipo=images',
    },
    {
      id: 'p2',
      name: 'Pepsi',
      price: 300,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H-rlGJ6t9cbyfJKDXBplFgHaI5%26pid%3DApi&f=1&ipt=edcdde00061c6e9735b3a5ceceb9432b5849e98294c8f1bb2619234f9eff1d29&ipo=images',
    },
    {
      id: 'p3',
      name: 'Sting',
      price: 200,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage3.mouthshut.com%2Fimages%2Fimagesp%2F925947743s.jpg&f=1&nofb=1&ipt=f33b955ed65fe9e3a3ddae0a68663449908e7818156c8921f9b815451e2fb63f&ipo=images',
    },
  ];
}
