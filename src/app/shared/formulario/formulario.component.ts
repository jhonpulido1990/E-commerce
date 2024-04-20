import { Component, Input, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  @Input() idProduct: string | null = null;
  private firestore = inject(Firestore)
  private _collection = collection(this.firestore, 'ListProduct')
  private fb = inject(FormBuilder);
  public myForm: FormGroup = this.fb.group({
    Name: ['', [Validators.required]],
    ImgUrl: ['', [Validators.required]],
    price: [0, [Validators.required]],
    percen: [0, [Validators.required]],
    Discount: [false],
    outsourcing: [false],
  });

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for(const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
        return 'Este campo es requerido';

        case 'minlength':
        return `Minimo ${ errors['minlength'].requiredLength } caracteres`
      }
    }
    return null;
  }

  onSave() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    addDoc(this._collection, this.myForm.value)
    this.myForm.reset({ price: 0, inStorage: 0 })
  }
}
