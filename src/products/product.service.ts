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
        const p = this.products.find((product)=> product.id === prdouctId );
        if (!p) {
            throw new NotFoundException('kire khar')
        }
        return {...p};

    }
}