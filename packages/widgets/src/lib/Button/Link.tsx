import { ReactElement, cloneElement, forwardRef, memo, useMemo } from 'react';
import { TLink } from './types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { styles } from './styles';

const Link = forwardRef<HTMLAnchorElement, TLink>(
    (
        { size = 'md', children, type, className, prefix, suffix, ...props },
        ref,
    ) => {
        const classes = twMerge(
            styles.link.base,
            classNames({
                [styles.link.size[size]]: !!size,
                [styles.link.disabled]: props.disabled,
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
            <a
                role='button'
                tabIndex={0}
                ref={ref}
                className={classes}
                {...props}
            >
                {addOnBefore}
                {children}
                {addOnAfter}
            </a>
        );
    },
);

export default Link;
