'use client';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { NTAModal } from './types';
import useWrapper from '../Drawer/useWrapper';
import { createPortal } from 'react-dom';
import { styles as drawerStyles } from '../Drawer/styles';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const Modal = forwardRef<HTMLDivElement, NTAModal>(
    (
        {
            children,
            open,
            onClose,
            maskClassName,
            maskStyle,
            className,
            ...props
        },
        ref,
    ) => {
        const [maskClasses, setMaskClasses] = useState<string>(
            twMerge(drawerStyles.mask.base, maskClassName),
        );

        const [classes, setClasses] = useState<string>(
            twMerge(styles.base, className),
        );

        const close = useCallback(() => {
            setClasses(twMerge(styles.base, className));
            setMaskClasses(twMerge(drawerStyles.mask.base, maskClassName));
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
                setMaskClasses(twMerge(maskClasses, drawerStyles.mask.active));
            }
        }, [wrapper]);

        if (!wrapper) return null;

        return createPortal(
            <div className={maskClasses} style={maskStyle} onClick={onClose}>
                <div
                    {...props}
                    ref={ref}
                    className={classes}
                    onTransitionEnd={onTransitionEnd}
                    onClick={e => e.stopPropagation()}
                    role='dialog'
                >
                    {children}
                </div>
            </div>,
            wrapper,
        );
    },
);
export default Modal;
