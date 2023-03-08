import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-bai14',
  templateUrl: './bai14.component.html',
  styleUrls: ['./bai14.component.css'],
})
export class Bai14Component implements OnInit {
  constructor(private catalogService: CatalogService) {}

  public Categories: any;

  ngOnInit(): void {
    this.Categories = this.catalogService.getCategories();
  }
}
