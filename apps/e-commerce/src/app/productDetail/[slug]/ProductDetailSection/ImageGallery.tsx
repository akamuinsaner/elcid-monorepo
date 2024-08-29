'use client';
import { ECommerce } from '@elcid-monorepo/types';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const ImageGallery = ({ images }: { images: ECommerce.Common.IImage[] }) => {
    const [active, setActive] = useState<number>(0);
    const [scrollBefore, setScrollBefore] = useState<boolean>(false);
    const [scrollAfter, setScrollAfter] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLUListElement>(null);
    const imageRefs = new Array(images.length)
        .fill(0)
        .map(() => useRef<HTMLLIElement>(null));

    const containerClasses = twMerge(
        'relative',
        classNames({
            'after:content-[""] after:absolute after:inset-y-0 after:right-0 after:select-none after:pointer-events-none after:w-[18px] after:bg-gradient-to-r after:from-[#fff]/80 after:to-[#D1D5DB]/80':
                scrollAfter,
            'before:content-[""] before:absolute before:inset-y-0 before:left-0 before:select-none before:pointer-events-none before:w-[18px] before:bg-gradient-to-l before:from-[#fff]/80 before:to-[#D1D5DB]/80':
                scrollBefore,
        }),
    );

    const scrollListener = () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        if (wrapper.scrollLeft > 0) setScrollBefore(true);
        else setScrollBefore(false);
        if (wrapper.scrollWidth > wrapper.scrollLeft + wrapper.offsetWidth)
            setScrollAfter(true);
        else setScrollAfter(false);
    };

    const scrollTo = (childRect: DOMRect) => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const parentRect = wrapper.getBoundingClientRect();
        if (
            childRect.left + childRect.width >
            parentRect.width + parentRect.left
        ) {
            wrapper.scrollTo({
                left:
                    childRect.left +
                    childRect.width -
                    parentRect.left -
                    parentRect.width +
                    wrapper.scrollLeft +
                    50,
            });
            return;
        }
        if (childRect.left < parentRect.left) {
            wrapper.scrollTo({
                left:
                    wrapper.scrollLeft -
                    (parentRect.left - childRect.left) -
                    50,
            });
        }
    };

    useEffect(() => {
        if (!imageRefs[active]?.current) return;
        scrollTo(imageRefs[active].current.getBoundingClientRect());
    }, [active]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        let observer = new ResizeObserver(entries => {
            scrollListener();
        });
        wrapper && observer.observe(wrapper);
        return () => wrapper && observer.unobserve(wrapper);
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        scrollListener();
        wrapper && wrapper.addEventListener('scroll', scrollListener);
        return () =>
            wrapper && wrapper.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <div className='flex flex-col gap-6 flex-1 desktop:w-[592px]'>
            <div className='w-full h-[400px] tablet:h-[800px] rounded-lg overflow-hidden'>
                <img
                    alt=''
                    className='w-full h-full object-center object-cover'
                    src={images[active]?.url}
                />
            </div>
            <div className={containerClasses}>
                <ul
                    ref={wrapperRef}
                    className='flex overflow-x-auto w-full gap-4 snap-x snap-mandatory snap-start scroll-smooth h-[120px] tablet:h-[190px] scrollbar-none'
                >
                    {images.map((image, index) => {
                        const classes = twMerge(
                            'w-[80px] f-full tablet:w-[190px] desktop:w-[160px] rounded-lg overflow-hidden shrink-0 cursor-pointer',
                            classNames({
                                'border-[3px] border-solid border-brand-solid':
                                    index === active,
                            }),
                        );
                        return (
                            <li
                                className={classes}
                                key={image.id}
                                ref={imageRefs[index]}
                                onClick={e => setActive(index)}
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
        </div>
    );
};

export default ImageGallery;
