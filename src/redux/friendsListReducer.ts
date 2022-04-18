const SET_VIEW_ALL = "MY_APP/SRC/REDUX/FRIENDS_LIST_REDUCER/SET_VIEW_ALL"
const SET_IS_REFRESH = "MY_APP/SRC/REDUX/FRIENDS_LIST_REDUCER/SET_IS_REFRESH"
const SET_FRIENDS_IN_LIST = "MY_APP/SRC/REDUX/FRIENDS_LIST_REDUCER/SET_FRIENDS_IN_LIST"

export interface ISetViewAllAction {
    type: typeof SET_VIEW_ALL
}

export interface ISetIsRefreshAction {
    type: typeof SET_IS_REFRESH
    status: boolean
}

export interface ISetFriendInListAction {
    type: typeof SET_FRIENDS_IN_LIST
    arrayOfFriends: Array<IFriendsArrayItem>
}

type TActionsTypes =
    ISetViewAllAction
    | ISetIsRefreshAction
    | ISetFriendInListAction


export interface IFriendsArrayItem {
    followed: boolean,
    id: number,
    name: string,
    photos: { small: null | string, large: null | string },
    status: null | string,
    uniqueUrlName: null | string,
}

export interface IFriendsArrayInitialStateType {
    viewAll: boolean
    isRefresh: boolean
    friends: Array<IFriendsArrayItem>
}

const initialState: IFriendsArrayInitialStateType = {
    isRefresh: false,
    viewAll: false,
    friends: []
}

export const friendsListReducer = (state = initialState, action: TActionsTypes) => {
    switch (action.type) {
        case SET_VIEW_ALL:
            return {
                ...state, viewAll: !state.viewAll
            }

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

export const setIsRefresh = (status: boolean): ISetIsRefreshAction => ({
    type: SET_IS_REFRESH,
    status
})

export const setViewAll = (): ISetViewAllAction => ({
    type: SET_VIEW_ALL
})