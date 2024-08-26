'use client';
import { forwardRef, memo, useCallback, useEffect, useState } from 'react';
import { TDrawer } from './types';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import useWrapper from './useWrapper';

const Drawer = forwardRef<HTMLDivElement, TDrawer>(
    (
        {
            maskClassName,
            maskStyle,
            open,
            onClose,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [classes, setClasses] = useState<string>(
            twMerge(styles.base, className),
        );

        const close = useCallback(() => {
            setClasses(twMerge(styles.base, className));
        }, []);

        const { wrapper, setWrapper } = useWrapper({
            wrapperId: 'drawer-id',
            open,
            close,
        });

        const maskClasses = twMerge(styles.mask.base, maskClassName);

        const onTransitionEnd = () => {
            if (!open) setWrapper(null);
        };

        useEffect(() => {
            if (wrapper) setClasses(twMerge(classes, styles.active));
        }, [wrapper]);

        if (!wrapper) return null;

        return createPortal(
            <div className={maskClasses} style={maskStyle} onClick={onClose}>
                <div
                    ref={ref}
                    className={classes}
                    onTransitionEnd={onTransitionEnd}
                    onClick={e => e.stopPropagation()}
                    {...props}
                >
                    {children}
                </div>
            </div>,
            wrapper,
        );
    },
);

export default memo(Drawer);
