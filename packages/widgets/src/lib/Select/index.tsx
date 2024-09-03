'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    MouseEventHandler,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { NTASelect } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';
import { SelectContext, NTASelectContext } from './context';
import Popup from '../Popup';
import { styles as inputStyles } from '../Input/styles';
import { RiArrowDownSLine } from '@remixicon/react';

const Select = ({
    children,
    inputRef,
    defaultValue,
    onChange,
    value,
    open,
    onOpenChange,
    ...props
}: NTASelect) => {
    const [val, setVal] = useState<string>('');
    const eleRef = useRef<HTMLInputElement>(null);
    const [anchor, setAnchor] = useState<HTMLElement>(null);
    const anchorRef = useRef<HTMLSpanElement>(null);
    const [opening, setOpening] = useState<boolean>(false);

    const finalRef = useMemo(() => {
        return inputRef || eleRef;
    }, [inputRef]);

    const wrapperClasses = twMerge(
        styles.wrapper.base,
        classNames({
            [styles.wrapper.focus]: opening,
            [styles.wrapper.error]: props.error,
            [styles.wrapper['error&focus']]: props.error && opening,
            [styles.wrapper.disabled]: props.disabled,
        }),
        props.className,
    );

    const displayMap = useMemo(() => {
        let preChildren = [];
        let result = new Map<string, string>();
        if (!Array.isArray(children)) preChildren = [children];
        else preChildren = children;
        Children.map(preChildren, (child: ReactElement) => {
            result.set(child.props.value, child.props.children);
        });
        return result;
    }, [children]);

    const inputClasses = twMerge(styles.input.base);

    const onSelectChange = (v: string) => {
        if (onChange) onChange(v);
        if (value !== undefined) return;
        setVal(v);
    };

    const contextValue: NTASelectContext = {
        value: val,
        onSelectChange: onSelectChange,
    };

    useEffect(() => {
        if (anchorRef.current) setAnchor(anchorRef.current);
    }, []);

    useEffect(() => {
        if (value !== undefined) {
            setVal(value);
            return;
        }
        if (defaultValue !== undefined) {
            setVal(defaultValue);
        }
    }, [value, defaultValue]);

    const onSelectClick: MouseEventHandler<HTMLSpanElement> = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (onOpenChange) onOpenChange(false);
        if (open !== undefined) return;
        setOpening(true);
    };

    const close = () => {
        if (onOpenChange) onOpenChange(false);
        if (open !== undefined) return;
        setOpening(false);
    };

    const addOnAfter = useMemo(() => {
        return cloneElement(<RiArrowDownSLine />, {
            className: twMerge(inputStyles.icon.base),
        });
    }, []);

    return (
        <SelectContext.Provider value={contextValue}>
            <span
                ref={anchorRef}
                tabIndex={props.disabled ? -1 : 0}
                className={wrapperClasses}
                onClick={onSelectClick}
                role='select'
            >
                <input
                    {...props}
                    readOnly={true}
                    value={displayMap.get(val) || ''}
                    // onChange={onInputChange}
                    role='textbox'
                    className={inputClasses}
                    ref={finalRef}
                    disabled={props.disabled}
                />
                {addOnAfter}
            </span>
            <Popup
                open={opening}
                placement='bottom-start'
                anchor={anchor}
                close={close}
                wrapperId='dropdown-id'
                style={{ width: anchor?.offsetWidth }}
            >
                {children}
            </Popup>
        </SelectContext.Provider>
    );
};

export default Select;
