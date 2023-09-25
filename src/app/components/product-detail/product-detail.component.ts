import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/service/products.service';
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

    ngOnInit(): void {
        this.productService.getProductById(this.prodId).subscribe({
            next: (data) => {
                this.products = data;
                console.log(data);
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
