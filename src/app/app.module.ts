import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListCatalogueComponent } from './list-catalogue/list-catalogue.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';
import { BindingClassComponent } from './module01/binding-class/binding-class.component';
import { BindingStyleComponent } from './module01/binding-style/binding-style.component';
import { BindingEventComponent } from './module01/binding-event/binding-event.component';
import { BindingTwoWayComponent } from './module01/binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './module01/quadratic-equation/quadratic-equation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RoutingComponent,
    ListProductComponent,
    ListProduct2Component,
    ListCatalogueComponent,
    MyComponentComponent,
    BindingPropertyComponentComponent,
    IndexComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    QuadraticEquationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
