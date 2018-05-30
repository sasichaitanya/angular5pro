import { Component } from '@angular/core';

import { ProductService } from '../services/product.service';

@Component({
    selector: 'products',
    templateUrl: './products.html',
    styleUrls: ['./products.css']
}
)

export class ProductsComponent {
    indexedProducts: any;
    products: any;

    constructor(private productSvc: ProductService) {
        this.products = this.productSvc.getProducts();
        // console.log(this.products);

        this.indexedProducts = this.products.map(function (x, i) {
            return {
                index: i+1,
                brand: x.brand,
                model: x.model,
                price: x.price,
                quantity: x.quantity
            }
        })
        console.log(this.indexedProducts);

    }


}