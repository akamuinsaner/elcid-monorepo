import { HTMLProps, ReactElement, ReactNode } from 'react';

export interface NTAMenu extends HTMLProps<HTMLUListElement> {
    children: ReactNode;
}

export interface NTAMenuItem extends HTMLProps<HTMLLIElement> {
    children: ReactNode;
    selected?: boolean;
    icon?: ReactElement;
}
