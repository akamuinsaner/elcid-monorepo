import { ReactElement, cloneElement, forwardRef, memo, useMemo } from 'react';
import { TButton } from './types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { styles } from './styles';

const IconButton = forwardRef<
    HTMLButtonElement,
    Omit<TButton, 'prefix' | 'suffix'>
>(
    (
        {
            size = 'md',
            variant = 'primary',
            children,
            type,
            className,
            ...props
        },
        ref,
    ) => {
        const classes = twMerge(
            styles.base,
            classNames({
                [styles.iconButton.size[size]]: !!size,
                [styles.varaint[variant]]: !!variant,
                [styles.disabled]: props.disabled,
            }),
            className,
        );

        const child = useMemo(() => {
            const c = children as ReactElement;
            return cloneElement(c, {
                className: twMerge(
                    styles.iconButton.iconSize[size],
                    c.props.className,
                ),
            });
        }, [children]);

        return (
            <button
                type='button'
                tabIndex={0}
                ref={ref}
                className={classes}
                {...props}
            >
                {child}
            </button>
        );
    },
);

export default IconButton;
