import { Controller, Post } from '@nestjs/common';
import type { TECommerce } from '@elcid-monorepo/types';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    findAll(): TECommerce.IProduct[] {
        return this.productsService.list();
    }
}
