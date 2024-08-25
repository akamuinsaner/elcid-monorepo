import {
    RiTruckLine,
    RiExchangeLine,
    RiShieldCheckLine,
} from '@remixicon/react';

const FeatureSection = () => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktopp:py-24 flex flex-col items-center'>
            <span className='font-semibold text-brand text-base mb-3'>
                Elevate Your Experience
            </span>
            <h2 className='text-center font-semibold text-3xl tablet:text-5xl text-primary mb-5 desktop:w-[816px]'>
                Our Commitment to Exceptional Service
            </h2>
            <p className='text-lg text-secondary mb-12 tablet:mb-16 tablet:text-xl desktop:w-[896px] text-center'>
                We pride ourselves on a foundation of exceptional customer
                service, where every interaction is a testament to our
                dedication to excellence.
            </p>
            <ul className='flex flex-col gap-8 desktop:flex-row'>
                <li className='flex flex-col items-center flex-1'>
                    <div className='w-12 h-12 rounded-full shadow flex items-center justify-center mb-5'>
                        <RiTruckLine className='w-6 h-6 text-brand' />
                    </div>
                    <h3 className='font-semibold text-xl text-primary mb-2'>
                        Complimentary Shipping
                    </h3>
                    <p className='text-center text-secondary text-base'>
                        Enjoy the convenience of free shipping for all orders.
                        We believe in transparent pricing, and the price you see
                        is the price you pay—no surprise fees
                    </p>
                </li>
                <li className='flex flex-col items-center flex-1'>
                    <div className='w-12 h-12 rounded-full shadow flex items-center justify-center mb-5'>
                        <RiShieldCheckLine className='w-6 h-6 text-brand' />
                    </div>
                    <h3 className='font-semibold text-xl text-primary mb-2'>
                        2-Year Quality Promise
                    </h3>
                    <p className='text-center text-secondary text-base'>
                        Shop with confidence knowing that we stand behind our
                        products. Should any issue arise within the first two
                        years, rest assured we're here to help with a
                        hassle-free replacement.
                    </p>
                </li>
                <li className='flex flex-col items-center flex-1'>
                    <div className='w-12 h-12 rounded-full shadow flex items-center justify-center mb-5'>
                        <RiExchangeLine className='w-6 h-6 text-brand' />
                    </div>
                    <h3 className='font-semibold text-xl text-primary mb-2'>
                        Easy Exchanges
                    </h3>
                    <p className='text-center text-secondary text-base'>
                        If your purchase isn't quite right, pass it on to a
                        friend who might love it, and let us know. We're happy
                        to facilitate an exchange to ensure you have the perfect
                        item to complement your lifestyle.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default FeatureSection;
