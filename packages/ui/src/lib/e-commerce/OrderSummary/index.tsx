import { Badge, Button, Input } from '@elcid-monorepo/widgets';
import { RiCloseFill } from '@remixicon/react';

const OrderSummary = () => {
    return (
        <div className='border border-solid border-primary rounded-lg p-4 flex flex-col gap-8 desktop:w-[384px] shrink-0 desktop:p-8'>
            <h3 className='text-2xl text-primary font-semibold'>
                Order Summary
            </h3>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <span className='text-base text-secondary'>Subtotal</span>
                    <span className='text-lg text-primary font-semibold'>
                        $162.5
                    </span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-base text-secondary'>Shipping</span>
                    <span className='text-lg text-primary font-semibold'>
                        FREE
                    </span>
                </div>
                <div className='flex justify-between'>
                    <Badge variant='brand'>GR8FRNTND24</Badge>
                    <span className='text-lg text-primary font-semibold'>
                        -$5.00
                    </span>
                </div>
                <div className='flex gap-2 items-end'>
                    <div className='flex-1'>
                        <label className='text-sm text-secondary mb-1.5 inline-block'>
                            Coupon code
                        </label>
                        <Input placeholder='Enter coupon code' />
                    </div>
                    <Button variant='secondary' size='sm' className='shrink-0'>
                        Apply
                    </Button>
                </div>
                <div className='flex flex-col gap-1.5 items-start'>
                    <div className='flex gap-1 items-center px-2 py-1 bg-secondary rounded border border-solid border-primary text-primary text-sm font-medium'>
                        <span>GR8FRNTND24</span>
                        <RiCloseFill className='w-5 h-5' />
                    </div>
                </div>
            </div>
            <div className='h-0 w-full border-t border-solid border-primary'></div>
            <div className='flex justify-between'>
                <span className='text-2xl text-primary font-medium'>total</span>
                <span className='text-3xl font-semibold text-primary'>
                    $157.5
                </span>
            </div>
            <Button className='w-full' size='xl'>
                Checkout
            </Button>
        </div>
    );
};

export default OrderSummary;
