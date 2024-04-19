import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Banner2Component } from './banner2/banner2.component';
import { ProductsComponent } from './products/products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardComponent,
    Banner2Component,
    ProductsComponent,
    CardProductComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    CardComponent,
    Banner2Component,
    ProductsComponent,
    CardProductComponent,
    FormularioComponent,
  ]
})
export class SharedModule { }
