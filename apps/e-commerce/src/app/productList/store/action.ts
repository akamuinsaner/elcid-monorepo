import { State } from './state';

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
    sortBy: State['sortBy'],
): Action<State['sortBy']> => {
    return {
        type: EActions['updateSortBy'],
        value: sortBy,
    };
};

export const updateProductListAction = (
    list: State['productList'],
): Action<State['productList']> => {
    return {
        type: EActions['updateProductList'],
        value: list,
    };
};
