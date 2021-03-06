import {Dispatch} from "redux"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "./reduxStore"
import {UsersArrayItemType} from "../types/types"
import {ISetIsRefreshAction, setIsRefresh} from "./friendsListReducer"
import {followUnfollowAPI, ResponseCode, usersAPI} from "../api/api"

const SET_USERS = "MY-APP/FIND-USER/SET_USERS"
const SHOW_PAGE = "MY-APP/FIND-USER/SHOW_PAGE"
const SET_LOADER = "MY-APP/FIND-USER/SET_LOADER"
const SET_TOTAL_USER_COUNT = "MY-APP/FIND-USER/SET_TOTAL_USER_COUNT"
const FOLLOWING_IN_PROGRESS = "MY-APP/FIND-USER/FOLLOWING_IN_PROGRESS"
const TO_FOLLOW_TO_UNFOLLOW_FLOW = "MY-APP/FIND-USER/TO_FOLLOW_TO_UNFOLLOW_FLOW"

interface IToFollowUnFollowFlowAction {
    type: typeof TO_FOLLOW_TO_UNFOLLOW_FLOW,
    id: number,
    followUnfollowFlow: boolean
}

interface ISetUserAction {
    type: typeof SET_USERS,
    users: any,
    page: number
}

interface IShowPageAction {
    type: typeof SHOW_PAGE,
    selectedPage: number
}

interface ISetTotalUsersCountAction {
    type: typeof SET_TOTAL_USER_COUNT,
    totalUsers: number
}

interface ISetLoaderAction {
    type: typeof SET_LOADER,
    isFetching: boolean
}

interface IFollowingInProgressAction {
    type: typeof FOLLOWING_IN_PROGRESS,
    isInProgress: boolean,
    userId: number
}

type TActionsTypes =
    IToFollowUnFollowFlowAction
    | ISetUserAction
    | IShowPageAction
    | ISetTotalUsersCountAction
    | ISetLoaderAction
    | IFollowingInProgressAction
    | ISetIsRefreshAction

export interface IFindUsersInitialState {
    findUsers: Array<UsersArrayItemType>,
    currentPage: number,
    totalUsers: number,
    usersOnPage: number,
    isFetching: boolean,
    isFollowingInProgress: Array<number>
}

const initialState: IFindUsersInitialState = {
    findUsers: [],
    currentPage: 1,
    totalUsers: 100,
    usersOnPage: 5,
    isFetching: true,
    isFollowingInProgress: []
}

export const findUsersReducer = (state = initialState, action: TActionsTypes) => {

    switch (action.type) {

        case TO_FOLLOW_TO_UNFOLLOW_FLOW:
            return {
                ...state,
                findUsers: state.findUsers.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followUnfollowFlow}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state, findUsers: [...action.users], currentPage: action.page
            }

        case SHOW_PAGE:
            return {
                ...state, currentPage: action.selectedPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsers: action.totalUsers
            }

        case SET_LOADER:
            return {
                ...state, isFetching: action.isFetching
            }

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export type TThunkCreator = ThunkAction<Promise<void> | void, AppStateType, any, TActionsTypes>


export const getUsers = (currentPage: number, usersOnPage: number): TThunkCreator => async (dispatch: Dispatch) => {
    dispatch(setLoader(true))
    const data = await usersAPI.getUsers(currentPage, usersOnPage)
    dispatch(setUsers(data.items, currentPage))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setLoader(false))
}

type TActionCreator = (userId: number, flow: boolean) => IToFollowUnFollowFlowAction

const _followUnfollowFlow = async (dispatch: Dispatch<TActionsTypes>, userId: number, apiMethod: (userId: number) => Promise<{ resultCode: number }>, actionCreator: TActionCreator, flow: boolean) => {
    dispatch(followingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === ResponseCode.success) {
        dispatch(actionCreator(userId, flow))
    }
    dispatch(followingInProgress(false, userId))
    dispatch(setIsRefresh(true))
}

export const setUnfollow = (userId: number, flow: boolean): TThunkCreator => (dispatch) => {
    _followUnfollowFlow(dispatch, userId, followUnfollowAPI.unFollow, toFollowUnFollowFlow, flow)
}

export const setFollow = (userId: number, flow: boolean): TThunkCreator => (dispatch) => {
    _followUnfollowFlow(dispatch, userId, followUnfollowAPI.follow, toFollowUnFollowFlow, flow)
}

export const toFollowUnFollowFlow = (userId: number, flow: boolean): IToFollowUnFollowFlowAction => {
    return {
        type: TO_FOLLOW_TO_UNFOLLOW_FLOW,
        id: userId,
        followUnfollowFlow: flow
    }
}

export const setUsers = (users: Array<UsersArrayItemType>, page = 1): ISetUserAction => {
    return {
        type: SET_USERS,
        users: users,
        page: page
    }
}

export const showPage = (selectedPage: number): IShowPageAction => {
    return {
        type: SHOW_PAGE,
        selectedPage: selectedPage
    }
}

export const setTotalUsersCount = (totalUsers: number): ISetTotalUsersCountAction => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsers: totalUsers
    }
}

export const setLoader = (isFetching: boolean): ISetLoaderAction => {
    return {
        type: SET_LOADER,
        isFetching: isFetching
    }
}

export const followingInProgress = (isInProgress: boolean, userId: number): IFollowingInProgressAction => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isInProgress,
        userId
    }
}