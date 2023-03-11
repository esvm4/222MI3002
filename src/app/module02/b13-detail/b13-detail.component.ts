import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { B13Service } from '../Services/b13.service';

@Component({
  selector: 'app-b13-detail',
  templateUrl: './b13-detail.component.html',
  styleUrls: ['./b13-detail.component.css'],
})
export class B13DetailComponent {
  selectedProduct: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: B13Service,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = _fs.getProductDetail(id);
      }
    });
  }
  goBack() {
    this.router.navigate(['b13']);
  }
}
