import { Component, Input } from '@angular/core';

interface Product {
  imgUrl: string;
  text: string;
  desc: number;
  price: number;
  percen: number;
}


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input()
  product!: Product;
}
