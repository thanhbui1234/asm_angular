import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
    productForm: FormGroup;
    constructor(
        private _fb: FormBuilder,
        private service: ProductsService,
        private _dialog: MatDialog
    ) {
        this.productForm = this._fb.group({
            code: '',
            name: '',
            price: '',
            releaseDate: '',
        });
    }
    closeDialog() {
        this._dialog.closeAll();
    }

    onFormSubmit = () => {
        this.service.addProduct(this.productForm.value).subscribe({
            next: (res) => {
                alert('Add Product Success');
            },
            error: (err) => {
                console.log(err.message);
            },
        });
    };
}
