import { Action, Post } from '../actions';
import { ActionType } from '../action-types';

const reducer = (
    state: Post[] = [],
    action: Action
) => {
    switch(action.type) {
        case ActionType.POSTSADDED:
            return [...action.payload];
        default: return state;
    }
}

export default reducer;