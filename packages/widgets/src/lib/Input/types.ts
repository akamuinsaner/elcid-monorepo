import { HTMLProps, MutableRefObject, ReactElement } from 'react';

export interface NTAInput extends HTMLProps<HTMLInputElement> {
    error?: boolean;
    disabled?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement>;
    suffix?: ReactElement;
}
