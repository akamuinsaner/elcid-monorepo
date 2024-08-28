'use client';
import {
    cloneElement,
    FC,
    MouseEventHandler,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { NTADropdown } from './types';
import Popup from '../Popup';

const Dropdown: FC<NTADropdown> = ({
    children,
    menu,
    defaultOpen,
    open,
    onOpenChange,
    placement = 'bottom-start',
    ...props
}) => {
    const [isOpening, setIsOpening] = useState<boolean>(false);
    const [anchor, setAnchor] = useState<HTMLElement>(null);
    const anchorRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (anchorRef.current) setAnchor(anchorRef.current);
    }, []);

    const onAnchorTrigger: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (onOpenChange) onOpenChange(!isOpening);
        if (open !== undefined) return;
        setIsOpening(!isOpening);
    };

    const close = () => {
        if (onOpenChange) onOpenChange(false);
        if (open !== undefined) return;
        setIsOpening(false);
    };

    useEffect(() => {
        if (typeof open === 'boolean') {
            setIsOpening(open);
            return;
        }
        if (typeof defaultOpen === 'boolean') {
            setIsOpening(defaultOpen);
        }
    }, [open]);

    return (
        <>
            {cloneElement(children, {
                ref: anchorRef,
                onClick: onAnchorTrigger,
            })}
            <Popup
                open={isOpening}
                placement={placement}
                anchor={anchor}
                close={close}
                wrapperId='dropdown-id'
                {...props}
            >
                {menu}
            </Popup>
        </>
    );
};

export default Dropdown;
