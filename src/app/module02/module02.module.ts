import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index02Component } from './index02/index02.component';
import { B11Component } from './b11/b11.component';
import { B12Component } from './b12/b12.component';
import { B13Component } from './b13/b13.component';
import { B13DetailComponent } from './b13-detail/b13-detail.component';
import { B14Component } from './b14/b14.component';
import { B15Component } from './b15/b15.component';
import { B16Component } from './b16/b16.component';
import { B17Component } from './b17/b17.component';
import { B18Component } from './b18/b18.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
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
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Module02Module { }
