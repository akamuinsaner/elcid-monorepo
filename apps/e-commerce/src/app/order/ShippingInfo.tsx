const ShippingInfo = () => {
    return (
        <div className='pt-8 flex flex-col gap-8 tablet:flex-row tablet:justify-between'>
            <div>
                <div className='text-base text-secondary mb-4'>
                    Shipping address
                </div>
                <div className='text-sm text-secondary'>
                    <span>+1 (650) 555-0198</span>
                    <br />
                    <span>150 Elm Street, Apartment 3B</span>
                    <br />
                    <span>Brooklyn, NY 11222</span>
                    <br />
                    <span>United States</span>
                    <br />
                </div>
            </div>
            <div>
                <div className='text-base text-secondary mb-4'>Payment</div>
                <div className='flex items-center'>
                    <img
                        alt='payment method'
                        src='/visa-icon.png'
                        className='w-[70px] h-12 object-center object-cover mr-4'
                    />
                    <div className='text-sm'>
                        <p className='text-primary'>Ending with 1234</p>
                        <p className='text-secondary'>Expires 12 / 28</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
