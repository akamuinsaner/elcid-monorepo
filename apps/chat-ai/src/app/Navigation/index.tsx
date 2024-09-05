'use client';
import { Drawer, Link } from '@elcid-monorepo/widgets';
import { RiCloseLine, RiMenuFill } from '@remixicon/react';
import { useState } from 'react';
import SideBar from '../SideBar';

const Navigation = () => {
    const [sideOpen, setSideOpen] = useState<boolean>(false);
    const onClose = () => setSideOpen(false);
    return (
        <div className='py-4 px-3 tablet:px-8 border-b border-solid border-primary flex items-center justify-between transition-all fixed top-0 inset-x-0'>
            <Link name='logo' aria-label='logo' className='flex items-center'>
                <img alt='logo' src='/logo.png' className='w-8 h-8' />
                <span className='text-primary text-base font-bold'>
                    Chat AI
                </span>
            </Link>
            <Link
                name='menu'
                aria-label='menu'
                onClick={() => setSideOpen(true)}
                aria-controls='drawer'
                aria-expanded={sideOpen}
            >
                <RiMenuFill className='w-6 h-6' />
            </Link>
            <Drawer
                className='w-80'
                open={sideOpen}
                onClose={onClose}
                id='drawer'
                aria-labelledby='menu'
            >
                <SideBar forNav={true} onClose={onClose} />
            </Drawer>
        </div>
    );
};

export default Navigation;
