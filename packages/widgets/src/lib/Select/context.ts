import { createContext } from 'react';

export type NTASelectContext = {
    value: string;
    onSelectChange: (v: string) => void;
};

export const SelectContext = createContext<NTASelectContext>(null);
