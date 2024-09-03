import { Form, FormItem, Input } from '@elcid-monorepo/widgets';

const CheckoutForm = () => {
    return (
        <Form className='w-full flex-1'>
            <div className='flex flex-col gap-6'>
                <h2 className='text-lg text-secondary font-medium'>
                    Contact Information
                </h2>
                <FormItem label='Email' name='email'>
                    <Input
                        placeholder='user@example.com'
                        id='email'
                        aria-labelledby='email'
                    />
                </FormItem>
            </div>
            <div className='w-full border-t border-primary border-solid my-10'></div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-lg text-secondary font-medium'>
                    Shipping Information
                </h2>
                <FormItem label='Country/Region' name='country'>
                    <Input
                        placeholder='user@example.com'
                        id='country'
                        aria-labelledby='country'
                    />
                </FormItem>
                <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
                    <FormItem
                        label='First name'
                        name='firstName'
                        className='flex-1'
                    >
                        <Input
                            placeholder='John'
                            id='firstName'
                            aria-labelledby='firstName'
                        />
                    </FormItem>
                    <FormItem
                        label='Last name'
                        name='lastName'
                        className='flex-1'
                    >
                        <Input
                            placeholder='Appleseed'
                            id='lastName'
                            aria-labelledby='lastName'
                        />
                    </FormItem>
                </div>
                <div className='flex flex-col gap-4'>
                    <FormItem label='Address' name='address'>
                        <Input
                            placeholder='Street address'
                            id='address'
                            aria-labelledby='address'
                        />
                    </FormItem>
                    <FormItem name='addressExtra'>
                        <Input
                            placeholder='Apartment, suite, etc (optional)'
                            id='addressExtra'
                            aria-labelledby='addressExtra'
                        />
                    </FormItem>
                </div>
                <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
                    <FormItem label='City' name='city' className='flex-1'>
                        <Input
                            placeholder='City'
                            id='city'
                            aria-labelledby='city'
                        />
                    </FormItem>
                    <FormItem label='State' name='state' className='flex-1'>
                        <Input
                            placeholder='State'
                            id='state'
                            aria-labelledby='state'
                        />
                    </FormItem>
                    <FormItem label='Zip' name='zip' className='flex-1'>
                        <Input
                            placeholder='Zip'
                            id='zip'
                            aria-labelledby='zip'
                        />
                    </FormItem>
                </div>
            </div>
            <div className='w-full border-t border-primary border-solid my-10'></div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-lg text-secondary font-medium'>
                    Delivery Method
                </h2>
            </div>
            <div className='w-full border-t border-primary border-solid my-10'></div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-lg text-secondary font-medium'>
                    Payment Method
                </h2>
                <FormItem label='Card number' name='cardNumber'>
                    <Input
                        prefix={
                            <img
                                src='/payment-method-icon.svg'
                                className='w-[34px] h-6'
                                alt=''
                            />
                        }
                        aria-labelledby='cardNumber'
                        id='cardNumber'
                        placeholder='1234 1234 1234 1234'
                    />
                </FormItem>
                <FormItem label='Name on card' name='cardName'>
                    <Input
                        aria-labelledby='cardName'
                        id='cardName'
                        placeholder='Full name on card'
                    />
                </FormItem>
                <div className='flex gap-8 w-full'>
                    <FormItem label='Expiry' name='expiry' className='flex-1'>
                        <Input
                            aria-labelledby='expiry'
                            id='expiry'
                            placeholder='MM/YY'
                        />
                    </FormItem>
                    <FormItem label='CVV' name='cvv' className='flex-1'>
                        <Input
                            aria-labelledby='cvv'
                            id='cvv'
                            placeholder='123'
                        />
                    </FormItem>
                </div>
            </div>
        </Form>
    );
};

export default CheckoutForm;
