import { Component } from '@angular/core';
import { B14Service } from '../Services/b14.service';

@Component({
  selector: 'app-b14',
  templateUrl: './b14.component.html',
  styleUrls: ['./b14.component.css'],
})
export class B14Component {
  public Categories: any;
  constructor(private b14Service: B14Service) {
    this.Categories = this.b14Service.getCategories();
  }
}
