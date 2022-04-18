import {Dispatch} from "redux"
import store from "./reduxStore"
import {profileAPI} from "../api/api"

const SAVE_PHOTO = "MY-APP/PROFILE/SAVE_PHOTO"
const RESET_SEND_ERROR = "MY-APP/PROFILE/RESET_SEND_ERROR"
const SET_USERS_PROFILE = "MY-APP/PROFILE/SET_USERS_PROFILE"
const SET_PROFILE_STATUS = "MY-APP/PROFILE/SET_PROFILE_STATUS"
const ADD_MESSAGE_ON_WALL = "MY-APP/PROFILE/ADD_MESSAGE_ON_WALL"
const SET_LIKE_TO_MESSAGE = "MY-APP/PROFILE/SET_LIKE_TO_MESSAGE"
const UPDATE_PROFILE_DATA_ERROR = "MY-APP/PROFILE/UPDATE_PROFILE_DATA_ERROR"

interface ISetPhotoAction {
    type: typeof SAVE_PHOTO
    photo: IPhotosObjInProfile
}

interface IResetSendErrorAction {
    type: typeof RESET_SEND_ERROR,
    error: boolean,
    sendErrorMessage: string
}

interface ISetUserProfileAction {
    type: typeof SET_USERS_PROFILE
    profile: IProfile
}

interface IAddMessageOnWallAction {
    type: typeof ADD_MESSAGE_ON_WALL
    message: string
}

interface ISetProfileStatusAction {
    type: typeof SET_PROFILE_STATUS
    status: string
}

export interface ISetLikeToMessageAction {
    type: typeof SET_LIKE_TO_MESSAGE
    id: number
}

interface IUpdateProfileDataErrorAction {
    type: typeof UPDATE_PROFILE_DATA_ERROR
    errorMessage: string
    isError: boolean
}

type TActionsTypes =
    ISetPhotoAction
    | IResetSendErrorAction
    | ISetUserProfileAction
    | IAddMessageOnWallAction
    | ISetProfileStatusAction
    | ISetLikeToMessageAction
    | IUpdateProfileDataErrorAction

export interface IWallMessage {
    message: string,
    likeCount: number,
    id: number
}

interface IPhotosObjInProfile {
    large: string | null,
    small: string | null,
}

export interface IProfile {
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
    photos: IPhotosObjInProfile | null
    userId: number | null
}

export interface IProfileInitialStateType {
    wallMessageArray: Array<IWallMessage>
    profile: IProfile,
    profileStatus: string,
    putRequestStatus: null,
    error: boolean,
    sendErrorMessage: string
}

const initialState: IProfileInitialStateType = {
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
}

export const profileReducer = (state = initialState, action: TActionsTypes): IProfileInitialStateType => {

    const isEmptyMessage = (message: string) => (message === '' || message === undefined)

    switch (action.type) {

        case ADD_MESSAGE_ON_WALL:
            if (isEmptyMessage(action.message)) return state;

            let id = state.wallMessageArray.length + 1
            let messageObj = {
                message: action.message,
                likeCount: 0,
                id: id,
            }

            return {
                ...state, wallMessageArray: [...state.wallMessageArray, messageObj],
            }

        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            }

        case SET_PROFILE_STATUS:
            return {
                ...state, profileStatus: action.status
            }

        case SAVE_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.photo}
            }

        case UPDATE_PROFILE_DATA_ERROR:
            return {
                ...state, sendErrorMessage: action.errorMessage, error: action.isError
            }

        case SET_LIKE_TO_MESSAGE:
            return {
                ...state, wallMessageArray: [...state.wallMessageArray.map((item) => {
                    if (item.id === action.id) {
                        item.likeCount++
                        return item
                    }
                    return item
                })]
            }

        case RESET_SEND_ERROR:
            return {
                ...state, sendErrorMessage: action.sendErrorMessage, error: action.error
            }

        default:
            return state
    }
}

export type TGetUserProfileThunkCreator = (userId: number) => (dispatch: Dispatch) => Promise<void>

export const getUserProfileThunkCreator: TGetUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export type TGetUserStatusThunkCreator = (userId: number) => (dispatch: Dispatch) => Promise<void>

export const getUserStatusThunkCreator: TGetUserStatusThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setProfileStatus(data));
}

export type TSetUserStatusThunkCreator = (status: string) => (dispatch: Dispatch) => Promise<void>

export const setUserStatusThunkCreator: TSetUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.setUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export type TSavePhoto = (photo: File) => (dispatch: Dispatch) => Promise<void>

export const savePhoto: TSavePhoto = (photo: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(setPhoto(response.data.photos));
    }
}

export type TSetUserProfileData = (data: IProfile) => (dispatch: Dispatch<any>) => Promise<any>

export const setUserProfileData: TSetUserProfileData = (data: IProfile) => async (dispatch: Dispatch<any>) => {
    let response = await profileAPI.setProfileData(data);
    if (response.resultCode === 0) {
        dispatch(setUserProfileDataError("", false))
        dispatch(await getUserProfileThunkCreator(Number(store.getState().auth.id)))
        return response
    } else {
        dispatch(setUserProfileDataError(response.messages, true))
        return response
    }
}

export const addPost = (message: string): IAddMessageOnWallAction => ({
    type: ADD_MESSAGE_ON_WALL,
    message
})

export const setUserProfile = (profile: IProfile): ISetUserProfileAction => ({
    type: SET_USERS_PROFILE,
    profile
})

export const setProfileStatus = (status: string): ISetProfileStatusAction => ({
    type: SET_PROFILE_STATUS,
    status
})

export const setPhoto = (photo: IPhotosObjInProfile): ISetPhotoAction => ({
    type: SAVE_PHOTO,
    photo
})

export const setUserProfileDataError = (errorMessage: string, isError: boolean): IUpdateProfileDataErrorAction => ({
    type: UPDATE_PROFILE_DATA_ERROR,
    errorMessage,
    isError
})

export const setLikeToMessage = (id: number): ISetLikeToMessageAction => ({
    type: SET_LIKE_TO_MESSAGE,
    id
})

export const resetSendError = (): IResetSendErrorAction => {
    return {
        type: RESET_SEND_ERROR,
        error: false,
        sendErrorMessage: ""
    }
}