'use client';
import { forwardRef } from 'react';
import { NTAModalFooter } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const ModalFooter = forwardRef<HTMLDivElement, NTAModalFooter>(
    ({ children, ...props }, ref) => {
        const classes = twMerge(styles.footer, props.className);
        return (
            <div {...props} ref={ref} className={classes}>
                {children}
            </div>
        );
    },
);

export default ModalFooter;
