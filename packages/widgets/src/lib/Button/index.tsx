import { ReactElement, cloneElement, forwardRef, memo, useMemo } from 'react';
import { TButton } from './types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { styles } from './styles';

const Button = forwardRef<HTMLButtonElement, TButton>(
    (
        {
            size = 'md',
            variant = 'primary',
            children,
            type,
            className,
            prefix,
            suffix,
            ...props
        },
        ref,
    ) => {
        const classes = twMerge(
            styles.base,
            classNames({
                [styles.button.size[size]]: !!size,
                [styles.varaint[variant]]: !!variant,
                [styles.disabled]: props.disabled,
            }),
            className,
        );

        const addOnBefore = useMemo(() => {
            if (!prefix) return null;
            const ele = prefix as ReactElement;
            return cloneElement(ele as any, {
                className: twMerge('w-5 h-5', ele.props.className),
            });
        }, [prefix]);

        const addOnAfter = useMemo(() => {
            if (!suffix) return null;
            const ele = suffix as ReactElement;
            return cloneElement(ele as any, {
                className: twMerge('w-5 h-5', ele.props.className),
            });
        }, [suffix]);

        return (
            <button ref={ref} className={classes} {...props}>
                {addOnBefore}
                {children}
                {addOnAfter}
            </button>
        );
    },
);

export default Button;
