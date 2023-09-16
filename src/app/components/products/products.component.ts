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

  changeTitle() {
    this.title = "New Title"
  }
  changeTitleByInput(event: any) {
    this.title = event.target.value;
  }
}
// Data Binding