import { EActions, Action } from './action';
import { State } from './state';

export const reducer = (state: State, action: Action<any>): State => {
    switch (action.type) {
        case EActions['updateProduct']:
            return { ...state, product: action.value };
        case EActions['updateActiveSpe']:
            return { ...state, activeSpe: action.value };
        default:
            return state;
    }
};
