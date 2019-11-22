import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<IProduct> = [];

  constructor(private ProductsService: ProductsService) {
    this.getPageProducts();
   }

  ngOnInit() {
  }

  private getPageProducts(): void{
    this.ProductsService.getJsonProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }

}
