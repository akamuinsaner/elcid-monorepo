import { HTMLProps, ReactNode } from 'react';

export interface NTATabs extends Omit<HTMLProps<HTMLUListElement>, 'onChange'> {
    value?: number;
    onChange?: (value: number) => void;
    children: ReactNode;
}

export interface NTATab extends HTMLProps<HTMLLIElement> {
    children: ReactNode;
    index?: number;
}
