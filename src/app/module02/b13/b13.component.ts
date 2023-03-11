import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { B13Service } from '../Services/b13.service';

@Component({
  selector: 'app-b13',
  templateUrl: './b13.component.html',
  styleUrls: ['./b13.component.css'],
})
export class B13Component {
  public products: any;

  constructor(b13service: B13Service, private router: Router) {
    this.products = b13service.getProducts();
  }

  viewDetail(p: any) {
    this.router.navigate(['b13', p.id]);
  }
}
