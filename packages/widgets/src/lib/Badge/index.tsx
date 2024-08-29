import { forwardRef } from 'react';
import { NTABadge } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';

const Badge = forwardRef<HTMLSpanElement, NTABadge>(
    ({ variant = 'neutral', size = 'md', children, ...props }, ref) => {
        const classes = twMerge(
            styles.base,
            classNames({
                [styles.variant[variant]]: !!variant,
                [styles.size[size]]: !!size,
            }),
            props.className,
        );

        return (
            <span {...props} ref={ref} className={classes}>
                {children}
            </span>
        );
    },
);

export default Badge;
