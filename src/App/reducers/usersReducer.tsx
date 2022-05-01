import { Action, User } from "../actions";
import { ActionType } from "../action-types";


const reducer = (
    state: User[] = [],
    action: Action
) => {
    switch(action.type) {
        case ActionType.USERSADDED:
            return [...action.payload];
        case ActionType.USERUPDATED:
            let users = [...state];
            const updateIndex = users.findIndex(user => user.id === action.payload.id);
            users.splice(updateIndex, 1, action.payload);
            return [...users];
        // case ActionType.POSTSADDED:
        //     let userId = action.payload[0].userId;
        //     console.log('userId: ', userId);
        //     let newState = state.map(user => 
        //         user.id === userId ? {...user, posts: action.payload } : user);
        //     console.log('newState: ', newState);
        //     return newState;
        default: return state;
    }
}

export default reducer;