'use client';
import { forwardRef } from 'react';
import { NTAModalBody } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const ModalBody = forwardRef<HTMLDivElement, NTAModalBody>(
    ({ children, ...props }, ref) => {
        const classes = twMerge(styles.body, props.className);
        return (
            <div {...props} ref={ref} className={classes}>
                {children}
            </div>
        );
    },
);

export default ModalBody;
