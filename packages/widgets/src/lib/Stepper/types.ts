import { HTMLProps, MutableRefObject } from 'react';

export interface NTAStepper
    extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    error?: boolean;
    defaultValue?: number;
    value?: number;
    inputRef?: MutableRefObject<HTMLInputElement>;
    max?: number;
    min?: number;
    onChange?: (value: number) => void;
    step?: number;
}
