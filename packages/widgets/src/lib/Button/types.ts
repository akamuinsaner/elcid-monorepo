import { HTMLProps, ReactNode } from 'react';

export interface TButton
    extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'prefix'> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
    prefix?: ReactNode;
    suffix?: ReactNode;
}

export interface TLink
    extends Omit<HTMLProps<HTMLAnchorElement>, 'prefix' | 'size'> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    prefix?: ReactNode;
    suffix?: ReactNode;
}
