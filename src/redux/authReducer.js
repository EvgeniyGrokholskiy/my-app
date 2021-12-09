import {authAPI} from "../api/api";
import {getUserProfile, getUserStatusThunkCreator, setProfileStatus} from "./profileReducer";

const SET_USER_DATA = "MY_APP_/AUTH/SET_USER_DATA";
const LOGIN = "MY_APP_/AUTH/LOGIN";
const LOGOUT = "MY_APP_/AUTH/LOGOUT";
const SET_ERROR_MESSAGE = "MY_APP_/AUTH/SET_ERROR_MESSAGE"


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    isError: false,
    errorMessage: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
            }
        }

        case LOGIN: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage,
                isError: action.isError
            }
        }

        default: {
            return state;
        }
    }
}


export const authThunkCreator = () => async (dispatch) => {
    let {id, email, login} = await authAPI.authMe()
    if (id !== undefined) {
        dispatch(setUserData(id, login, email, true));
        dispatch(getUserProfile(id));
        dispatch(getUserStatusThunkCreator(id));
    }
}

export const loginThunkCreator = (loginData) => async (dispatch) => {
    let responseData = await authAPI.login(loginData)

    if (responseData.resultCode === 0) {
        dispatch(authThunkCreator())
    } else {
        dispatch(setUserData(null, null, null, false));
        dispatch(setErrorMessage(responseData.messages[0]))
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    await authAPI.logout()
    dispatch(setUserData(null, null, null, false));
    dispatch(setProfileStatus(""))
}

export const setUserData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            login,
            email,
            isAuth
        }
    }
}

export const login = (userId) => {
    return {
        type: LOGIN,
        isAuth: true,
        id: userId
    }
}

export const logout = (userId) => {
    return {
        type: LOGOUT,
        isAuth: false
    }
}

export const setErrorMessage = (errorMessage) => {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage,
        isError: true
    }
}