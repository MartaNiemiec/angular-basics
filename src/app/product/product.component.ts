import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() productName: string; // productName can be receive from outside
  @Output() productClicked = new EventEmitter()  // @Output() to pass data to the outside

  ngOnInit() {
  }
  onClicked() {
    this.productClicked.emit();
  }

}
