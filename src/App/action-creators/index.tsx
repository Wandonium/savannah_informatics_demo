import { ActionType } from "../action-types";
import { Action, User, Post, Address } from "../actions";
import { Dispatch } from "redux";

export const addUsers = (users: User[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USERSADDED,
            payload: users
        })
    }
}

export const updateUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USERUPDATED,
            payload: user
        })
    }
}

export const addPosts = (posts: Post[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.POSTSADDED,
            payload: posts
        })
    }
}

export const addAddresses = (addresses: Address[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADDRESSESADDED,
            payload: addresses
        })
    }
}