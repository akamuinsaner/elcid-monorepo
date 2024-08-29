import { HTMLProps, ReactElement, ReactNode } from 'react';

export interface NTABadge extends Omit<HTMLProps<HTMLSpanElement>, 'size'> {
    variant?: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}
