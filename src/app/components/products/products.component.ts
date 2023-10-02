import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/service/products.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { async, lastValueFrom } from 'rxjs';
// metada
// @decorator -> typescript -> typeorm

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
    searchText: string = '';
    products: IProduct[] = [];
    product!: IProduct;
    productForm: FormGroup;

    constructor(
        //inject  tiem vao class a vao class b de class b co the su dung phuong thuc cua class a
        private productService: ProductsService,
        private _dialog: MatDialog,
        private router: Router,
        private _fb: FormBuilder
    ) {
        this.productForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            price: [0],
            code: '',
            releaseDate: '',
        });
        this.getProduct();
    }

    async getProduct() {
        try {
            this.products = await lastValueFrom(this.productService.getAll());
        } catch (error: any) {
            console.log('error', error.message);
        }
    }

    nivigateDelete() {
        this.router.navigate([`/admin`]);
    }
    openDialog() {
        const dialogRef = this._dialog.open(AddProductComponent);
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    console.log(val);
                }
            },
        });
    }

    async deleteProduct(id: number) {
        const confirm = window.confirm('Are you fucking sure?');
        if (confirm)
            try {
                await lastValueFrom(this.productService.removeProduct(id));
                console.log('hi');
            } catch (error: any) {
                console.log('error', error.message);
            }
    }
    onHandleRemove(id: any) {
        console.log(id);
        //
    }
}

// ng g s ten_service
