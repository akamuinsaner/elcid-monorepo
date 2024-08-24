'use client';
import { forwardRef } from 'react';
import { INavbar } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import useScroll from './useScroll';
import classNames from 'classnames';

const NavBar = forwardRef<HTMLDivElement, INavbar>(
    ({ children, className, ...props }, ref) => {
        const active = useScroll();

        const classes = classNames(
            twMerge(
                styles.base,
                styles.mobile,
                styles.tablet,
                styles.desktop,
                className,
            ),
            {
                [styles.active]: active,
            },
        );

        return (
            <nav
                role='navigation'
                aria-label='navigation'
                className={classes}
                ref={ref}
                {...props}
            >
                {children}
            </nav>
        );
    },
);

export default NavBar;
