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
import { LunarYearComponent } from './module01/lunar-year/lunar-year.component';
import { JsonObjectModelComponent } from './module01/json-object-model/json-object-model.component';
import { JsonArrayModelComponent } from './module01/json-array-model/json-array-model.component';
import { ServiceProductImageEventComponent } from './module01/service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './module01/service-product-image-event-detail/service-product-image-event-detail.component';
import { Bai14Component } from './module01/bai14/bai14.component';
import { Index02Component } from './module02/index02/index02.component';
import { B11Component } from './module02/b11/b11.component';

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
  {
    path: 'lunar-year',
    component: LunarYearComponent,
  },
  {
    path: 'json-object-model',
    component: JsonObjectModelComponent,
  },
  {
    path: 'json-array-model',
    component: JsonArrayModelComponent,
  },
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEventComponent,
  },
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetailComponent,
  },
  {
    path: 'bai14',
    component: Bai14Component,
  },
  {
    path: 'index02',
    component: Index02Component,
  },
  {
    path: 'b11',
    component: B11Component,
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
  LunarYearComponent,
  JsonObjectModelComponent,
  JsonArrayModelComponent,
  ServiceProductImageEventComponent,
  ServiceProductImageEventDetailComponent,
  Bai14Component,
  Index02Component,
  B11Component,
];
