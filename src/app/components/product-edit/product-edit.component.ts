import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent {
    constructor(private router: Router) {}

    navigateToAbout() {
        this.router.navigate(['hello']);
    }

    @Input() products!: IProduct[];
    @Output() onRemove = new EventEmitter();
    onClick(id: any) {
        this.onRemove.emit(id);
        // this.navigateToAbout();
    }
}
