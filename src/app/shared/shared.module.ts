import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Banner2Component } from './banner2/banner2.component';



@NgModule({
  declarations: [
    CardComponent,
    Banner2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    Banner2Component,
  ]
})
export class SharedModule { }
