import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/service/products.service';

import { last, lastValueFrom } from 'rxjs';
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
    prodId: any;
    products: any;
    constructor(
        private router: ActivatedRoute,
        private productService: ProductsService
    ) {
        this.router.params.subscribe((params) => {
            this.prodId = params['idP'];
        });
    }

    async ngOnInit() {
        if (this.prodId) {
            try {
                this.products = await lastValueFrom(
                    this.productService.getProductById(this.prodId)
                );
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }
}
