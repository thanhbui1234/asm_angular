import { Component } from '@angular/core';

// metada
// @decorator -> typescript -> typeorm

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title: string = "Tiêu đề";
  product = {
    name: "Dat"
  }
  changeTitle() {
    this.title = "New Title"
  }
  changeTitleByInput(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
  }
}
// https://github.com/datlt2306/web208/tree/WD18101
// Data Binding