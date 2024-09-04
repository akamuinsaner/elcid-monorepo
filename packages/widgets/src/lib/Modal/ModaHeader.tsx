'use client';
import { forwardRef } from 'react';
import { NTAModalHeader } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const ModalHeader = forwardRef<HTMLDivElement, NTAModalHeader>(
    ({ children, ...props }, ref) => {
        const classes = twMerge(styles.header, props.className);
        return (
            <div {...props} ref={ref} className={classes}>
                {children}
            </div>
        );
    },
);

export default ModalHeader;
