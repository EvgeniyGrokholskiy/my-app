import {followUnfollowAPI, usersAPI} from "../api/api";
import {AnyAction} from "redux";

const ToFollowUnFollowFlow = "MY-APP/FIND-USER/TO-FOLLOW-TO-UNFOLLOW-FLOW"
const SetUsers = "MY-APP/FIND-USER/SET_USERS";
const ShowPage = "MY-APP/FIND-USER/SHOW_PAGE";
const SetTotalUsersCount = "MY-APP/FIND-USER/SET_TOTAL_USER_COUNT";
const SetLoader = "MY-APP/FIND-USER/SET_LOADER";
const FollowingInProgress = "MY-APP/FIND-USER/FOLLOWING_IN_PROGRESS";

export type InitialStateType = {
    findUsers: Array<any>,
    currentPage: number,
    totalUsers: number,
    usersOnPage: number,
    isFetching: boolean,
    isFollowingInProgress: Array<any>
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

        case ToFollowUnFollowFlow: {
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

        case SetUsers: {
            return {
                ...state,
                findUsers: [...action.users],
                currentPage: action.page
            }
        }

        case ShowPage: {
            return {
                ...state,
                currentPage: action.selectedPage
            }
        }

        case SetTotalUsersCount: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }

        case SetLoader: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case FollowingInProgress: {
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


export const getUsers = (currentPage: number, usersOnPage: number) => async (dispatch: any) => {
    dispatch(setLoader(true));
    const data = await usersAPI.getUsers(currentPage, usersOnPage)
    dispatch(setUsers(data.items, currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setLoader(false));
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: Function, flow: string) => {
    dispatch(followingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId, flow));
    }
    dispatch(followingInProgress(false, userId));
}


export const setUnfollow = (userId: number, flow: string) => (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, followUnfollowAPI.unFollow, toFollowUnFollowFlow, flow);
}

export const setFollow = (userId: number, flow: string) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, followUnfollowAPI.follow, toFollowUnFollowFlow, flow);
}

type ToFollowUnFollowFlowType = {
    type: typeof ToFollowUnFollowFlow,
    id: number,
    followUnfollowFlow: string
}

export const toFollowUnFollowFlow = (userId: number, flow: string): ToFollowUnFollowFlowType => {
    return {
        type: ToFollowUnFollowFlow,
        id: userId,
        followUnfollowFlow: flow
    }
}

type UsersArrayItem = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string | null
        small: string | null
    }
    status: string | null
    uniqueUrlName: string | null
}

type SetUserType = {
    type: typeof SetUsers,
    users: any,
    page: number
}

export const setUsers = (users: Array<UsersArrayItem>, page = 1): SetUserType => {
    return {
        type: SetUsers,
        users: users,
        page: page
    };
}

type ShowPageType = {
    type: typeof ShowPage,
    selectedPage: number
}

export const showPage = (selectedPage: number): ShowPageType => {
    return {
        type: ShowPage,
        selectedPage: selectedPage
    };
}

type SetTotalUsersCountType = {
    type: typeof SetTotalUsersCount,
    totalUsers: number
}

export const setTotalUsersCount = (totalUsers: number): SetTotalUsersCountType => {
    return {
        type: SetTotalUsersCount,
        totalUsers: totalUsers
    };
}

type SetLoaderType = {
    type: typeof SetLoader,
    isFetching: boolean
}

export const setLoader = (isFetching: boolean): SetLoaderType => {
    return {
        type: SetLoader,
        isFetching: isFetching
    };
}

type FollowingInProgressType = {
    type: typeof FollowingInProgress,
    isInProgress: boolean,
    userId: number
}

export const followingInProgress = (isInProgress: boolean, userId: number): FollowingInProgressType => {
    return {
        type: FollowingInProgress,
        isInProgress,
        userId
    }
}