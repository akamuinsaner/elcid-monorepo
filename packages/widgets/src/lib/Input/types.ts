import { HTMLProps } from 'react';

export interface NTAInput extends HTMLProps<HTMLInputElement> {
    error?: boolean;
    disabled?: boolean;
}
