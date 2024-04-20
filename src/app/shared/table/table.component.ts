import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../e-commerce/interfaces/product.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  item$: Observable<Product[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'ListProduct');
    this.item$ = collectionData(itemCollection, {idField: 'id'}) as Observable<Product[]>;
  }
}
