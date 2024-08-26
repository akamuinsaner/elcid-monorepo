'use client';
import { IconButton, Link, NavBar } from '@elcid-monorepo/widgets';

import { RiMenuLine, RiShoppingBag3Line, RiCloseLine } from '@remixicon/react';
import { Drawer } from '@elcid-monorepo/widgets';
import { useState } from 'react';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    return (
        <>
            <NavBar className='border-b border-primary border-solid gap-[103px]'>
                <Link className='flex items-center h-8' href='/'>
                    <img className='w-8 h-8' alt='logo' src='/logo.svg' />
                    <span className='font-bold text-base text-primary'>
                        StyleNest
                    </span>
                </Link>
                <ul role='navigation' className='gap-8 hidden desktop:flex'>
                    <li>
                        <Link>Shop all</Link>
                    </li>
                    <li>
                        <Link>Latest arrivals</Link>
                    </li>
                </ul>
                <div className='ml-auto flex gap-4'>
                    <Link className='inline-block'>
                        <RiShoppingBag3Line />
                    </Link>
                    <Link
                        className='inline-block desktop:hidden'
                        onClick={() => setDrawerOpen(true)}
                    >
                        <RiMenuLine />
                    </Link>
                </div>
            </NavBar>
            <Drawer
                className='p-4 pt-8 w-[360px]'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <div className='flex items-center justify-between mb-6'>
                    <Link className='flex items-center h-8' href='/'>
                        <img className='w-8 h-8' alt='logo' src='/logo.svg' />
                        <span className='font-bold text-base text-primary'>
                            StyleNest
                        </span>
                    </Link>
                    <Link onClick={() => setDrawerOpen(false)}>
                        <RiCloseLine />
                    </Link>
                </div>
                <ul role='navigation' className='gap-2 flex flex-col'>
                    <li>
                        <Link className='block px-3 py-2'>Shop all</Link>
                    </li>
                    <li>
                        <Link className='block px-3 py-2'>Latest arrivals</Link>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};

export default Navigation;
