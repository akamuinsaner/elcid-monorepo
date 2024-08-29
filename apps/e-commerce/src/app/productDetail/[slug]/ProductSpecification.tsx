import { Tab, Tabs } from '@elcid-monorepo/widgets';
import { Action, State } from './store';
import {
    RiPaintLine,
    RiPlantLine,
    RiRecycleLine,
    RiWaterFlashLine,
} from '@remixicon/react';

const SPELIST = ['Sustainability', 'Comfort', 'Durability', 'Versatility'];

const ProductSpecification = ({
    active,
    updateActiveSpe,
}: {
    active: State['activeSpe'];
    updateActiveSpe: (active: State['activeSpe']) => void;
}) => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktopp:py-24 flex flex-col'>
            <h2
                role='heading'
                className='text-primary font-semibold text-3xl mb-6'
            >
                Discover timeless elegance
            </h2>
            <p className='text-lg text-secondary mb-12'>
                Step into a world where quality meets quintessential charm with
                our collection. Every thread weaves a promise of unparalleled
                quality, ensuring that each garment is not just a part of your
                wardrobe, but a piece of art. Here's the essence of what makes
                our apparel the hallmark for those with an eye for excellence
                and a heart for the environment.
            </p>
            <Tabs
                value={active}
                aria-label='specification'
                className='mb-8'
                onChange={updateActiveSpe}
            >
                {SPELIST.map((spe, index) => {
                    return (
                        <Tab key={index} aria-label={spe} aria-controls={spe}>
                            {spe}
                        </Tab>
                    );
                })}
            </Tabs>
            {SPELIST.map((spe, index) => {
                return (
                    <div
                        key={index}
                        role='tabpanel'
                        aria-labelledby={spe}
                        id={spe}
                        hidden={active !== index}
                    >
                        <div className='flex flex-col gap-8 desktop:flex-row'>
                            <div className='w-full h-[180px] tablet:h-[384px] desktop:w-[367px] desktop:h-[256px] rounded-lg overflow-hidden'>
                                <img
                                    alt=''
                                    className='w-full h-full object-center object-cover'
                                    src='/hero.webp'
                                />
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <h3 className='text-2xl font-medium text-primary mb-2'>
                                        Eco-Friendly Choice
                                    </h3>
                                    <p className='text-secondary text-base'>
                                        With our sustainable approach, we curate
                                        clothing that makes a statement of
                                        care—care for the planet, and for the
                                        art of fashion.
                                    </p>
                                </div>
                                <ul className='grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-y-8 tablet:gap-x-12 desktop:gap-x-8'>
                                    <li className='flex items-center gap-4'>
                                        <div className='w-12 h-12 flex items-center justify-center shadow rounded-full text-brand'>
                                            <RiRecycleLine />
                                        </div>
                                        <span className='text-base text-secondary'>
                                            Recycled Materials
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <div className='w-12 h-12 flex items-center justify-center shadow rounded-full text-brand'>
                                            <RiPaintLine />
                                        </div>
                                        <span className='text-base text-secondary'>
                                            Recycled Materials
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <div className='w-12 h-12 flex items-center justify-center shadow rounded-full text-brand'>
                                            <RiPlantLine />
                                        </div>
                                        <span className='text-base text-secondary'>
                                            Recycled Materials
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <div className='w-12 h-12 flex items-center justify-center shadow rounded-full text-brand'>
                                            <RiWaterFlashLine />
                                        </div>
                                        <span className='text-base text-secondary'>
                                            Recycled Materials
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductSpecification;
