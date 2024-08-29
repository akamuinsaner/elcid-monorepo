import { ECommerce } from '@elcid-monorepo/types';

const ImageGallery = ({ images }: { images: ECommerce.Common.IImage[] }) => {
    return (
        <div className='flex flex-col gap-6 flex-1 desktop:w-[592px]'>
            <div className='w-full h-[400px] tablet:h-[800px] rounded-lg overflow-hidden'>
                <img
                    alt=''
                    className='w-full h-full object-center object-cover'
                />
            </div>
            <ul className='flex overflow-x-auto w-full gap-4 snap-x snap-mandatory snap-start scroll-smooth h-[120px] tablet:h-[190px] scrollbar-none'>
                {images.map((image, index) => {
                    return (
                        <li
                            className='w-[80px] f-full tablet:w-[190px] desktop:w-[160px] rounded-lg overflow-hidden shrink-0'
                            key={image.id}
                        >
                            <img
                                alt=''
                                src={image.url}
                                className='w-full h-full object-center object-cover'
                                draggable='false'
                                loading='lazy'
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ImageGallery;
