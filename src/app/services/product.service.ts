import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {
    producList:any;
    constructor(){
        this.producList=[
            { brand: 'Apple', model: 'iPhonex', price: 100000, quantity: 5 },
            { brand: 'Samsung', model: 'iPhonex', price: 100000, quantity: 4 },
            { brand: 'Oppo', model: 'O4', price: 30000, quantity: 5 },
            { brand: 'OnePlus 5', model: 'OnePlus5T', price: 50000, quantity: 3 }
        ]
    }
    getProducts(){
        return this.producList;
    }
}