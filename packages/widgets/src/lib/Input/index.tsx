'use client';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { NTAInput } from './types';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const Input = forwardRef<HTMLSpanElement, NTAInput>(
    (
        {
            className,
            style,
            error,
            disabled,
            value = '',
            onChange = () => {},
            ...props
        },
        ref,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [focusing, setFocusing] = useState<boolean>(false);
        const wrapperClasses = twMerge(
            styles.wrapper.base,
            classNames({
                [styles.wrapper.focus]: focusing,
                [styles.wrapper.error]: error,
                [styles.wrapper['error&focus']]: error && focusing,
                [styles.wrapper.disabled]: disabled,
            }),
            className,
        );

        const inputClasses = twMerge(styles.input.base);

        useEffect(() => {
            if (focusing && !!inputRef.current) inputRef.current.focus();
            if (!focusing && !!inputRef.current) inputRef.current.blur();
        }, [focusing, disabled]);

        return (
            <span
                ref={ref}
                role='textbox'
                tabIndex={disabled ? -1 : 0}
                className={wrapperClasses}
                onFocus={() => !disabled && setFocusing(true)}
                onBlur={() => !disabled && setFocusing(false)}
            >
                <input
                    className={inputClasses}
                    ref={inputRef}
                    disabled={disabled}
                    {...props}
                    value={value}
                    onChange={onChange}
                />
            </span>
        );
    },
);

export default Input;
