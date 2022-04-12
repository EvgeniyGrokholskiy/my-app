import {AnyAction} from "redux";
import store from "./reduxStore";
import {profileAPI} from "../api/api";
import {Dispatch} from "../types/types";


const SetPhoto = "MY-APP/PROFILE/SAVE_PHOTO";
const ResetSendError = "MY-APP/PROFILE/RESET_SEND_ERROR";
const SetUserProfile = "MY-APP/PROFILE/SET_USERS_PROFILE";
const AddMessageOnWall = "MY-APP/PROFILE/ADD_MESSAGE_ON_WALL";
const SetProfileStatus = "MY-APP/PROFILE/SET_PROFILE_STATUS";
const SetProfileDataError = "MY-APP/PROFILE/UPDATE_PROFILE_DATA_ERROR";
/*const ChangeNewMessageOnWall = "MY-APP/PROFILE/CHANGE_NEW_MESSAGE_ON_WALL";*/

export interface WallMessage {
    message: string,
    likeCount: number,
    id: number
}

interface PhotosObjInProfile {
    large: string | null,
    small: string | null,
}

export interface Profile {
    aboutMe: null | string
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    }

    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    photos: PhotosObjInProfile | null
    userId: number | null
}

export interface ProfileInitialStateType {
    wallMessageArray: Array<WallMessage>
    profile: Profile,
    profileStatus: string,
    putRequestStatus: null,
    error: boolean,
    sendErrorMessage: string
}

const initialState:ProfileInitialStateType = {
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

    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null,
        },

        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: null,
        userId: null
    },

    profileStatus: "",
    putRequestStatus: null,
    error: false,
    sendErrorMessage: ""
};

export const profileReducer = (state = initialState, action:AnyAction):ProfileInitialStateType => {

    const isEmptyMessage = (message:string) => (message === '' || message === undefined);

    switch (action.type) {

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

        case SetProfileDataError: {
            return {
                ...state,
                sendErrorMessage: action.errorMessage,
                error: action.error
            }
        }

        case ResetSendError: {
            return {
                ...state,
                sendErrorMessage: action.errorMessage,
                error: action.error
            }
        }

        default:
            return state;
    }
};

export const getUserProfileThunkCreator = (userId:number) => async (dispatch:Dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId:number) => async (dispatch:Dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setProfileStatus(data));
}

export const setUserStatusThunkCreator = (status:string) => async (dispatch:Dispatch) => {
    let response = await profileAPI.setUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export const savePhoto = (photo:File) => async (dispatch:Dispatch) => {
    let response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(setPhoto(response.data.photos));
    }
}

export const setUserProfileData = (data:Profile) => async (dispatch:Dispatch) => {
    let response = await profileAPI.setProfileData(data);
    if (response.resultCode === 0) {
        dispatch(setUserProfileDataError("", false));
        dispatch(getUserProfileThunkCreator(store.getState().auth.id));
        return response
    } else {
        dispatch(setUserProfileDataError(response.messages, true));
        return response
    }
}

export const addPost = (message:string) => {
    return {
        type: AddMessageOnWall,
        message
    };
}

export const setUserProfile = (profile:Profile) => {
    return {
        type: SetUserProfile,
        profile: profile
    }
}

export const setProfileStatus = (status:string) => {
    return {
        type: SetProfileStatus,
        status
    }
}

export const setPhoto = (photo:File) => {
    return {
        type: SetPhoto,
        photo
    }
}

export const setUserProfileDataError = (errorMessage:string, error:boolean) => {
    return {
        type: SetProfileDataError,
        errorMessage,
        error
    }
}

export const resetSendError = () => {
    return {
        type: ResetSendError,
        error: false,
        sendErrorMessage: ""
    }
}