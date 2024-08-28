import { Injectable } from '@nestjs/common';
import type { TECommerce } from '@elcid-monorepo/types';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProductsService {
    private products: TECommerce.IProduct[] = [];

    list(): TECommerce.IProduct[] {
        return faker.helpers.multiple<TECommerce.IProduct>(
            () => ({
                id: faker.number.int(1000),
                name: faker.commerce.productName(),
            }),
            { count: 10 },
        );
    }
}
