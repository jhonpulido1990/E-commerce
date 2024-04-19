import { Component } from '@angular/core';

interface Product {
  imgUrl: string;
  text: string;
  desc: number;
  price: number;
  percen: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public productos: Product[] = [
    {
      imgUrl: '../../../assets/images/splash.png',
      text: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      desc: 135,
      price: 150,
      percen: 10
    },{
      imgUrl: '../../../assets/images/shampoo.png',
      text: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      desc: 135,
      price: 150,
      percen: 10
    },
    {
      imgUrl: '../../../assets/images/cepillobamboo.png',
      text: 'organic bamboo toothbrush with soft natural bamboo bristles ',
      desc: 135,
      price: 150,
      percen: 10
    },
    {
      imgUrl: '../../../assets/images/splash.png',
      text: 'Sensitivity Relief Vanilla & Peppermint Natural Mouthwash',
      desc: 135,
      price: 150,
      percen: 10
    }
  ]

}
