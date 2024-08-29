import ImageGallery from './ImageGallery';
import InfoPanel from './InfoPanel';
import { State } from '../store';

const ProductDetailSection = ({ product }: { product: State['product'] }) => {
    return (
        <section className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktopp:py-24 flex flex-col'>
            <div className='flex flex-col gap-12 desktop:flex-row desktop:gap-8'>
                <ImageGallery
                    images={[
                        {
                            id: 1,
                            width: 100,
                            height: 100,
                            url: '/hero.webp',
                        },
                        {
                            id: 2,
                            width: 100,
                            height: 100,
                            url: '/hero.webp',
                        },
                        {
                            id: 3,
                            width: 100,
                            height: 100,
                            url: '/hero.webp',
                        },
                        {
                            id: 4,
                            width: 100,
                            height: 100,
                            url: '/hero.webp',
                        },
                        {
                            id: 5,
                            width: 100,
                            height: 100,
                            url: '/hero.webp',
                        },
                    ]}
                />
                <div className='flex flex-col gap-10 flex-1 shrink-0 desktop:w-[592px]'>
                    <InfoPanel product={product} />
                </div>
            </div>
        </section>
    );
};

export default ProductDetailSection;
