import classNames from 'classnames';
import {
    HTMLProps,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { getPopupInsetData } from './utils';
import { createWrapperAndAppendToBody } from '@elcid-monorepo/utils';

export interface NTAPopup extends HTMLProps<HTMLDivElement> {
    open: boolean;
    className?: string;
    close: () => void;
    children: ReactNode;
    anchor: HTMLElement;
    wrapperId?: string;
    placement?:
        | 'top'
        | 'bottom'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'left-start'
        | 'left'
        | 'left-end'
        | 'right-start'
        | 'right'
        | 'right-end';
}

const Popup = ({
    open,
    close,
    children,
    placement = 'bottom-start',
    anchor,
    className,
    wrapperId,
    ...props
}: NTAPopup) => {
    const baseClasses = useMemo(() => {
        return twMerge(
            styles.dropbox.base,
            classNames({
                [styles.dropbox.placement.bottom]: placement.includes('bottom'),
                [styles.dropbox.placement.top]: placement.includes('top'),
                [styles.dropbox.placement.right]: placement.includes('right'),
                [styles.dropbox.placement.left]: placement.includes('left'),
            }),
            className,
        );
    }, [placement]);

    const activeClasses = useMemo(() => {
        return twMerge(
            classNames({
                [styles.dropbox.active.topBottom]:
                    placement.includes('bottom') || placement.includes('top'),
                [styles.dropbox.active.leftRight]:
                    placement.includes('right') || placement.includes('left'),
            }),
            className,
        );
    }, [placement]);

    const [wrapper, setWrapper] = useState<HTMLDivElement>(null);
    const [boxClasses, setBoxClasses] = useState<string>(baseClasses);
    const boxRef = useRef<HTMLDivElement>(null);

    const [insetData, setInsetData] = useState<{
        top: number | 'auto';
        right: number | 'auto';
        bottom: number | 'auto';
        left: number | 'auto';
    }>(null);

    const insetStyle = useMemo(() => {
        if (!insetData) return '';
        return `
        ${insetData.top === 'auto' ? 'auto' : `${insetData.top}px`}
        ${insetData.right === 'auto' ? 'auto' : `${insetData.right}px`}
        ${insetData.bottom === 'auto' ? 'auto' : `${insetData.bottom}px`}
        ${insetData.left === 'auto' ? 'auto' : `${insetData.left}px`}
        `;
    }, [insetData]);

    const resetDropboxClasses = () => setBoxClasses(baseClasses);

    const onDropboxTransitionEnd = () => {
        if (!boxClasses.includes('active')) {
            setWrapper(null);
        }
    };

    const createWrapper = () =>
        setWrapper(createWrapperAndAppendToBody(wrapperId));

    useEffect(() => {
        if (open) createWrapper();
        else resetDropboxClasses();
    }, [open]);

    useEffect(() => {
        if (wrapper) setBoxClasses(twMerge(baseClasses, activeClasses));
    }, [wrapper]);

    const computeStyle = () => {
        setInsetData(getPopupInsetData(anchor, placement, boxRef.current));
    };

    useEffect(() => {
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    useEffect(() => {
        computeStyle();
        window.addEventListener('resize', computeStyle);
        window.addEventListener('scroll', computeStyle);
        return () => {
            window.removeEventListener('resize', computeStyle);
            window.removeEventListener('scroll', computeStyle);
        };
    }, [wrapper]);

    if (!wrapper) return null;

    return createPortal(
        <div
            ref={boxRef}
            className={boxClasses}
            onTransitionEnd={onDropboxTransitionEnd}
            style={{ inset: insetStyle }}
            aria-hidden={!open}
            {...props}
        >
            {children}
        </div>,
        wrapper,
    );
};

export default Popup;
