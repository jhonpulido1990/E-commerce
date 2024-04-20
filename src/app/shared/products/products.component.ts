import { Component, inject } from '@angular/core';
import { Product } from '../../e-commerce/interfaces/product.interfaces';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productos$: Observable<Product[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'ListProduct');
    this.productos$ = collectionData(itemCollection, {idField: 'id'}) as Observable<Product[]>;
  }

}
