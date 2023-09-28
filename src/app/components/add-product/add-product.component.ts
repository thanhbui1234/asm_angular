import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { IProduct } from 'src/app/interfaces/product';
@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
    product!: IProduct;
    productForm: FormGroup;
    constructor(
        private _fb: FormBuilder,
        private service: ProductsService,
        private _dialogRef: MatDialogRef<AddProductComponent>
    ) {
        this.productForm = this._fb.group({
            code: '',
            name: '',
            price: '',
            releaseDate: '',
        });
    }
    closeDialog() {
        this._dialogRef.close(false);
    }

    onFormSubmit = () => {
        this.service.addProduct(this.productForm.value).subscribe({
            next: (res) => {
                alert('Add Product Success');
                this._dialogRef.close(true);
            },
            error: (err) => {
                console.log(err.message);
            },
        });
    };

    OnInit() {
        this.product = this.service.getData();
        console.log(this.product);
    }
}
