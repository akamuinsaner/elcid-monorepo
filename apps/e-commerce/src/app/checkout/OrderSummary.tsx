import { Badge, Button } from '@elcid-monorepo/widgets';
import { RiLock2Line } from '@remixicon/react';
import { Fragment } from 'react';

const OrderSummary = () => {
    return (
        <div className='border border-solid border-primary rounded-lg w-full flex-1'>
            <div className='p-4 flex flex-col desktop:justify-between h-full'>
                <div>
                    <h2 className='font-semibold text-primary text-xl mb-8'>
                        Order Summary
                    </h2>
                    <ul className='flex flex-col gap-8'>
                        {new Array(4).fill(0).map((_, index) => {
                            return (
                                <Fragment>
                                    <li className='flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between'>
                                        <div className='flex items-start gap-6'>
                                            <div className='w-[56px] h-[56px] rounded-lg overflow-hidden'>
                                                <img
                                                    alt=''
                                                    className='w-full h-full object-center object-cover'
                                                    src='/logo.svg'
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='text-primary text-base font-medium'>
                                                    StepSoft Socks
                                                </div>
                                                <div className='text-secondary text-base font-medium'>
                                                    <span>Orange</span>
                                                    &nbsp;•&nbsp;
                                                    <span>Extra Small</span>
                                                </div>
                                                <div className='text-primary text-base font-medium'>
                                                    Quantity: <span>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-2 text-right text-primary text-lg font-semibold'>
                                                $22.50
                                            </div>
                                            <div className='text-right text-secondary text-lg line-through'>
                                                $25
                                            </div>
                                        </div>
                                    </li>
                                    <div
                                        className='w-full border-t border-dotted border-primary'
                                        hidden={index === 3}
                                    ></div>
                                </Fragment>
                            );
                        })}
                    </ul>
                    <div className='w-full border-t border-solid border-primary my-8'></div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <span className='text-base text-secondary'>
                                Subtotal
                            </span>
                            <span className='text-lg text-primary font-semibold'>
                                $162.5
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-base text-secondary'>
                                Shipping
                            </span>
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
                </div>
                <div>
                    <div className='w-full border-t border-dotted border-primary my-8'></div>
                    <div className='flex justify-between'>
                        <span className='text-2xl text-primary font-medium'>
                            Total
                        </span>
                        <span className='text-3xl font-semibold text-primary'>
                            $157.5
                        </span>
                    </div>
                    <Button
                        className='w-full mt-8'
                        size='lg'
                        prefix={<RiLock2Line />}
                    >
                        Confirm Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
