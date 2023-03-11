import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './module01/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './module01/binding-property-component/binding-property-component.component';
import { IndexComponent } from './module01/index/index.component';
import { BindingClassComponent } from './module01/binding-class/binding-class.component';
import { BindingStyleComponent } from './module01/binding-style/binding-style.component';
import { BindingEventComponent } from './module01/binding-event/binding-event.component';
import { BindingTwoWayComponent } from './module01/binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './module01/quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './module01/lunar-year/lunar-year.component';
import { Index02Component } from './module02/index02/index02.component';
import { B11Component } from './module02/b11/b11.component';
import { B12Component } from './module02/b12/b12.component';
import { B13Component } from './module02/b13/b13.component';
import { B13DetailComponent } from './module02/b13-detail/b13-detail.component';
import { B14Component } from './module02/b14/b14.component';
import { B15Component } from './module02/b15/b15.component';
import { B16Component } from './module02/b16/b16.component';
import { B17Component } from './module02/b17/b17.component';
import { B18Component } from './module02/b18/b18.component';
import { NotFoundComponent } from './module02/not-found/not-found.component';
import { Index03Component } from './module03/index03/index03.component';

const routes: Routes = [
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
    path: 'index02',
    component: Index02Component,
  },
  {
    path: 'b11',
    component: B11Component,
  },
  {
    path: 'b12',
    component: B12Component,
  },
  {
    path: 'b13',
    component: B13Component,
  },
  {
    path: 'b13/:id',
    component: B13DetailComponent,
  },
  {
    path: 'b14',
    component: B14Component,
  },
  {
    path: 'b15',
    component: B15Component,
  },
  {
    path: 'b16',
    component: B16Component,
  },
  {
    path: 'b17',
    component: B17Component,
  },
  {
    path: 'b18',
    component: B18Component,
  },
  {
    path: 'index03',
    component: Index03Component,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponent = [
  IndexComponent,
  MyComponentComponent,
  BindingPropertyComponentComponent,
  BindingClassComponent,
  BindingStyleComponent,
  BindingEventComponent,
  BindingTwoWayComponent,
  QuadraticEquationComponent,
  LunarYearComponent,
  Index02Component,
  B11Component,
  B12Component,
  B13Component,
  B13DetailComponent,
  B14Component,
  B15Component,
  B16Component,
  B17Component,
  B18Component,
  NotFoundComponent,
  Index03Component,
];
