import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // các phương thức call api
import { Observable } from 'rxjs'; // sử lý bật đồng bộ
import { IProduct } from './../interfaces/product';
@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    API_URL = `https://6110f09bc38a0900171f0ed0.mockapi.io/product`;

    sharedData!: IProduct;
    constructor(private http: HttpClient) {}

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.API_URL);
    }
    removeProduct(id: number): Observable<IProduct> {
        return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
    }

    getProductById(id: number): Observable<IProduct> {
        return this.http.get<IProduct>(`${this.API_URL}/${id}`);
    }

    addProduct(product: IProduct[]): Observable<IProduct> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post<IProduct>(this.API_URL, product, { headers });
    }

    updateProduct(product: IProduct, id: number): Observable<IProduct> {
        console.log(product);

        return this.http.put<IProduct>(`${this.API_URL}/${id}`, product);
    }

    setData(data: IProduct) {
        this.sharedData = data;
    }

    getData() {
        return this.sharedData;
    }
}
