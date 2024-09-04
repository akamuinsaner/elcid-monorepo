import { Badge, Button, Link } from '@elcid-monorepo/widgets';
import { RiArrowRightLine, RiFileCopy2Line } from '@remixicon/react';
import OrderSummary from './OrderSummary';
import ShopList from './ShopList';
import ShippingInfo from './ShippingInfo';

const OrderPage = () => {
    return (
        <div className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24 desktop:gap-16 flex flex-col gap-12 desktop:flex-row desktop:gap-8'>
            <div className='w-full desktop:h-[1392px] overflow-hidden flex-1'>
                <picture>
                    <source
                        media='(max-width: 768px)'
                        srcSet='/order-mobile.webp'
                    />
                    <source
                        media='(max-width: 1440px)'
                        srcSet='/order-tablet.webp'
                    />
                    <img
                        src='/order-desktop.webp'
                        alt='order'
                        loading='lazy'
                        className='w-full h-full object-bottom object-cover'
                    />
                </picture>
            </div>
            <div className='flex-1 flex flex-col gap-12'>
                <div>
                    <h1
                        role='heading'
                        className='text-primary text-3xl tablet:text-4xl font-semibold mb-4'
                    >
                        Your order is confirmed.
                    </h1>
                    <p className='text-secondary text-base'>
                        Your order is now in the queue and being processed.
                        We'll let you know when we ship it out!
                    </p>
                </div>
                <div>
                    <h3 className='text-secondary text-base mb-1'>
                        Order Number
                    </h3>
                    <Link
                        className='text-brand hover:text-brand focus:text-brand text-base font-medium gap-1.5'
                        name='order number'
                        aria-label='order number'
                    >
                        <span>1928371928</span>
                        <RiFileCopy2Line className='w-5 h-5' />
                    </Link>
                </div>
                <div>
                    <ShopList />
                    <OrderSummary />
                    <ShippingInfo />
                </div>
                <Button
                    variant='secondary'
                    suffix={<RiArrowRightLine />}
                    name='continue shopping'
                    aria-label='continue shopping'
                >
                    Continue Shopping
                </Button>
            </div>
        </div>
    );
};

export default OrderPage;
