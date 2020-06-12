import { Component, OnInit } from '@angular/core';
import * as pdt from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor() {
    this.products = pdt.products;
  }

  ngOnInit(): void {

  }

  shareProduct = (product): void => {
    alert(`${product.name} is now shared !!!`);
  }

  onNotify = (item): void => {
    alert(`You will be notified if the price for ${item.name} drops below 700 !!!`);
  }

}