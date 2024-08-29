'use client';
import {
    ChangeEventHandler,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { NTAStepper } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { RiAddFill, RiSubtractFill } from '@remixicon/react';
import classNames from 'classnames';

const Stepper = ({
    className,
    inputRef,
    value,
    defaultValue,
    onChange,
    step = 1,
    ...props
}: NTAStepper) => {
    const [val, setVal] = useState<number>(0);
    const [focusing, setFocusing] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const finalRef = useMemo(() => {
        return inputRef || ref;
    }, []);

    const wrapperClasses = twMerge(
        styles.wrapper.base,
        classNames({
            [styles.wrapper.focus]: focusing,
            [styles.wrapper.disabled]: props.disabled,
            [styles.wrapper.error]: props.error,
            [styles.wrapper['error&focus']]: props.error && focusing,
        }),
        className,
    );

    const inputClasses = twMerge(styles.input.base);

    const addIconClasses = twMerge(
        styles.icon.base,
        classNames({
            [styles.icon.disabled]: props.max <= val,
        }),
    );

    const minusIconClasses = twMerge(
        styles.icon.base,
        classNames({
            [styles.icon.disabled]: props.min >= val,
        }),
    );

    useEffect(() => {
        if (value !== undefined) {
            setVal(value);
            return;
        }
        if (defaultValue !== undefined) {
            setVal(defaultValue);
        }
    }, [value, defaultValue]);

    const onInputChange = (v: number) => {
        if (onChange) onChange(v);
        if (value !== undefined) return;
        setVal(v);
    };

    const onStepping = (type: 'add' | 'minus') => {
        if (type === 'add') {
            props.max !== undefined && val + step >= props.max
                ? onInputChange(props.max)
                : onInputChange(val + step);
        } else {
            props.min !== undefined && val - step <= props.min
                ? onInputChange(props.min)
                : onInputChange(val - step);
        }
    };

    return (
        <div
            className={wrapperClasses}
            tabIndex={0}
            onFocus={() => setFocusing(true)}
            onBlur={() => setFocusing(false)}
        >
            <RiSubtractFill
                className={minusIconClasses}
                onClick={() => onStepping('minus')}
            />
            <input
                ref={finalRef}
                {...props}
                type='number'
                className={inputClasses}
                value={`${val}`}
                onChange={e => onInputChange(Number(e.target.value))}
            />
            <RiAddFill
                className={addIconClasses}
                onClick={() => onStepping('add')}
            />
        </div>
    );
};

export default Stepper;
