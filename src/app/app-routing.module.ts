import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatalogueComponent } from './list-catalogue/list-catalogue.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ProductComponent } from './product/product.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';

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
    path: 'index-component',
    component: IndexComponent,
  },
  {
    path: 'my-component',
    component: MyComponentComponent,
  },
  {
    path: 'binding-property-component',
    component: BindingPropertyComponentComponent,
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
  IndexComponent,
  MyComponentComponent,
  BindingPropertyComponentComponent,
];
