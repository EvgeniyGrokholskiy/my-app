import {profileAPI} from "../api/api";
import store from "./reduxStore";

const AddMessageOnWall = "MY-APP/PROFILE/ADD_MESSAGE_ON_WALL";
const ChangeNewMessageOnWall = "MY-APP/PROFILE/CHANGE_NEW_MESSAGE_ON_WALL";
const SetUserProfile = "MY-APP/PROFILE/SET_USERS_PROFILE";
const SetProfileStatus = "MY-APP/PROFILE/SET_PROFILE_STATUS";
const SetPhoto = "MY-APP/PROFILE/SAVE_PHOTO";
const UpdateProfileData = "MY-APP/PROFILE/UPDATE_PROFILE_DATA";

const initialState = {
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

        case SetPhoto: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        }

        default:
            return state;

    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setProfileStatus(data));
}

export const setUserStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.setUserStatus(status)
    if (response.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(setPhoto(response.data.photos));
    }
}

export const setUserProfileData = (data) => async (dispatch) => {
    let response = await profileAPI.setProfileData(data)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(store.getState().auth.id));
    }
}

export const addPost = (message) => {
    return {
        type: AddMessageOnWall,
        message
    };
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

export const setPhoto = (photo) => {
    return {
        type: SetPhoto,
        photo
    }
}

export const setUserProfileDataAC = (data) => {
    return {
        type: UpdateProfileData,
        data
    }
}