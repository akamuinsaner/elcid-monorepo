import { ECommerce } from '@elcid-monorepo/ui';
import OrderSummary from 'packages/ui/src/lib/e-commerce/OrderSummary';
import { Fragment } from 'react';

const CartPage = () => {
    return (
        <div className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24'>
            <h1
                role='heading'
                className='font-semibold text-3xl text-primary mb-16 tablet:text-4xl'
            >
                Shppoing Cart
            </h1>
            <div className='flex flex-col gap-16 desktop:flex-row desktop:gap-8 desktop:items-start'>
                <ul className='flex flex-col gap-8'>
                    {new Array(4).fill(0).map((_, index) => {
                        return (
                            <Fragment>
                                <ECommerce.ShopCartCard key={index} />
                                <div
                                    className='h-0 w-full border-dotted border-t border-primary'
                                    hidden={index === 3}
                                ></div>
                            </Fragment>
                        );
                    })}
                </ul>
                <OrderSummary />
            </div>
        </div>
    );
};

export default CartPage;
