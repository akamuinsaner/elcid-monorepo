'use client';
import { Button, Link, Menu, MenuItem } from '@elcid-monorepo/widgets';
import {
    RiCloseLine,
    RiFlashlightLine,
    RiSparkling2Line,
} from '@remixicon/react';

const SideBar = ({
    onClose = () => {},
    forNav,
}: {
    onClose?: () => void;
    forNav?: boolean;
}) => {
    return (
        <aside className='px-4 py-6 bg-primary flex flex-col w-full h-full'>
            <div className='flex px-1 py-4 flex items-center justify-between'>
                <Link
                    name='logo'
                    aria-label='logo'
                    className='flex items-center'
                >
                    <img alt='logo' src='/logo.png' className='w-8 h-8' />
                    <span className='text-primary text-base font-bold'>
                        Chat AI
                    </span>
                </Link>
                {forNav ? (
                    <Link
                        name='close'
                        aria-label='close'
                        onClick={onClose}
                        hidden={!forNav}
                    >
                        <RiCloseLine className='w-5 h-5' />
                    </Link>
                ) : null}
            </div>
            <Menu>
                <MenuItem
                    icon={<RiFlashlightLine />}
                    selected={true}
                    className='text-brand font-medium'
                >
                    Ongoing prompt
                </MenuItem>
            </Menu>
            <Button
                variant='secondary'
                prefix={<RiSparkling2Line />}
                size='sm'
                className='mt-auto mb-4'
                name='start new chat'
                aria-label='start new char'
            >
                Start new chat
            </Button>
            <div className='border border-solid border-primary p-4 rounded-lg'>
                <h3 className='font-medium text-sm text-primary mb-1'>
                    Let’s create an account
                </h3>
                <p className='text-secondary text-xs mb-6'>
                    Save your chat history, share chat, and personalize your
                    experience.
                </p>
                <Button
                    name='Sign in'
                    aria-label='Sign in'
                    className='w-full text-sm px-3 py-3 mb-1'
                >
                    Sign in
                </Button>
                <Button
                    name='Create account'
                    aria-label='Create account'
                    className='w-full text-sm px-3 py-3'
                    variant='tertiary'
                >
                    Create account
                </Button>
            </div>
        </aside>
    );
};

export default SideBar;
