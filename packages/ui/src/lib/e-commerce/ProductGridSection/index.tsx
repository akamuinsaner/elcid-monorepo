import { Button } from '@elcid-monorepo/widgets';
import { ECommerce } from '@elcid-monorepo/types';
import ProductCard from '../ProductCard';

const PRODUCT_LIST: ECommerce.Product.IProduct[] = [
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
    {
        productId: 1,
        image: {
            id: 1,
            width: 100,
            height: 100,
            url: '/product.webp',
        },
        description: '',
        name: 'Urban Drift Bucket Hat',
        price: 15,
        origin: 15,
        rate: 1,
        colors: [
            {
                colorId: 1,
                color: '#000',
            },
            {
                colorId: 2,
                color: '#fff',
            },
        ],
    },
];

const ProductGridSection = ({
    productList = PRODUCT_LIST,
}: {
    productList?: ECommerce.Product.IProduct[];
}) => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-primary font-semibold text-2xl tablet:text-3xl'>
                    Latest Arrivals
                </h2>
                <Button
                    name='view all'
                    aria-label='view all'
                    size='md'
                    variant='secondary'
                >
                    View all
                </Button>
            </div>
            <ul className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8'>
                {productList.map(item => {
                    return <ProductCard product={item} />;
                })}
            </ul>
        </section>
    );
};

export default ProductGridSection;
