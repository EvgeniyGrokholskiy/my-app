import {profileAPI} from "../api/api";

const AddMessageOnWall = "ADD_MESSAGE_ON_WALL";
const ChangeNewMessageOnWall = "CHANGE_NEW_MESSAGE_ON_WALL";
const SetUserProfile = "SET_USERS_PROFILE";
const SetProfileStatus = "SET_PROFILE_STATUS";
const EditProfileStatus = "EDIT_PROFILE_STATUS";

const initialState = {
    //newMessage: "",
    wallMessageArray: [
        {
            message: "How’s your day going, guys?",
            likeCount: 10,
            id: 1
        },
        {
            message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?",
            likeCount: 20,
            id: 2
        }

    ],

    profile: null,
    profileStatus: "",
    putRequestStatus: null
};

export const profileReducer = (state = initialState, action) => {

    const isEmptyMessage = (message) => (message === '' || message === undefined);

    switch (action.type) {

        case ChangeNewMessageOnWall: {

            return {
                ...state,
                newMessage: action.message
            };

        }

        case AddMessageOnWall: {
debugger
            if (isEmptyMessage(action.message)) return state;

            let id = state.wallMessageArray.length + 1;
            let messageObj = {
                message: action.message,
                likeCount: 0,
                id: id,
            };

            return {
                ...state,
                wallMessageArray: [...state.wallMessageArray, messageObj],
                // newMessage: ''
            };
        }

        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SetProfileStatus: {
            return {
                ...state,
                profileStatus: action.status
            }
        }

        case EditProfileStatus: {
            return {
                ...state,
                profileStatus: action.message
            }
        }

        default:
            return state;

    }
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then((data) => {
                dispatch(setProfileStatus(data));
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

export const setUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.setUserStatus(status)
            .then((response) => {
                    if (response.resultCode === 0) {
                        dispatch(setProfileStatus(status));
                    }
                }
            )
            .catch((error) => {
                console.error(error)
            })
    }
}

export const addPost = (message) => {
    return {
        type: AddMessageOnWall,
        message
    };
}

export const changeNewMessageOnWall = (message) => {
    return {
        type: ChangeNewMessageOnWall,
        message,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SetUserProfile,
        profile: profile
    }
}

export const setProfileStatus = (status) => {
    return {
        type: SetProfileStatus,
        status
    }
}

export const editProfileStatus = (message) => {
    return {
        type: EditProfileStatus,
        message
    }
}