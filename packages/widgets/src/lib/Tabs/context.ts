import { createContext } from 'react';

export type NTATabsContext = {
    active: number;
    onTabChange: (active: number) => void;
    scrollTo: (rect: DOMRect) => void;
};

export const TabsContext = createContext<NTATabsContext>(null);
