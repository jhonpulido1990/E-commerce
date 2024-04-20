import { Component, Input } from '@angular/core';
import { Product } from '../../e-commerce/interfaces/product.interfaces';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input()
  product!: Product;
}
