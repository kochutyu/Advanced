import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
    constructor(
        public id: string,
        public category: string,
        public name: string,
        public description: string,
        public price: number,
        public date: Date  = new Date()
    ) {}
}
