'use client';
import {
    cloneElement,
    CSSProperties,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '@elcid-monorepo/utils';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export type RTMessageType = 'success' | 'info' | 'warning' | 'error';

export type RTMessageProps = {
    content?: string;
    type?: RTMessageType;
    className?: string;
    style?: CSSProperties;
    duration?: number;
    onClose?: () => void;
};

class message {
    static info: RTMessageMethod;
    static warning: RTMessageMethod;
    static success: RTMessageMethod;
    static error: RTMessageMethod;
}

const Message = () => {
    const [messageInfo, setMessageInfo] = useState<RTMessageProps>(null);
    const baseClassName = useMemo(
        () =>
            twMerge(
                styles.box.base,
                classNames({
                    [styles.box[messageInfo?.type]]: !!messageInfo?.type,
                }),
            ),
        [messageInfo],
    );
    const showClassName = twMerge(baseClassName, styles.box.show);
    const [boxClassName, setBoxClassName] = useState<string>(baseClassName);
    const [wrapper, setWrapper] = useState<HTMLElement>(null);
    const setOpen = () => {
        setWrapper(createWrapperAndAppendToBody());
    };

    const onTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (!target.className.includes(styles.box.show)) {
            setWrapper(null);
            setMessageInfo(null);
            if (messageInfo?.onClose) messageInfo.onClose();
        }
    };

    const resetClassName = () => {
        setBoxClassName(baseClassName);
    };

    useEffect(() => {
        if (wrapper) setBoxClassName(showClassName);
    }, [wrapper]);

    useEffect(() => {
        if (!messageInfo) return;
        const duration = messageInfo?.duration || 3000;
        setTimeout(() => {
            resetClassName();
        }, duration);
    }, [messageInfo]);

    const generateMessage = (type: RTMessageType) => {
        return (content: string, params = {}) => {
            if (wrapper) return;
            setOpen();
            setMessageInfo({
                content,
                ...params,
                type,
            });
        };
    };
    useEffect(() => {
        message.success = generateMessage('success');
        message.info = generateMessage('info');
        message.warning = generateMessage('warning');
        message.error = generateMessage('error');
    }, []);
    if (!wrapper) return null;

    return createPortal(
        <div className={boxClassName} onTransitionEnd={onTransitionEnd}>
            <div className={styles.badge.base}>Error</div>
            <div className='flex-1'>{messageInfo?.content}</div>
        </div>,
        wrapper,
    );
};

type RTMessageMethod = (
    content: string,
    option?: Exclude<RTMessageProps, 'content'>,
) => void;

const MessageProvider = ({ children }: { children: any }) => {
    return (
        <>
            {children}
            <Message />
        </>
    );
};

export { message, MessageProvider };
