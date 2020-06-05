import { ProductService } from './product.service';
import { ProductController } from './products.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers : [ProductController],
    providers: [ProductService],
    
})
export class ProductModule {
}