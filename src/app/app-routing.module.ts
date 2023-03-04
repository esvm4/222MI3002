import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatalogueComponent } from './list-catalogue/list-catalogue.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ProductComponent } from './product/product.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'list-product',
    component: ListProductComponent,
  },
  {
    path: 'list-product2',
    component: ListProduct2Component,
  },
  {
    path: 'list-catalogue',
    component: ListCatalogueComponent,
  },
  {
    path: 'my-component',
    component: MyComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponent = [
  ProductComponent,
  ListProductComponent,
  ListProduct2Component,
  ListCatalogueComponent,
  MyComponentComponent,
];
