const toFollow = "TO_FOLLOW";
const toUnfollow = "TO_UNFOLLOW";

const initialState = {

    findUsers: [
        {id:1, photoURL: "", followed: false, fullName: "Dmitry", status: "Hi", location: {city: "Minsk", country: "Belarus"} },
        {id:2, photoURL: "", followed: true, fullName: "Dmitry2", status: "Hi2", location: {city: "Minsk2", country: "Belarus"} },
        {id:3, photoURL: "", followed: false, fullName: "Dmitry3", status: "Hi3", location: {city: "Minsk3", country: "Belarus"} },
        {id:4, photoURL: "", followed: true, fullName: "Dmitry4", status: "Hi4", location: {city: "Minsk4", country: "Belarus"} },
        {id:5, photoURL: "", followed: false, fullName: "Dmitry5", status: "Hi5", location: {city: "Minsk5", country: "Belarus"} },
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

        default:
            return state;

    }
};

export const toFollowActionCreator = (id) => {
    return {
        type: toFollow,
        id:id
    };
}

export const toUnfollowActionCreator = (id) => {
    return {
        type: toUnfollow,
        id:id
    };
}
//
// export const changeNewMessageOnWallActionCreator = (message) => {
//     return {
//         type: changeNewMessageOnWall,
//         message: message,
//     }
// }