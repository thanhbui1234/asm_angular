import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/service/products.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

    constructor(
        private productService: ProductsService,
        private _dialog: MatDialog,
        private router: Router
    ) {
        this.productService.getAll().subscribe({
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

    nivigateDelete() {
        this.router.navigate([`/admin`]);
    }
    openDialog() {
        this._dialog.open(AddProductComponent);
    }

    removeProduct(id: any) {
        const confirm = window.confirm('Are you fucking sure?');
        if (confirm)
            this.productService.removeProduct(id).subscribe(
                () => {
                    console.log('Product deleted successfully');
                    // Navigate to the "products" page after successful deletion
                    this.router.navigate(['/admin']); // '/products' should match your route path
                },
                (err) => {
                    console.log(err.message);
                }
            );
    }
    onHandleRemove(id: any) {
        console.log(id);
        //
    }
}

// ng g s ten_service
