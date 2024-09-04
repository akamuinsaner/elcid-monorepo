import { CSSProperties, HTMLProps, ReactElement, ReactNode } from 'react';

export interface NTAModal extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    open: boolean;
    onClose: () => void;
    maskClassName?: string;
    maskStyle?: CSSProperties;
}

export interface NTAModalHeader extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
}

export interface NTAModalBody extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
}

export interface NTAModalFooter extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
}
