import { HTMLProps, ReactElement, ReactNode } from 'react';
import { NTAPopup } from '../Popup';

export interface NTADropdown extends HTMLProps<HTMLDivElement> {
    children: ReactElement;
    menu: ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: NTAPopup['placement'];
}
