import { Component } from '@angular/core';
import { Product } from '../../e-commerce/interfaces/product.interfaces';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public productos: Product[] = [
    {
      ImgUrl: '../../../assets/images/splash.png',
      Name: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      Discount: true,
      price: 150,
      percen: 10,
      outsourcing: true
    },{
      ImgUrl: '../../../assets/images/shampoo.png',
      Name: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      Discount: true,
      price: 150,
      percen: 10,
      outsourcing: true
    },
    {
      ImgUrl: '../../../assets/images/cepillobamboo.png',
      Name: 'organic bamboo toothbrush with soft natural bamboo bristles ',
      Discount: true,
      price: 150,
      percen: 10,
      outsourcing: true
    },
    {
      ImgUrl: '../../../assets/images/splash.png',
      Name: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      Discount: true,
      price: 150,
      percen: 10,
      outsourcing: true
    }
  ]

}
