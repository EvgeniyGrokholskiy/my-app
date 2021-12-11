import {followUnfollowAPI, usersAPI} from "../api/api";

const ToFollowUnFollowFlow = "MY-APP/FIND-USER/TO-FOLLOW-TO-UNFOLLOW-FLOW"
const SetUsers = "MY-APP/FIND-USER/SET_USERS";
const ShowPage = "MY-APP/FIND-USER/SHOW_PAGE";
const SetTotalUsersCount = "MY-APP/FIND-USER/SET_TOTAL_USER_COUNT";
const SetLoader = "MY-APP/FIND-USER/SET_LOADER";
const FollowingInProgress = "MY-APP/FIND-USER/FOLLOWING_IN_PROGRESS";

const initialState = {

    findUsers: [],
    currentPage: 1,
    totalUsers: 100,
    usersOnPage: 5,
    isFetching: true,
    isFollowingInProgress: []
};

export const findUsersReducer = (state = initialState, action) => {

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


export const getUsers = (currentPage, usersOnPage) => async (dispatch) => {
    dispatch(setLoader(true));
    const data = await usersAPI.getUsers(currentPage, usersOnPage)
    dispatch(setUsers(data.items, currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setLoader(false));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod , actionCreator, flow) => {
    dispatch(followingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId,flow));
    }
    dispatch(followingInProgress(false, userId));
}


export const setUnfollow = (userId,flow) => (dispatch) => {
    followUnfollowFlow(dispatch,userId,followUnfollowAPI.unFollow,toFollowUnFollowFlow,flow);
}

export const setFollow = (userId,flow) => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,followUnfollowAPI.follow,toFollowUnFollowFlow,flow);
}

export const toFollowUnFollowFlow = (userId,flow) => {
    return {
        type: ToFollowUnFollowFlow,
        id: userId,
        followUnfollowFlow: flow
    }
}

export const setUsers = (users, page = 1) => {
    return {
        type: SetUsers,
        users: users,
        page: page
    };
}

export const showPage = (selectedPage) => {
    return {
        type: ShowPage,
        selectedPage: selectedPage
    };
}

export const setTotalUsersCount = (totalUsers) => {
    return {
        type: SetTotalUsersCount,
        totalUsers: totalUsers
    };
}

export const setLoader = (isFetching) => {
    return {
        type: SetLoader,
        isFetching: isFetching
    };
}

export const followingInProgress = (isInProgress, userId) => {
    return {
        type: FollowingInProgress,
        isInProgress,
        userId
    }
}