'use client';
import { cloneElement, forwardRef, useMemo, useContext } from 'react';
import { NTAOption, NTASelect } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { styles as menuStyles } from '../Menu/styles';
import classNames from 'classnames';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { SelectContext, NTASelectContext } from './context';

const Option = ({ children, icon, value, ...props }: NTAOption) => {
    const context = useContext<NTASelectContext>(SelectContext);
    const selected = context.value === value;
    const classes = twMerge(
        menuStyles.item.base,
        classNames({
            [menuStyles.item.selected]: selected,
            [menuStyles.item.disabled]: props.disabled,
        }),
        props.className,
    );

    const styledIcon = useMemo(() => {
        if (!icon) return null;
        return cloneElement(icon, {
            ...props,
            className: twMerge(menuStyles.item.icon, icon.props.className),
        });
    }, [icon]);

    const onOptionClick = () => {
        context.onSelectChange(value);
    };

    return (
        <div
            {...props}
            role='option'
            tabIndex={0}
            className={classes}
            aria-selected={selected}
            aria-disabled={props.disabled}
            onClick={onOptionClick}
        >
            {styledIcon}
            {children}
            <RiCheckboxCircleFill
                className={twMerge(
                    menuStyles.item.icon,
                    menuStyles.item.tailIcon,
                    classNames({
                        block: selected,
                    }),
                )}
            />
        </div>
    );
};

export default Option;
