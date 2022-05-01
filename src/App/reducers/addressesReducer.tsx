import { Action, Address } from '../actions';
import { ActionType } from '../action-types';

const reducer = (
    state: Address[] = [],
    action: Action
) => {
    switch(action.type) {
        case ActionType.ADDRESSESADDED:
            return [...action.payload];
        default: return state;
    }
}

export default reducer;