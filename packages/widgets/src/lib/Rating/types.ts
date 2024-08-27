import { HTMLProps, ReactElement, ReactNode } from 'react';

export interface NTARating
    extends Omit<HTMLProps<HTMLSpanElement>, 'onChange'> {
    icon?: ReactElement;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    precision?: 0.5 | 1;
}
