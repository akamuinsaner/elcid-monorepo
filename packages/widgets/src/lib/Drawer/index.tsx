'use client';
import { forwardRef, memo, useCallback, useEffect, useState } from 'react';
import { NTADrawer } from './types';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import useWrapper from './useWrapper';
import classNames from 'classnames';

const Drawer = forwardRef<HTMLDivElement, NTADrawer>(
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
        const [maskClasses, setMaskClasses] = useState<string>(
            twMerge(styles.mask.base, maskClassName),
        );
        const [classes, setClasses] = useState<string>(
            twMerge(styles.base, className),
        );

        const close = useCallback(() => {
            setClasses(twMerge(styles.base, className));
            setMaskClasses(twMerge(styles.mask.base, maskClassName));
        }, []);

        const { wrapper, setWrapper } = useWrapper({
            wrapperId: 'drawer-id',
            open,
            close,
        });

        const onTransitionEnd = () => {
            if (!open) setWrapper(null);
        };

        useEffect(() => {
            if (wrapper) {
                setClasses(twMerge(classes, styles.active));
                setMaskClasses(twMerge(maskClasses, styles.mask.active));
            }
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
