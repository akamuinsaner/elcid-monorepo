import { ECommerce } from '@elcid-monorepo/types';

export interface State {
    productList: ECommerce.Product.IProduct[];
    sortBy: ECommerce.Product.ESortBy;
    filterDrawerOpen: boolean;
    filterParams: {
        collections: number[];
        categories: number[];
        colors: number[];
        ratings: number[];
    };
    filterExpands: {
        collections?: boolean;
        categories?: boolean;
        colors?: boolean;
        ratings?: boolean;
    };
}

export const initialFilterParams: State['filterParams'] = {
    collections: [],
    categories: [],
    colors: [],
    ratings: [],
};

export const initialState: State = {
    productList: [],
    sortBy: ECommerce.Product.ESortBy['Newest'],
    filterDrawerOpen: false,
    filterParams: initialFilterParams,
    filterExpands: {
        collections: true,
        categories: true,
        colors: true,
        ratings: true,
    },
};
