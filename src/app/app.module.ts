import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListCatalogueComponent } from './list-catalogue/list-catalogue.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
