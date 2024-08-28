import { RiCheckLine } from '@remixicon/react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const Color = ({ item, onFilterChange, filterParams }: any) => {
    const baseClasses =
        'flex items-center justify-center w-4 h-4 cursor-pointer rounded-full border border-solid border-primary hover:border-brand-subtle focus:ring-4 focus:ring-brand-solid/[.12] relative';
    const selected = filterParams.colors.includes(item.id);
    return (
        <li
            className='w-6 h-6 p-1 flex items-center justify-center'
            key={item.id}
        >
            <div
                tabIndex={0}
                className={twMerge(
                    baseClasses,
                    classNames({
                        'ring-1 ring-offset-1 ring-brand-solid': selected,
                    }),
                )}
                style={{ backgroundColor: item.color }}
                onClick={() => onFilterChange('colors', item.id, !selected)}
            >
                <RiCheckLine
                    className={twMerge(
                        'w-4 h-4 hidden text-primary-invert',
                        classNames({
                            block: selected && !item.soldOut,
                        }),
                    )}
                />
                <div
                    className={twMerge(
                        'w-full h-0 border-t border-solid border-neutral-600 absolute top-1/2 left-0 -translate-y-1/2 -rotate-45 hidden',
                        classNames({
                            block: item.soldOut,
                        }),
                    )}
                ></div>
            </div>
        </li>
    );
};

export default Color;
