import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() productName: string; // productName can be receive from outside
  @Output() productClicked = new EventEmitter()  // @Output() to pass data to the outside

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onClicked() {
    // this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);
  }

}
