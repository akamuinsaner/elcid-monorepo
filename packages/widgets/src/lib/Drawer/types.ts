import { CSSProperties, HTMLProps } from 'react';

export interface NTADrawer extends HTMLProps<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    maskClassName?: string;
    maskStyle?: CSSProperties;
}
