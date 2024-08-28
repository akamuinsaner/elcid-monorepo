import { TECommerce } from '@elcid-monorepo/types';

export interface State {
    productList: TECommerce.IProduct[];
    sortBy: TECommerce.ESortBy;
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

export const initialFilterParams = {
    collections: [],
    categories: [],
    colors: [],
    ratings: [],
};

export const initialState: State = {
    productList: [],
    sortBy: TECommerce.ESortBy['Newest'],
    filterDrawerOpen: false,
    filterParams: initialFilterParams,
    filterExpands: {
        collections: true,
        categories: true,
        colors: true,
        ratings: true,
    },
};
