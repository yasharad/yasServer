import { ProductService } from './product.service';
import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {

    }
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ): any {
        const pid =  this.productService.insertProduct(prodTitle,prodDesc,prodPrice);
        
        return {'id': pid}
    }

    @Get()
    getAllProducts():any {
        return this.productService.getAllProdducts();
    }
    @Get(':id')
    getProduct(@Param('id') productId: string): any {
        return this.productService.getSingleProduct(productId);
    }

    @Patch(':id')
    updateProduct(@Param('id') productId: string, 
                  @Body('title') productTitle : string,
                  @Body('description') productDesc :string,  
                  @Body('price') productPrice: number): any {
                   
                  this.productService.updateProduct(productId, productTitle, productDesc, productPrice);
                    
                  }
}