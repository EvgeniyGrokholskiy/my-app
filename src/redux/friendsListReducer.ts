const SET_IS_REFRESH = "MY_APP/SRC/REDUX/FRIENDS_LIST_REDUCER/SET_IS_REFRESH"
const SET_FRIENDS_IN_LIST = "MY_APP/SRC/REDUX/FRIENDS_LIST_REDUCER/SET_FRIENDS_IN_LIST"

export interface ISetFriendInListAction {
    type: typeof SET_FRIENDS_IN_LIST
    arrayOfFriends: Array<IFriendsArrayItem>
}

export interface ISetIsRefresh {
    type: typeof SET_IS_REFRESH
    status: boolean
}

type TActionsTypes = ISetIsRefresh | ISetFriendInListAction

export interface IFriendsArrayItem {
    followed: boolean,
    id: number,
    name: string,
    photos: { small: null | string, large: null | string },
    status: null | string,
    uniqueUrlName: null | string,
}

export interface IFriendsArrayInitialStateType {
    isRefresh: boolean
    friends: Array<IFriendsArrayItem>
}

const initialState: IFriendsArrayInitialStateType = {
    isRefresh: false,
    friends: []
}

export const friendsListReducer = (state = initialState, action: TActionsTypes) => {
    switch (action.type) {
        case SET_IS_REFRESH:
            return {
                ...state, isRefresh: action.status
            }


        case SET_FRIENDS_IN_LIST:
            return {
                ...state, friends: action.arrayOfFriends
            }

        default:
            return state

    }
}

export const setFriendInList = (arrayOfFriends: Array<IFriendsArrayItem>): ISetFriendInListAction => ({
    type: SET_FRIENDS_IN_LIST,
    arrayOfFriends
})

export const setIsRefresh = (status: boolean): ISetIsRefresh => ({
    type: SET_IS_REFRESH,
    status
})