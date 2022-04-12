import {AnyAction} from "redux";
import {followUnfollowAPI, usersAPI} from "../api/api";
import {Dispatch, UsersArrayItemType} from "../types/types";


const SET_USERS = "MY-APP/FIND-USER/SET_USERS";
const SHOW_PAGE = "MY-APP/FIND-USER/SHOW_PAGE";
const SET_LOADER = "MY-APP/FIND-USER/SET_LOADER";
const SET_TOTAL_USER_COUNT = "MY-APP/FIND-USER/SET_TOTAL_USER_COUNT";
const FOLLOWING_IN_PROGRESS = "MY-APP/FIND-USER/FOLLOWING_IN_PROGRESS";
const TO_FOLLOW_TO_UNFOLLOW_FLOW = "MY-APP/FIND-USER/TO_FOLLOW_TO_UNFOLLOW_FLOW"


export type InitialStateType = {
    findUsers: Array<UsersArrayItemType>,
    currentPage: number,
    totalUsers: number,
    usersOnPage: number,
    isFetching: boolean,
    isFollowingInProgress: Array<number>
}

const initialState: InitialStateType = {
    findUsers: [],
    currentPage: 1,
    totalUsers: 100,
    usersOnPage: 5,
    isFetching: true,
    isFollowingInProgress: []
};

export const findUsersReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {

        case TO_FOLLOW_TO_UNFOLLOW_FLOW: {
            return {
                ...state,
                findUsers: state.findUsers.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followUnfollowFlow};
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                findUsers: [...action.users],
                currentPage: action.page
            }
        }

        case SHOW_PAGE: {
            return {
                ...state,
                currentPage: action.selectedPage
            }
        }

        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }

        case SET_LOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
};


export const getUsers = (currentPage: number, usersOnPage: number) => async (dispatch: Dispatch) => {
    dispatch(setLoader(true));
    const data = await usersAPI.getUsers(currentPage, usersOnPage)
    dispatch(setUsers(data.items, currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setLoader(false));
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function, flow: boolean) => {
    dispatch(followingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId, flow));
    }
    dispatch(followingInProgress(false, userId));
}


export const setUnfollow = (userId: number, flow: boolean) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, followUnfollowAPI.unFollow, toFollowUnFollowFlow, flow);
}

export const setFollow = (userId: number, flow: boolean) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, followUnfollowAPI.follow, toFollowUnFollowFlow, flow);
}

type ToFollowUnFollowFlowType = {
    type: typeof TO_FOLLOW_TO_UNFOLLOW_FLOW,
    id: number,
    followUnfollowFlow: boolean
}

export const toFollowUnFollowFlow = (userId: number, flow: boolean): ToFollowUnFollowFlowType => {
    return {
        type: TO_FOLLOW_TO_UNFOLLOW_FLOW,
        id: userId,
        followUnfollowFlow: flow
    }
}

type SetUserType = {
    type: typeof SET_USERS,
    users: any,
    page: number
}

export const setUsers = (users: Array<UsersArrayItemType>, page = 1): SetUserType => {
    return {
        type: SET_USERS,
        users: users,
        page: page
    };
}

type ShowPageType = {
    type: typeof SHOW_PAGE,
    selectedPage: number
}

export const showPage = (selectedPage: number): ShowPageType => {
    return {
        type: SHOW_PAGE,
        selectedPage: selectedPage
    };
}

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USER_COUNT,
    totalUsers: number
}

export const setTotalUsersCount = (totalUsers: number): SetTotalUsersCountType => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsers: totalUsers
    };
}

type SetLoaderType = {
    type: typeof SET_LOADER,
    isFetching: boolean
}

export const setLoader = (isFetching: boolean): SetLoaderType => {
    return {
        type: SET_LOADER,
        isFetching: isFetching
    };
}

type FollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    isInProgress: boolean,
    userId: number
}

export const followingInProgress = (isInProgress: boolean, userId: number): FollowingInProgressType => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isInProgress,
        userId
    }
}