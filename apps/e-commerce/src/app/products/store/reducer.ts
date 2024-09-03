import { EActions, Action } from './action';
import { State, initialFilterParams } from './state';

export const reducer = (state: State, action: Action<any>): State => {
    switch (action.type) {
        case EActions['updateFilterParams']:
            return { ...state, filterParams: action.value };
        case EActions['resetFilterParams']:
            return { ...state, filterParams: initialFilterParams };
        case EActions['updateFilterExpands']:
            return { ...state, filterExpands: action.value };
        case EActions['updateFilterDrawerOpen']:
            return { ...state, filterDrawerOpen: action.value };
        case EActions['updateSortBy']:
            return { ...state, sortBy: action.value };
        case EActions['updateProductList']:
            return { ...state, productList: action.value };
        default:
            return state;
    }
};
