import { TECommerce } from '@elcid-monorepo/types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const COLLECTIONS: TECommerce.ICollection[] = [
    {
        id: 1,
        image: '/hero.webp',
        category: 'Cozy Comfort',
        desc: 'Plush fabrics and soothing designs',
    },
    {
        id: 2,
        image: '/hero.webp',
        category: 'Urban Oasis',
        desc: 'For the city dwellers',
    },
    {
        id: 3,
        image: '/hero.webp',
        category: 'Fresh Fusion',
        desc: 'Contemporary styles and patterns',
    },
];

const CollectionSection = ({
    collection = COLLECTIONS,
}: {
    collection?: TECommerce.ICollection[];
}) => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24'>
            <h2 className='font-semibold text-primary text-3xl mb-8'>
                Our Collections
            </h2>
            <ul className='grid grid-cols-1 tablet:grid-cols-2 gap-7'>
                {collection.map((item, index) => {
                    const classes = twMerge(
                        'rounded-lg overflow-hidden row-span-1',
                        classNames({
                            'h-[580px] tablet:row-span-2': index === 0,
                            'h-[276px]': index !== 0,
                        }),
                    );
                    return (
                        <li className={classes} key={item.id}>
                            <button className='flex flex-col justify-end text-left w-full h-full outline-none border-none bg-primary relative p-6'>
                                <div className={`absolute inset-0`}>
                                    <img
                                        alt={item.desc}
                                        src={item.image}
                                        loading='lazy'
                                        className='w-full h-full object-center object-cover'
                                    />
                                </div>
                                <div className='text-sm text-primary-invert relative z-1'>
                                    {item.category}
                                </div>
                                <div className='text-lg font-medium text-primary-invert relative z-1'>
                                    {item.desc}
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default CollectionSection;
