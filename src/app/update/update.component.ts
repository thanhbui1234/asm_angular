import { IProduct } from './../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
    product!: IProduct;
    productForm = this.formBuilder.group({
        code: ['', Validators.required],
        name: ['', Validators.required],
        price: [0, Validators.required],
        releaseDate: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductsService,
        private router: ActivatedRoute,
        private navigate: Router
    ) {}
    async ngOnInit() {
        const { idUp } = this.router.snapshot.params;
        if (idUp) {
            try {
                this.product = await lastValueFrom(
                    this.productService.getProductById(idUp)
                );
                this.productForm.patchValue(this.product as any);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }
    async onFormSubmit() {
        const productUpdate = {
            idUp: this.product.id,
            ...this.productForm.value,
        };
        console.log(productUpdate);

        if (productUpdate) {
            try {
                await lastValueFrom(
                    this.productService.updateProduct(
                        productUpdate as IProduct,
                        this.product.id as any
                    )
                );

                this.navigate.navigate(['admin']);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }
}
