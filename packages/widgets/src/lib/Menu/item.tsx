import { cloneElement, forwardRef, useMemo } from 'react';
import { NTAMenuItem } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';
import { RiCheckboxCircleFill } from '@remixicon/react';

const MenuItem = forwardRef<HTMLLIElement, NTAMenuItem>(
    ({ children, selected, icon, ...props }, ref) => {
        const classes = twMerge(
            styles.item.base,
            classNames({
                [styles.item.selected]: selected,
                [styles.item.disabled]: props.disabled,
            }),
            props.className,
        );

        const styledIcon = useMemo(() => {
            if (!icon) return null;
            return cloneElement(icon, {
                ...props,
                className: twMerge(styles.item.icon, icon.props.className),
            });
        }, [icon]);

        return (
            <li
                {...props}
                role='menuitem'
                ref={ref}
                tabIndex={0}
                className={classes}
                aria-selected={selected}
                aria-disabled={props.disabled}
            >
                {styledIcon}
                {children}
                <RiCheckboxCircleFill
                    className={twMerge(
                        styles.item.icon,
                        styles.item.tailIcon,
                        classNames({
                            block: selected,
                        }),
                    )}
                />
            </li>
        );
    },
);

export default MenuItem;
