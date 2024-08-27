'use client';
import { forwardRef, useEffect, useState } from 'react';
import { NTACheckbox } from './types';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { RiCheckLine, RiSubtractLine } from '@remixicon/react';

const Checkbox = forwardRef<HTMLInputElement, NTACheckbox>(
    ({ indeterminate, defaultChecked, checked, onChange, ...props }, ref) => {
        const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
        const [isChecked, setIsChecked] = useState<boolean>(false);
        const [focusing, setFocusing] = useState<boolean>(false);

        const wrapperClasses = twMerge(styles.wrapper.base);

        const inputClasses = twMerge(styles.input.base);

        const innerClasses = twMerge(
            styles.inner.base,
            classNames({
                [styles.inner.focus]: focusing || isChecked || isIndeterminate,
                [styles.inner.checked]: isChecked || isIndeterminate,
            }),
        );
        const checkMarkClasses = twMerge(
            styles.mark.base,
            classNames({
                [styles.mark.show]: isChecked,
            }),
        );

        const indeterminateClasses = twMerge(
            styles.mark.base,
            classNames({
                [styles.mark.show]: isIndeterminate,
            }),
        );

        const setChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
            if (typeof checked === 'boolean') return;
            if (indeterminate) return;
            setIsChecked(e.target.checked);
        };

        useEffect(() => {
            if (typeof checked === 'boolean') {
                setIsChecked(checked);
                return;
            }
            if (defaultChecked) {
                setIsChecked(true);
            }
        }, [checked]);

        useEffect(() => {
            if (typeof indeterminate === 'boolean') {
                setIsIndeterminate(indeterminate);
            }
        }, [indeterminate]);

        useEffect(() => {}, []);

        return (
            <span className={wrapperClasses}>
                <span className={innerClasses}>
                    <RiCheckLine className={checkMarkClasses} />
                    <RiSubtractLine className={indeterminateClasses} />
                </span>
                <input
                    className={inputClasses}
                    type='checkbox'
                    checked={isChecked}
                    onChange={setChecked}
                    onFocus={() => setFocusing(true)}
                    onBlur={() => setFocusing(false)}
                    {...props}
                />
            </span>
        );
    },
);

export default Checkbox;
