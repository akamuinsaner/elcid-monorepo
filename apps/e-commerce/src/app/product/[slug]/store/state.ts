import { ECommerce } from '@elcid-monorepo/types';

export interface State {
    product: ECommerce.Product.IProduct;
    activeSpe: number;
    reviewOpen: boolean;
}

export const initialState: State = {
    product: null,
    activeSpe: 0,
    reviewOpen: false,
};
