import {authAPI} from "../api/api";
import {getUserProfile, getUserStatusThunkCreator, setProfileStatus} from "./profileReducer";

const SET_USER_DATA = "MY_APP_/AUTH/SET_USER_DATA";
const LOGIN = "MY_APP_/AUTH/LOGIN";
const LOGOUT = "MY_APP_/AUTH/LOGOUT";
const SET_ERROR_MESSAGE = "MY_APP_/AUTH/SET_ERROR_MESSAGE";
const GET_CAPTCHA_SUCCESS = "MY_APP_/AUTH/GET_CAPTCHA_SUCCESS";
const ENTERED_RIGHT_CAPTCHA = "MY-APP/AUTH/ENTERED_RIGHT_CAPTCHA"


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    isError: false,
    errorMessage: "",
    captcha: null,
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

        case GET_CAPTCHA_SUCCESS: {
            return {
                ...state,
                captcha: action.captcha,
                errorMessage: action.errorMessage,
            }
        }

        case ENTERED_RIGHT_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha,
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
        sessionStorage.setItem('isAuth', "true");
        dispatch(setUserData(id, login, email, true));
        dispatch(getUserProfile(id));
        dispatch(getUserStatusThunkCreator(id));
    }
}

export const loginThunkCreator = (loginData) => async (dispatch) => {
    let responseData = await authAPI.login(loginData)
    if (responseData.resultCode === 0) {
        dispatch(authThunkCreator());
        dispatch(enteredRightCaptcha());
    } else {
        if (responseData.resultCode === 10) {
            let captchaURL = await authAPI.getCaptcha();
            dispatch(setCaptchaUrl(captchaURL))

        }
        dispatch(setUserData(null, null, null, false));
        dispatch(setErrorMessage(responseData.messages[0]))
    }
}

export const getNewCaptcha = () => async (dispatch) => {
    let newCaptchaURL = await authAPI.getCaptcha();
    dispatch(setCaptchaUrl(newCaptchaURL))
}

export const logoutThunkCreator = () => async (dispatch) => {
    await authAPI.logout();
    sessionStorage.setItem('isAuth', "");
    dispatch(setUserData(null, null, null, false));
    dispatch(setProfileStatus(""));
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

export const logout = () => {
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

export const setCaptchaUrl = (captcha) => {
    return {
        type: GET_CAPTCHA_SUCCESS,
        captcha,
        isError:true
    }
}

export const enteredRightCaptcha = () => {
    return {
        type: ENTERED_RIGHT_CAPTCHA,
        captcha: "",
        isError: false
    }
}