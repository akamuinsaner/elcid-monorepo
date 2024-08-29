import { State } from './state';

export enum EActions {
    'updateProduct',
    'updateActiveSpe',
}

export interface Action<T> {
    type: EActions;
    value?: T;
}

export const updateProductAction = (
    value: State['product'],
): Action<State['product']> => {
    return {
        type: EActions['updateProduct'],
        value,
    };
};

export const updateActiveSpeAction = (
    value: State['activeSpe'],
): Action<State['activeSpe']> => {
    return {
        type: EActions['updateActiveSpe'],
        value,
    };
};
