import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index02Component } from './index02/index02.component';
import { B11Component } from './b11/b11.component';
import { B12Component } from './b12/b12.component';
import { B13Component } from './b13/b13.component';
import { B13DetailComponent } from './b13-detail/b13-detail.component';



@NgModule({
  declarations: [
    Index02Component,
    B11Component,
    B12Component,
    B13Component,
    B13DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Module02Module { }
