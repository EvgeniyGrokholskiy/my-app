import {AnyAction, Dispatch} from "redux"
import {authAPI} from "../api/api"
import {setProfileStatus} from "./profileReducer"

const LOGIN = "MY_APP_/AUTH/LOGIN"
const LOGOUT = "MY_APP_/AUTH/LOGOUT"
const SET_USER_DATA = "MY_APP_/AUTH/SET_USER_DATA"
const SET_ERROR_MESSAGE = "MY_APP_/AUTH/SET_ERROR_MESSAGE"
const GET_CAPTCHA_SUCCESS = "MY_APP_/AUTH/GET_CAPTCHA_SUCCESS"
const ENTERED_RIGHT_CAPTCHA = "MY-APP/AUTH/ENTERED_RIGHT_CAPTCHA"

interface ISetUserDataActionPayload {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

interface ISetUserDataActionAction {
    type: typeof SET_USER_DATA,
    payload: ISetUserDataActionPayload,
}

interface ILoginAction {
    type: typeof LOGIN,
    isAuth: boolean,
    id: number
}

interface ILogoutAction {
    type: typeof LOGOUT,
    isAuth: boolean
}

interface ISetErrorMessageAction {
    type: typeof SET_ERROR_MESSAGE,
    errorMessage: string,
    isError: boolean
}

interface ISetCaptchaURLAction {
    type: typeof GET_CAPTCHA_SUCCESS,
    captcha: string,
    isError: boolean
}

interface IEnteredRightCaptchaAction {
    type: typeof ENTERED_RIGHT_CAPTCHA,
    captcha: string,
    isError: boolean
}

type TActionsTypes =
    ISetUserDataActionAction
    | ILoginAction
    | ILogoutAction
    | ISetErrorMessageAction
    | ISetCaptchaURLAction
    | IEnteredRightCaptchaAction

export interface AuthInitialStateType {
    id: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean,
    isError: boolean,
    errorMessage: string,
    captcha: null | string,

}

const initialState: AuthInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isError: false,
    errorMessage: "",
    captcha: null,
}

export interface LoginData {
    email: string
    password: string
    rememberMe: string
}

export const authReducer = (state: AuthInitialStateType = initialState, action: TActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
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
                isError: action.isError,
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

export type TAuthThunkCreator = () => (dispatch: Dispatch<AnyAction>) => Promise<void>

export const authThunkCreator: TAuthThunkCreator = () => async (dispatch: Dispatch<AnyAction>) => {
    let {id, email, login} = await authAPI.authMe()
    if (id !== undefined) {
        sessionStorage.setItem('isAuth', "true");
        dispatch(setUserData(id, login, email, true));
    }
}

export type TLoginThunkCreator = (loginData: LoginData) => (dispatch: Dispatch<any>) => Promise<void>

export const loginThunkCreator: TLoginThunkCreator = (loginData: LoginData) => async (dispatch: Dispatch<any>) => {
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

export type TGetNewCaptcha = () => (dispatch: Dispatch<AnyAction>) => Promise<void>

export const getNewCaptcha: TGetNewCaptcha = () => async (dispatch: Dispatch<AnyAction>) => {
    let newCaptchaURL = await authAPI.getCaptcha();
    dispatch(setCaptchaUrl(newCaptchaURL))
}

export type TLogOutThunkCreator = () => (dispatch: Dispatch) => Promise<void>

export const logoutThunkCreator: TLogOutThunkCreator = () => async (dispatch: Dispatch) => {
    await authAPI.logout();
    sessionStorage.setItem('isAuth', "");
    dispatch(setUserData(null, null, null, false));
    dispatch(setProfileStatus(""));
}

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): ISetUserDataActionAction => ({
    type: SET_USER_DATA,
    payload: {
        id,
        login,
        email,
        isAuth
    }
})

export const login = (userId: number): ILoginAction => ({
    type: LOGIN,
    isAuth: true,
    id: userId
})

export const logout = (): ILogoutAction => ({
    type: LOGOUT,
    isAuth: false
})

export const setErrorMessage = (errorMessage: string): ISetErrorMessageAction => ({
    type: SET_ERROR_MESSAGE,
    errorMessage,
    isError: true
})

export const setCaptchaUrl = (captcha: string): ISetCaptchaURLAction => ({
    type: GET_CAPTCHA_SUCCESS,
    captcha,
    isError: true
})

export const enteredRightCaptcha = (): IEnteredRightCaptchaAction => ({
    type: ENTERED_RIGHT_CAPTCHA,
    captcha: "",
    isError: false
})
