import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input() products!: IProduct[];
  @Output() onRemove = new EventEmitter()
  onClick(id: any) {
    this.onRemove.emit(id)
  }
}
