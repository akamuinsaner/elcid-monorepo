import { Common } from './common';

export namespace Product {
    export interface ISize {
        sizeId: number;
        size: string;
    }

    export interface IColor {
        colorId: number;
        color: string;
        images?: Common.IImage[];
    }

    export interface IStock {
        stockId: number;
        productId: number;
        colorId: number;
        sizeId: number;
        stock: number;
    }

    export interface IProduct {
        productId: number;
        image: Common.IImage;
        name: string;
        origin: number;
        price: number;
        rate: number;
        description: string;
        colors?: IColor[];
        sizes?: ISize[];
    }

    export enum ESortBy {
        'Newest',
        'Best rating',
        'Most popular',
        'Price: Low to high',
        'Price: High to low',
    }
}
