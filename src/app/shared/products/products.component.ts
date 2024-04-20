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
      Discount: '135',
      price: 150,
      percen: 10
    },{
      ImgUrl: '../../../assets/images/shampoo.png',
      Name: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      Discount: '135',
      price: 150,
      percen: 10
    },
    {
      ImgUrl: '../../../assets/images/cepillobamboo.png',
      Name: 'organic bamboo toothbrush with soft natural bamboo bristles ',
      Discount: '135',
      price: 150,
      percen: 10
    },
    {
      ImgUrl: '../../../assets/images/splash.png',
      Name: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      Discount: '135',
      price: 150,
      percen: 10
    }
  ]

}
