import { ActionType } from '../action-types';

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: Address,
    posts: Post[]
}
  
export type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    no_of_users: number
}

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface UsersAddedAction {
    type: ActionType.USERSADDED,
    payload: User[]
}

interface UserUpdatedAction {
    type: ActionType.USERUPDATED,
    payload: User
}

interface PostsAddedAction {
    type: ActionType.POSTSADDED,
    payload: Post[]
}

interface AddressesAddedAction {
    type: ActionType.ADDRESSESADDED,
    payload: Address[]
}

export type Action = UsersAddedAction |
UserUpdatedAction |
PostsAddedAction |
AddressesAddedAction;