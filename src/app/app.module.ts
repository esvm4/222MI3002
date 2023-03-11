import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';
import { BindingClassComponent } from './module01/binding-class/binding-class.component';
import { BindingStyleComponent } from './module01/binding-style/binding-style.component';
import { BindingEventComponent } from './module01/binding-event/binding-event.component';
import { BindingTwoWayComponent } from './module01/binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './module01/quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './module01/lunar-year/lunar-year.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    MyComponentComponent,
    BindingPropertyComponentComponent,
    IndexComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    QuadraticEquationComponent,
    LunarYearComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
