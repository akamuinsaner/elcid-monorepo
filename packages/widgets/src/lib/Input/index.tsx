'use client';
import {
    ChangeEventHandler,
    cloneElement,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
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
            inputRef,
            suffix,
            ...props
        },
        ref,
    ) => {
        const [val, setVal] = useState<string | number | readonly string[]>('');
        const ir = useRef<HTMLInputElement>(null);
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

        const finalRef = useMemo(() => {
            return inputRef || ir;
        }, []);

        const inputClasses = twMerge(styles.input.base);

        useEffect(() => {
            if (!!finalRef.current) {
                if (focusing) finalRef.current.focus();
                if (!focusing) finalRef.current.blur();
            }
        }, [focusing, disabled]);

        const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
            if (onChange) onChange(e);
            if (value !== undefined) return;
            setVal(e.target.value);
        };

        useEffect(() => {
            if (value !== undefined) {
                setVal(value);
                return;
            }
            if (props.defaultValue !== undefined) {
                setVal(props.defaultValue);
            }
        }, [value, props.defaultValue]);

        const addOnAfter = useMemo(() => {
            if (!suffix) return null;
            return cloneElement(suffix, {
                className: twMerge(styles.icon.base, suffix.props?.className),
            });
        }, [suffix]);

        return (
            <span
                ref={ref}
                tabIndex={disabled ? -1 : 0}
                className={wrapperClasses}
                onFocus={() => setFocusing(true)}
                onBlur={() => setFocusing(false)}
            >
                <input
                    {...props}
                    value={val}
                    onChange={onInputChange}
                    role='textbox'
                    className={inputClasses}
                    ref={finalRef}
                    disabled={disabled}
                />
                {addOnAfter}
            </span>
        );
    },
);

export default Input;
