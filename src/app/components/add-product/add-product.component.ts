import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
    productForm: FormGroup;
    constructor(private _fb: FormBuilder) {
        this.productForm = this._fb.group({
            email: '',
            password: '',
        });
    }
    onFormSubmit = () => {
        console.log(this.productForm.value);
    };
}
