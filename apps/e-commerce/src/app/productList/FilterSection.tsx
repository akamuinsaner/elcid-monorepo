'use client';
import { RiSubtractFill, RiAddFill, RiCheckLine } from '@remixicon/react';
import { Button, Checkbox, Form, Link, Rating } from '@elcid-monorepo/widgets';
import FormItem from 'packages/widgets/src/lib/Form/FormItem';
import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import Color from './Color';
import { State } from './store';

const COLLECTIONS = [
    { id: 1, name: 'Latest arrivals' },
    { id: 2, name: 'Urban Oasis' },
    { id: 3, name: 'Cozy Comfort' },
    { id: 4, name: 'Fresh Fusion' },
];

const CATEGORIES = [
    { id: 1, name: 'Men' },
    { id: 2, name: 'Women' },
    { id: 3, name: 'Kids' },
];

const COLORS = [
    { id: 1, color: '#fff', soldOut: true },
    { id: 2, color: '#000', soldOut: false },
    { id: 3, color: '#00ff00', soldOut: true },
    { id: 4, color: '#ff00ff', soldOut: false },
    { id: 5, color: '#0000ff', soldOut: true },
];

type Visibilities = {
    collections?: boolean;
    categories?: boolean;
    colors?: boolean;
    ratings?: boolean;
};

const FilterSection = ({
    visible,
    filterParams,
    filterExpands,
    resetFilterParams,
    updateFilterParams,
    updateFilterExpands,
}: {
    visible?: boolean;
    filterParams: State['filterParams'];
    filterExpands: State['filterExpands'];
    resetFilterParams: () => void;
    updateFilterParams: (params: State['filterParams']) => void;
    updateFilterExpands: (params: State['filterExpands']) => void;
}) => {
    const toggleFilter = (key: keyof Visibilities) => {
        if (filterExpands[key]) {
            updateFilterExpands({ ...filterExpands, [key]: false });
        } else {
            updateFilterExpands({ ...filterExpands, [key]: true });
        }
    };

    const filterClasses = (key: keyof Visibilities) => {
        return twMerge(
            'transition-[max-height] overflow-hidden',
            classNames({
                'max-h-80': filterExpands[key],
                'max-h-0': !filterExpands[key],
            }),
        );
    };

    const toggleIcon = (key: keyof Visibilities) => {
        return (
            <Link onClick={() => toggleFilter(key)}>
                {filterExpands[key] ? <RiSubtractFill /> : <RiAddFill />}
            </Link>
        );
    };

    const onFilterChange = useCallback(
        (key: keyof State['filterParams'], value: any, select: boolean) => {
            if (select) {
                updateFilterParams({
                    ...filterParams,
                    [key]: [...filterParams[key], value],
                });
            } else {
                updateFilterParams({
                    ...filterParams,
                    [key]: filterParams[key].filter(item => item !== value),
                });
            }
        },
        [filterParams],
    );

    const selectedCount = useMemo(() => {
        return (
            filterParams.collections.length +
            filterParams.categories.length +
            filterParams.colors.length +
            filterParams.ratings.length
        );
    }, [filterParams]);

    const classes = twMerge(
        'w-60 p-4 pl-0 hidden desktop:flex flex-col gap-6',
        classNames({
            flex: visible,
        }),
    );

    return (
        <aside className={classes}>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h4>Collections</h4>
                    {toggleIcon('collections')}
                </div>
                <Form className={filterClasses('collections')}>
                    <ul className='flex flex-col gap-6 pt-6'>
                        {COLLECTIONS.map(coll => {
                            return (
                                <li key={coll.id}>
                                    <FormItem
                                        name={coll.name}
                                        label={coll.name}
                                        labelPosition='right'
                                    >
                                        <Checkbox
                                            checked={filterParams.collections.includes(
                                                coll.id,
                                            )}
                                            onChange={e =>
                                                onFilterChange(
                                                    'collections',
                                                    coll.id,
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                    </FormItem>
                                </li>
                            );
                        })}
                    </ul>
                </Form>
            </div>
            <div className='h-0 w-full border border-t border-primary'></div>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h4>Category</h4>
                    {toggleIcon('categories')}
                </div>
                <Form className={filterClasses('categories')}>
                    <ul className='flex flex-col gap-6 pt-6'>
                        {CATEGORIES.map(cate => {
                            return (
                                <li key={cate.id}>
                                    <FormItem
                                        name={cate.name}
                                        label={cate.name}
                                        labelPosition='right'
                                    >
                                        <Checkbox
                                            checked={filterParams.categories.includes(
                                                cate.id,
                                            )}
                                            onChange={e =>
                                                onFilterChange(
                                                    'categories',
                                                    cate.id,
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                    </FormItem>
                                </li>
                            );
                        })}
                    </ul>
                </Form>
            </div>
            <div className='h-0 w-full border border-t border-primary'></div>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h4>Colors</h4>
                    {toggleIcon('colors')}
                </div>
                <Form className={filterClasses('colors')}>
                    <ul className='flex gap-2 pt-6 items-start flex-wrap'>
                        {COLORS.map(item => {
                            return (
                                <Color
                                    key={item.id}
                                    item={item}
                                    onFilterChange={onFilterChange}
                                    filterParams={filterParams}
                                />
                            );
                        })}
                    </ul>
                </Form>
            </div>
            <div className='h-0 w-full border border-t border-primary'></div>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h4>Ratings</h4>
                    {toggleIcon('ratings')}
                </div>
                <Form className={filterClasses('ratings')}>
                    <ul className='flex flex-col gap-6 pt-6 items-start p-1'>
                        {[5, 4, 3, 2, 1].map((score, index) => {
                            const selected =
                                filterParams.ratings.includes(score);
                            const classes = twMerge(
                                'h-5',
                                classNames({
                                    'ring-4 ring-brand-solid/[.12]': selected,
                                }),
                            );
                            return (
                                <Link
                                    key={score}
                                    name={`rating-${score}`}
                                    className={classes}
                                    onClick={() =>
                                        onFilterChange(
                                            'ratings',
                                            score,
                                            !selected,
                                        )
                                    }
                                >
                                    <Rating value={score} readOnly />
                                </Link>
                            );
                        })}
                    </ul>
                </Form>
            </div>
            <div className='h-0 w-full border border-t border-primary'></div>
            <Button
                name='clear all'
                variant='tertiary'
                className='py-0'
                onClick={resetFilterParams}
            >
                Clear All({selectedCount})
            </Button>
        </aside>
    );
};

export default FilterSection;
