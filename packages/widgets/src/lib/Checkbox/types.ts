import { HTMLProps } from 'react';

export interface NTACheckbox extends HTMLProps<HTMLInputElement> {
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
