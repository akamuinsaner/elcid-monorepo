'use client';
import ProductDetailSection from './ProductDetailSection';
import { useReducer, useEffect } from 'react';
import {
    initialState,
    reducer,
    updateProductAction,
    updateActiveSpeAction,
    State,
} from './store';
import SubscribeSection from 'packages/ui/src/lib/e-commerce/SubscribeSection';
import FooterSection from 'packages/ui/src/lib/e-commerce/FooterSection';
import Specification from './ProductSpecification';

const ProductDetailPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateProduct = (product: State['product']) =>
        dispatch(updateProductAction(product));

    const updateActiveSpe = (active: State['activeSpe']) =>
        dispatch(updateActiveSpeAction(active));

    useEffect(() => {
        updateProduct({
            productId: 1,
            name: 'Voyager Hoodie',
            image: {
                id: 1,
                width: 100,
                height: 100,
                url: '',
            },
            description:
                'The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.',
            origin: 95,
            price: 75,
            rate: 4.1,
            sizes: [
                {
                    sizeId: 1,
                    size: 'XS',
                },
                {
                    sizeId: 2,
                    size: 'S',
                },
                {
                    sizeId: 3,
                    size: 'M',
                },
                {
                    sizeId: 4,
                    size: 'L',
                },
                {
                    sizeId: 5,
                    size: 'XL',
                },
            ],
            colors: [
                {
                    colorId: 1,
                    color: '#000',
                },
                {
                    colorId: 2,
                    color: '#fff',
                },
                {
                    colorId: 3,
                    color: '#ff00ff',
                },
                {
                    colorId: 4,
                    color: '#ffff00',
                },
                {
                    colorId: 5,
                    color: '#00ffff',
                },
                {
                    colorId: 6,
                    color: '#0000ff',
                },
                {
                    colorId: 7,
                    color: '#ff0000',
                },
                {
                    colorId: 8,
                    color: '#00ff00',
                },
            ],
        });
    }, []);

    if (!state.product) return;
    return (
        <div>
            <ProductDetailSection product={state.product} />
            <Specification
                active={state.activeSpe}
                updateActiveSpe={updateActiveSpe}
            />
            <SubscribeSection />
            <FooterSection />
        </div>
    );
};

export default ProductDetailPage;
