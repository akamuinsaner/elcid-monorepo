import { Link } from '@elcid-monorepo/widgets';
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiGithubLine,
    RiTwitterXLine,
} from '@remixicon/react';

const FooterSection = () => {
    return (
        <footer className='px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktopp:py-24 flex flex-col'>
            <div className='flex flex-col gap-8 tablet:gap-12 desktop:flex-row desktop:gap-16'>
                <div className='w-full desktop:w-[352px]'>
                    <Link
                        className='flex h-8 mb-6 tablet:mb-8 justify-start items-center'
                        href='/'
                    >
                        <img className='w-8 h-8' alt='logo' src='/logo.svg' />
                        <span className='font-bold text-base text-primary'>
                            StyleNest
                        </span>
                    </Link>
                    <p className='text-base text-secondary'>
                        Craft stunning style journeys that weave more joy into
                        every thread.
                    </p>
                </div>
                <div className='flex flex-col gap-8 tablet:flex-row desktop:justify-end flex-1'>
                    <div className='flex flex-col flex-1 desktop:flex-none desktop:w-[280px]'>
                        <h6 className='text-sm text-tertiary mb-4'>
                            SHOP CATEGORIES
                        </h6>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <Link>Unisex</Link>
                            </li>
                            <li>
                                <Link>Women</Link>
                            </li>
                            <li>
                                <Link>Men</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col flex-1 desktop:flex-none desktop:w-[280px]'>
                        <h6 className='text-sm text-tertiary mb-4'>
                            SHOP COLLECTIONS
                        </h6>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <Link>Latest arrivals</Link>
                            </li>
                            <li>
                                <Link>Urban Oasis</Link>
                            </li>
                            <li>
                                <Link>Cozy Comfort</Link>
                            </li>
                            <li>
                                <Link>Fresh Fusion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-0 border-t border-solid border-primary mt-12 tablet:mt-16 mb-8'></div>
            <div className='flex flex-col gap-8 tablet:flex-row'>
                <span className='text-base text-tertiary'>
                    © 2024 StyleNest, Inc. All rights reserved.
                </span>
                <div className='flex gap-6 desktop:ml-auto'>
                    <Link>
                        <RiYoutubeLine />
                    </Link>
                    <Link>
                        <RiInstagramLine />
                    </Link>
                    <Link>
                        <RiFacebookBoxLine />
                    </Link>
                    <Link>
                        <RiGithubLine />
                    </Link>
                    <Link>
                        <RiTwitterXLine />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
