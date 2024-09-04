const ShopList = () => {
    return (
        <ul>
            {new Array(4).fill(0).map((_, index) => {
                return (
                    <li className='py-8 first:pt-0 border-b border-dotted border-primary flex items-start gap-6'>
                        <div className='w-20 h-20 rounded-lg overflow-hidden shrink-0'>
                            <img
                                alt=''
                                className='w-full h-full object-center object-cover'
                                src='/logo.svg'
                            />
                        </div>
                        <div>
                            <div className='text-xl text-primary font-medium mb-2'>
                                StepSoft Socks
                            </div>
                            <div className='text-base font-medium text-secondary mb-2'>
                                <span>Orange</span>
                                &nbsp;&middot;&nbsp;
                                <span>Extra Small</span>
                            </div>
                            <div className='text-base font-medium text-secondary'>
                                Quantity: <span>1</span>
                            </div>
                        </div>
                        <div className='shrink-0 text-right ml-auto'>
                            <div className='text-primary text-lg font-semibold'>
                                $22.50
                            </div>
                            <div className='text-secondary text-lg line-through'>
                                $25
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default ShopList;
