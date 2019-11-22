import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  productID: number;
  constructor(private ProductsService: ProductsService,
              private route: ActivatedRoute,
              private location: Location ){ 
                this.getMyProduct();
              }

  ngOnInit() {
  }

  private getMyProduct(): void {
    this.productID = +this.route.snapshot.paramMap.get('id');
    this.ProductsService.getJsonOneProduct(this.productID).subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
        
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
