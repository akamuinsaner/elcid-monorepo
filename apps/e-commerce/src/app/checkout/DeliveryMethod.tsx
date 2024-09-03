'use client';
import { RiCheckboxCircleFill } from '@remixicon/react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const DeliveryMethods = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (v: string) => void;
}) => {
    const baseClasses =
        'rounded border border-solid border-primary p-4 cursor-pointer hover:border-brand-solid flex-1 relative';

    const getClasses = (val: string) => {
        return twMerge(
            baseClasses,
            classNames({
                'border-2 border-brand-solid': value === val,
            }),
        );
    };

    const iconBaseClasses = 'w-6 h-6 hidden absolute right-4 top-4 text-brand';

    const getIconClasses = (val: string) => {
        return twMerge(
            iconBaseClasses,
            classNames({
                block: value === val,
            }),
        );
    };

    return (
        <div className='flex gap-4 flex-col tablet:flex-row w-full'>
            <div className={getClasses('1')} onClick={() => onChange('1')}>
                <div className='text-primary text-base font-medium'>
                    Standard
                </div>
                <div className='text-sm text-secondary mb-4'>
                    4-10 business days
                </div>
                <div className='text-primary text-base font-medium'>FREE</div>
                <RiCheckboxCircleFill className={getIconClasses('1')} />
            </div>
            <div className={getClasses('2')} onClick={() => onChange('2')}>
                <div className='text-primary text-base font-medium'>
                    Express
                </div>
                <div className='text-sm text-secondary mb-4'>
                    2-5 business days
                </div>
                <div className='text-primary text-base font-medium'>$15.00</div>
                <RiCheckboxCircleFill className={getIconClasses('2')} />
            </div>
        </div>
    );
};

export default DeliveryMethods;
