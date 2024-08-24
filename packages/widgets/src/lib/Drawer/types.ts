import { CSSProperties, HTMLProps } from 'react';

export interface TDrawer extends HTMLProps<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    maskClassName?: string;
    maskStyle?: CSSProperties;
}
