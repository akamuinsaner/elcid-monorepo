import { Form, FormItem, Input, Link } from '@elcid-monorepo/widgets';
import { RiArrowLeftSLine } from '@remixicon/react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const CheckoutPage = () => {
    return (
        <div className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24 flex flex-col flex-1 items-start'>
            <Link
                prefix={<RiArrowLeftSLine />}
                className='gap-1 text-brand text-sm font-medium hover:text-brand focus:text-brand mb-8'
            >
                Back to Shopping Cart
            </Link>
            <h1 className='text-primary text-2xl font-semibold tablet:text-3xl desktop:text-4xl mb-8'>
                Checkout
            </h1>
            <div className='flex flex-col gap-8 w-full desktop:flex-row'>
                <CheckoutForm />
                <OrderSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
