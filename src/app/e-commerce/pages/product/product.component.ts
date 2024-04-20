import { Component } from '@angular/core';

@Component({
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  idProduct!: string;

  getProduct(id: string) {
    this.idProduct = id
  }
}
