import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        SearchBoxPipe,
        ChangeNumberToTextPipe,
        ProductEditComponent,
        NotFoundComponent,
        ProductUpdateComponent,
        AddProductComponent,
        HomeComponent,
        HeaderComponent,
        ProductDetailComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
