import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string;
  public products: Array<IProduct> = [];
  constructor(private http: HttpClient,
    private firestore: AngularFirestore
    ) {
    this.url = 'http://localhost:3000/products';
  }

  getJsonProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.url);
  }

  setJsonProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.post<Array<IProduct>>(this.url, product);
  }

  deleteJsonProducts(id: number): Observable<Array<IProduct>> {
    return this.http.delete<Array<IProduct>>(`${this.url}/${id}`);
  }

  updateJsonProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.put<Array<IProduct>>(`${this.url}/${product.id}`, product);
  }

  getProducts(): Array<IProduct> {
    return this.products;
  }

  setProducts(product: IProduct): void {
    this.products.push(product);
  }

  deleteProducts(id: string): void {
    const index = this.products.findIndex(prod => prod.id === id);
    this.products.splice(index, 1);
  }

  updateProducts(product: IProduct): void {
    const index = this.products.findIndex(prod => prod.id === product.id);
    this.products.splice(index, 1, product);
  }

  getData(): any {
    return this.firestore.collection('users').snapshotChanges();
  }
}
