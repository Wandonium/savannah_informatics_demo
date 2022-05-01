import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import addressesReducer from './addressesReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
    users: usersReducer,
    addresses: addressesReducer,
    posts: postsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>