import { Badge } from '@elcid-monorepo/widgets';

const OrderSummary = () => {
    return (
        <div className='flex flex-col gap-8 pt-8'>
            <div className='flex flex-col gap-6'>
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
                    <span className='text-base text-secondary'>
                        Coupon discount
                    </span>
                    <span className='text-lg text-primary font-semibold'>
                        -$5.00
                    </span>
                </div>
                <div>
                    <Badge variant='brand'>GR8FRNTND24</Badge>
                </div>
            </div>
            <div className='w-full border-t border-dotted border-primary'></div>
            <div className='flex justify-between'>
                <span className='text-base text-primary font-medium'>
                    Total
                </span>
                <span className='text-2xl font-semibold text-primary'>
                    $157.5
                </span>
            </div>
        </div>
    );
};

export default OrderSummary;
