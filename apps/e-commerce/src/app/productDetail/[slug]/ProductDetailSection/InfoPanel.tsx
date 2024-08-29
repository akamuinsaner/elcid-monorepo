'use client';
import { ECommerce } from '@elcid-monorepo/types';
import { Badge, Button, Link, Rating } from '@elcid-monorepo/widgets';
import { RiAddCircleLine, RiIndeterminateCircleLine } from '@remixicon/react';
import classNames from 'classnames';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FEATURES = [
    {
        title: 'Features',
        content: [
            'Designed for comfort and durability.',
            'Soft, breathable fabric ideal for travel and adventure.',
            'Large front pocket and adjustable hood.',
            'Minimalist design pairs well with any style.',
            'Made with eco-conscious materials.',
        ],
    },
    {
        title: 'Fabric & Care',
        content: [
            'Machine wash cold on a gentle cycle.',
            'Tumble dry low or hang to dry.',
            'Do not use fabric softeners or bleach.',
            'Iron on a low setting if necessary.',
        ],
    },
    {
        title: 'Shipping',
        content: [
            'Free standard shipping on all orders - no minimum spend required.',
            'Expedited shipping available at an additional cost.',
            'Packaged in biodegradable materials to reduce environmental impact.',
        ],
    },
];

const InfoPanel = ({ product }: { product: ECommerce.Product.IProduct }) => {
    const [featureExpand, setFeatureExpand] = useState<number[]>(
        new Array(FEATURES.length).fill(0).map((_, i) => i),
    );
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-start gap-8'>
                <div>
                    <h3 className='text-3xl tablet:text-5xl  text-primary font-semibold mb-5'>
                        {product.name}
                    </h3>
                    <div className='flex gap-2 items-end mb-2'>
                        <span className='font-medium text-3xl text-secondary'>
                            ${product.price}
                        </span>
                        <span
                            className='font-medium text-lg text-disabled line-through'
                            hidden={product.price === product.origin}
                        >
                            ${product.origin}
                        </span>
                    </div>
                    <Badge
                        hidden={product.price === product.origin}
                        variant='warning'
                        className='mb-3'
                    >
                        {Math.round(
                            (product.origin - product.price) / product.origin,
                        )}
                        % OFF
                    </Badge>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl text-primary'>
                            {product.rate}
                        </span>
                        <Rating value={product.rate} readOnly />
                        <Link
                            name='see reviews'
                            aria-label='see reviews'
                            className='font-medium text-xm'
                        >
                            See all 62 views
                        </Link>
                    </div>
                </div>
                <p
                    aria-label='description'
                    className='text-base text-secondary'
                >
                    {product.description}
                </p>
                <div>
                    <h6 className='text-tertiary text-sm mb-4'>
                        Available Colors
                    </h6>
                    <div className='flex flex-wrap gap-4'></div>
                </div>
                <div>
                    <h6 className='text-tertiary text-sm mb-4'>
                        Available Sizes
                    </h6>
                    <div className='flex flex-wrap gap-4'>
                        {product.sizes.map(size => {
                            return (
                                <Button
                                    size='lg'
                                    key={size.sizeId}
                                    variant='secondary'
                                    name={size.size}
                                >
                                    {size.size}
                                </Button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h6 className='text-tertiary text-sm mb-4'>Quantity</h6>
                </div>
                <Button className='w-full' name='add to card'>
                    Add to Card
                </Button>
            </div>
            <ul className='flex flex-col gap-8'>
                {FEATURES.map((feature, index) => {
                    const isExpanding = featureExpand.includes(index);
                    const classes = twMerge(
                        'text-base text-secondary pl-6 transition-[max-height] overflow-hidden',
                        classNames({
                            'max-h-96': isExpanding,
                            'max-h-0': !isExpanding,
                        }),
                    );
                    return (
                        <li
                            className='flex items-start pt-6 first:pt-0 border-t border-solid border-primary first:border-none'
                            key={index}
                        >
                            <div className='flex flex-col gap-2 flex-1'>
                                <h3 className='text-primary text-lg font-medium'>
                                    {feature.title}
                                </h3>
                                <ul
                                    className={classes}
                                    id={feature.title}
                                    role='region'
                                >
                                    {feature.content.map((item, index) => {
                                        return (
                                            <li
                                                className='list-disc'
                                                key={index}
                                            >
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <Link
                                className='text-disabled'
                                name={feature.title}
                                aria-expanded={isExpanding}
                                aria-controls={feature.title}
                                onClick={() => {
                                    if (isExpanding)
                                        setFeatureExpand(
                                            featureExpand.filter(
                                                item => item !== index,
                                            ),
                                        );
                                    else
                                        setFeatureExpand([
                                            ...featureExpand,
                                            index,
                                        ]);
                                }}
                            >
                                {isExpanding ? (
                                    <RiIndeterminateCircleLine />
                                ) : (
                                    <RiAddCircleLine />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default InfoPanel;
