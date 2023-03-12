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
import { Index05Component } from './module05/index05/index05.component';
import { B43Component } from './module05/b43/b43.component';
import { B44Component } from './module05/b44/b44.component';
import { B46B47Component } from './module05/b46-b47/b46-b47.component';
import { B48B49Component } from './module05/b48-b49/b48-b49.component';
import { B50B51Component } from './module05/b50-b51/b50-b51.component';
import { B54Component } from './module05/b54/b54.component';
import { B54DetailComponent } from './module05/b54-detail/b54-detail.component';
import { B54UpdateComponent } from './module05/b54-update/b54-update.component';
import { B54CreateComponent } from './module05/b54-create/b54-create.component';

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
    path: 'index05',
    component: Index05Component,
  },
  {
    path: 'b43',
    component: B43Component,
  },
  {
    path: 'b44',
    component: B44Component,
  },
  {
    path: 'b46-47',
    component: B46B47Component,
  },
  {
    path: 'b48-49',
    component: B48B49Component,
  },
  {
    path: 'b50-51',
    component: B50B51Component,
  },
  {
    path: 'b54',
    component: B54Component,
  },
  {
    path: 'b54/:isbn',
    component: B54DetailComponent,
  },
  {
    path: 'b54-edit/:isbn',
    component: B54UpdateComponent,
  },
  {
    path: 'b54-create',
    component: B54CreateComponent,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
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
  Index05Component,
  B43Component,
  B44Component,
  B46B47Component,
  B48B49Component,
  B50B51Component,
  B54Component,
  B54DetailComponent,
  B54UpdateComponent,
  B54CreateComponent,
];
