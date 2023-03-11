import { Component } from '@angular/core';

@Component({
  selector: 'app-b11',
  templateUrl: './b11.component.html',
  styleUrls: ['./b11.component.css'],
})
export class B11Component {
  product = {
    id: 123,
    name: 'Thuốc trị xàm',
    price: 300,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OlN9pbIZvMw_07jt2YWJfwHaLH%26pid%3DApi&f=1&ipt=09d9ea5c511f911a2353adf341ec5fba24f97ebf65381a8ce3cd6ce10cfbf6de&ipo=images',
  };
}
