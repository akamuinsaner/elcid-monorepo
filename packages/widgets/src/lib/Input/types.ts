import { HTMLProps, MutableRefObject, ReactElement } from 'react';

export interface NTAInput extends Omit<HTMLProps<HTMLInputElement>, 'prefix'> {
    error?: boolean;
    disabled?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement>;
    prefix?: ReactElement;
    suffix?: ReactElement;
}
