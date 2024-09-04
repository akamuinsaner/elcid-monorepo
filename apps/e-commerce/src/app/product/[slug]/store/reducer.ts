import { EActions, Action } from './action';
import { State } from './state';

export const reducer = (state: State, action: Action<any>): State => {
    switch (action.type) {
        case EActions['updateProduct']:
            return { ...state, product: action.value };
        case EActions['updateActiveSpe']:
            return { ...state, activeSpe: action.value };
        case EActions['updateReviewOpen']:
            return { ...state, reviewOpen: action.value };
        default:
            return state;
    }
};
