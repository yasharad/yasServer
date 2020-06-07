import { Product } from './product.model';
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ProductService {

    products: Product[] = [];
    
    
    insertProduct(title: string, desc: string, price: number): string {
        const pid =  Math.random().toString();
        //new Date().toString();
        const p = new Product(pid, title, desc, price);
        this.products.push(p);
        return p.id;
    }
    getAllProdducts(): any {
        return this.products.slice()
    }

    getSingleProduct(prdouctId: string):any {

         return this.findProduct(prdouctId)[0];

    }

    private findProduct(prdouctId: string): [Product, number] {
        const index = this.products.findIndex((product)=> product.id === prdouctId );
        const  p =  this.products[index];
        if (!p) {
            throw new NotFoundException('kire khar');
        }
        return [p, index];
    }

    updateProduct(proId: string, title: string, desc: string, price: number): any {
        const [prod, index] =  this.findProduct(proId);
        const updatedProduct = {...prod};
        updatedProduct.title =  title;
        updatedProduct.price =  price;
        updatedProduct.description =  desc;
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

}