import { State } from './state';
import { TECommerce } from '@elcid-monorepo/types';

export enum EActions {
    'updateFilterParams',
    'resetFilterParams',
    'updateFilterExpands',
    'updateFilterDrawerOpen',
    'updateSortBy',
    'updateProductList',
}

export interface Action<T> {
    type: EActions;
    value?: T;
}

export const updateFilterParamsAction = (
    value: State['filterParams'],
): Action<State['filterParams']> => {
    return {
        type: EActions['updateFilterParams'],
        value,
    };
};

export const resetFilterParamsAction = (): Action<undefined> => {
    return {
        type: EActions['resetFilterParams'],
    };
};

export const updateFilterExpandsAction = (
    value: State['filterExpands'],
): Action<State['filterExpands']> => {
    return {
        type: EActions['updateFilterExpands'],
        value,
    };
};

export const updateFilterDrawerOpenAction = (
    value: boolean,
): Action<boolean> => {
    return {
        type: EActions['updateFilterDrawerOpen'],
        value,
    };
};

export const updateSortByAction = (
    sortBy: TECommerce.ESortBy,
): Action<TECommerce.ESortBy> => {
    return {
        type: EActions['updateSortBy'],
        value: sortBy,
    };
};

export const updateProductListAction = (
    list: TECommerce.IProduct[],
): Action<TECommerce.IProduct[]> => {
    return {
        type: EActions['updateProductList'],
        value: list,
    };
};
