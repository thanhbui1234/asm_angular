import { IProduct } from './../../interfaces/product';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    products: IProduct[] = [];

    constructor(private productsService: ProductsService) {
        this.productsService.getAll().subscribe({
            next: (data) => {
                this.products = data;
            },
            error: (error) => {
                console.log('error', error.message);
            },
            complete: () => {
                console.log('complete');
            },
        });
    }
}
