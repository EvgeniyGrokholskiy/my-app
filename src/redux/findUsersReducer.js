const toFollow = "TO_FOLLOW";
const toUnfollow = "TO_UNFOLLOW";
const setUsers = "SET_USERS";
const showPage = "SHOW_PAGE";
const setTotalUsersCount = "SET_TOTAL_USER_COUNT";

const initialState = {

    currentPage: 1,
    totalUsers: 100,
    usersOnPage: 5,
    findUsers: [
        /*{
            id: 1,
            photoURL: "",
            followed: false,
            fullName: "Dmitry",
            status: "Hi",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            photoURL: "",
            followed: true,
            fullName: "Dmitry2",
            status: "Hi2",
            location: {city: "Minsk2", country: "Belarus"}
        },
        {
            id: 3,
            photoURL: "",
            followed: false,
            fullName: "Dmitry3",
            status: "Hi3",
            location: {city: "Minsk3", country: "Belarus"}
        },
        {
            id: 4,
            photoURL: "",
            followed: true,
            fullName: "Dmitry4",
            status: "Hi4",
            location: {city: "Minsk4", country: "Belarus"}
        },
        {
            id: 5,
            photoURL: "",
            followed: false,
            fullName: "Dmitry5",
            status: "Hi5",
            location: {city: "Minsk5", country: "Belarus"}
        },*/
    ]
};

export const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {

        case toFollow: {
            return {
                ...state,
                findUsers: state.findUsers.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }

        case toUnfollow: {
            return {
                ...state,
                findUsers: state.findUsers.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }

        case setUsers: {
            return  {
                ...state,
                findUsers: [ ...action.users],
                currentPage: action.page
            }
        }

        case showPage: {
            return  {
                ...state,
                currentPage: action.selectedPage
            }
        }

        case setTotalUsersCount: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }

        default:
            return state;

    }
};

export const toFollowActionCreator = (userID) => {
    return {
        type: toFollow,
        id: userID
    };
}

export const toUnfollowActionCreator = (userID) => {
    return {
        type: toUnfollow,
        id: userID
    };
}

export const setUsersActionCreator = (users,page= 1) => {
    return {
        type: setUsers,
        users: users,
        page: page
    };
}

export const showPageActionCreator = (selectedPage) => {
    return {
        type: showPage,
        selectedPage: selectedPage
    };
}

export const setTotalUsersCountActionCreator = (totalUsers) => {
    return {
        type: setTotalUsersCount,
        totalUsers: totalUsers
    };
}