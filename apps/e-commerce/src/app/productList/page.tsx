'use client';
import { Drawer } from '@elcid-monorepo/widgets';
import Empty from './Empty';
import FilterSection from './FilterSection';
import { useReducer } from 'react';
import { TECommerce } from '@elcid-monorepo/types';
import {
    initialState,
    reducer,
    resetFilterParamsAction,
    updateFilterParamsAction,
    updateFilterExpandsAction,
    updateFilterDrawerOpenAction,
    updateSortByAction,
    State,
} from './store';
import Header from './Header';
import ProductList from './ProductList';

const ProductListPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const resetFilterParams = () => dispatch(resetFilterParamsAction());
    const updateFilterParams = (value: State['filterParams']) =>
        dispatch(updateFilterParamsAction(value));
    const updateFilterExpands = (value: State['filterExpands']) =>
        dispatch(updateFilterExpandsAction(value));
    const updateFilterDrawerOpen = (value: boolean) =>
        dispatch(updateFilterDrawerOpenAction(value));
    const updateSortBy = (sortBy: TECommerce.ESortBy) =>
        dispatch(updateSortByAction(sortBy));
    return (
        <div className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24 desktop:gap-16 flex flex-row flex-1'>
            <FilterSection
                filterParams={state.filterParams}
                filterExpands={state.filterExpands}
                resetFilterParams={resetFilterParams}
                updateFilterParams={updateFilterParams}
                updateFilterExpands={updateFilterExpands}
            />
            <div className='flex flex-1 flex-col'>
                <Header
                    sortBy={state.sortBy}
                    filterDrawerOpen={state.filterDrawerOpen}
                    updateSortBy={updateSortBy}
                    updateFilterDrawerOpen={updateFilterDrawerOpen}
                />
                <ProductList productList={state.productList} />
                {/* <Empty resetFilterParams={resetFilterParams} /> */}
            </div>
            <Drawer
                open={state.filterDrawerOpen}
                onClose={() => updateFilterDrawerOpen(false)}
                className='w-auto p-6'
                id='filter'
                aria-hidden={!state.filterDrawerOpen}
            >
                <FilterSection
                    visible={true}
                    filterParams={state.filterParams}
                    filterExpands={state.filterExpands}
                    resetFilterParams={resetFilterParams}
                    updateFilterParams={updateFilterParams}
                    updateFilterExpands={updateFilterExpands}
                />
            </Drawer>
        </div>
    );
};

export default ProductListPage;
