'use client';
import {
    cloneElement,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { FormContext, RTFormContext } from './context';
import { ruleCheck, valueHelper } from './helpers';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export type FormItemInstanceType = {
    element?: HTMLElement;
    onChange?(v: any): void;
    getValue?: () => any;
    setValue?: (v: any) => void;
    setError?: (error: string) => void;
    validate?: (cb: (error: string, value: any) => void) => void;
};

export type RuleConfig = {
    required?: boolean;
    len?: number;
    max?: number;
    min?: number;
    regex?: RegExp;
    msg?: string;
};

export type FormItemProps = {
    name: string;
    children: ReactElement;
    rules?: RuleConfig[];
    checkable?: boolean;
    multiple?: boolean;
    label?: string;
    disabled?: boolean;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
};

export type FormItemComponent<T> = React.FunctionComponent<T>;

const FormItem: FormItemComponent<FormItemProps> = ({
    name,
    checkable = false,
    multiple,
    children,
    rules = [],
    label,
    disabled,
    labelPosition = 'top',
}) => {
    const context = useContext<RTFormContext>(FormContext);

    const getSafeValue = (value?: any) => {
        if (value) return value;
        if (multiple) return [];
        if (checkable) return false;
        return '';
    };

    const _this = useRef<FormItemInstanceType>({});
    const [value, setValue] = useState<any>(getSafeValue());
    const [error, setError] = useState<string>(null);

    const _setError = useCallback((error: any) => {
        setError(error);
    }, []);

    const _setValue = useCallback((v: any) => {
        const value = getSafeValue(v);
        setValue(value);
    }, []);

    const _getValue = useCallback(() => {
        return value;
    }, [value]);

    const _validate = useCallback(
        (cb: any) => {
            const err = errorCheck(value);
            setError(err);
            cb(err, value);
        },
        [value],
    );

    _this.current = {
        ..._this.current,
        setError: _setError,
        setValue: _setValue,
        getValue: _getValue,
        validate: _validate,
    };

    useEffect(() => {
        context.instance.wire(name, _this);
        return () => {
            context.instance.unWire(name);
        };
    }, []);

    useEffect(() => {
        _setValue(context.instance.getFieldValue(name));
    }, []);

    const errorCheck = useCallback(
        (value: any) => {
            if (!rules || !rules.length) return '';
            return ruleCheck(name, value, rules);
        },
        [name],
    );

    const valueOnChange = useCallback((e: any) => {
        const value = valueHelper(e, checkable);
        setError(errorCheck(value));
        setValue(value);
        context.instance.setFieldValue(name, value);
    }, []);

    const finalDisabled = useMemo(() => {
        return disabled || context.disabled || false;
    }, [disabled, context.disabled]);

    const props = {
        id: name,
        value,
        checked: value,
        onChange: valueOnChange,
        disabled: finalDisabled,
    };

    const labelClasses = twMerge(
        'font-base text-secondary shrink-0 cursor-pointer',
        classNames({
            'text-disabled select-none pointer-event-none': disabled,
        }),
    );

    const wrapperClasses = twMerge(
        'flex items-center justify-center gap-3',
        classNames({
            'flex-col items-start': labelPosition === 'top',
            'flex-row-reverse justify-end': labelPosition === 'right',
            'flex-col-reverse items-end': labelPosition === 'bottom',
            'flex-row justify-start': labelPosition === 'left',
        }),
    );

    let subComponent: JSX.Element = children;

    const preChildren = cloneElement(subComponent, {
        ...props,
        ...subComponent.props,
    });

    return (
        <div className={wrapperClasses}>
            <label className={labelClasses} htmlFor={name}>
                {label}
            </label>
            {preChildren}
        </div>
    );
};

export default FormItem;
