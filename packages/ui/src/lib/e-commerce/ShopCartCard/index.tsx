import { ECommerce } from '@elcid-monorepo/types';
import { Link, Stepper } from '@elcid-monorepo/widgets';

const ShopCartCard = ({}: {}) => {
    return (
        <div className='flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-8'>
            <div className='w-full h-[200px] tablet:w-[280px] rounded-lg overflow-hidden shrink-0'>
                <img
                    className='w-full h-full object-center object-cover'
                    alt=''
                    loading='lazy'
                    src='/hero.webp'
                />
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-primary text-2xl font-medium'>
                    StepSoft Socks
                </h3>
                <span className='text-secondary text-base font-medium'>
                    <span>Orange</span>
                    &nbsp;&middot;&nbsp;
                    <span>Extra Small</span>
                </span>
                <p className='text-sm text-secondary'>
                    Step into luxury with our StepSoft Socks, designed to pamper
                    your feet with every step. Their cloud-like cushioning is
                    like a spa for your soles.
                </p>
                <div className='flex items-center'>
                    <Stepper className='w-[125px]' min={0} />
                    <Link
                        name='remove'
                        aria-label='remove'
                        className='ml-4 mr-auto'
                    >
                        Remove
                    </Link>
                    <span className='flex items-center gap-2'>
                        <span className='font-medium text-lg text-primary'>
                            $22.50
                        </span>
                        <span className='text-xs text-secondary line-through'>
                            $25
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ShopCartCard;
