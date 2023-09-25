import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
const routes: Routes = [
    { path: 'admin', component: ProductsComponent },
    { path: 'hello', component: ProductUpdateComponent },
    { path: 'product/:idP', component: ProductDetailComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
