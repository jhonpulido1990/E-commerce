import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../e-commerce/interfaces/product.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Output() idProduct = new EventEmitter()
  item$: Observable<Product[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'ListProduct');
    this.item$ = collectionData(itemCollection, {idField: 'id'}) as Observable<Product[]>;
  }

  delete(id: string) {
    const document = doc(this.firestore, 'ListProduct', id);
    deleteDoc(document);
  }

  searchProduct(id: string) {
    this.idProduct.emit(id)
  }
}
