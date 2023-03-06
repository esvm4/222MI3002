import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatalogueComponent } from './list-catalogue/list-catalogue.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ProductComponent } from './product/product.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';
import { BindingClassComponent } from './module01/binding-class/binding-class.component';
import { BindingStyleComponent } from './module01/binding-style/binding-style.component';
import { BindingEventComponent } from './module01/binding-event/binding-event.component';
import { BindingTwoWayComponent } from './module01/binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './module01/quadratic-equation/quadratic-equation.component';

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
  {
    path: 'binding-class',
    component: BindingClassComponent,
  },
  {
    path: 'binding-style',
    component: BindingStyleComponent,
  },
  {
    path: 'binding-event',
    component: BindingEventComponent,
  },
  {
    path: 'binding-two-way',
    component: BindingTwoWayComponent,
  },
  {
    path: 'quadratic-equation',
    component: QuadraticEquationComponent,
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
  BindingClassComponent,
  BindingStyleComponent,
  BindingEventComponent,
  BindingTwoWayComponent,
  QuadraticEquationComponent,
];
