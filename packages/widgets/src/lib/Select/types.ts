import { HTMLProps, MutableRefObject, ReactElement, ReactNode } from 'react';

export interface NTASelect
    extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    inputRef?: MutableRefObject<HTMLInputElement>;
    error?: boolean;
    children?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: string;
    onChange?: (v: string) => void;
    defaultValue?: string;
}

export interface NTAOption extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    icon?: ReactElement;
    value: string;
}
