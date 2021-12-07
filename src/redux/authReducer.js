import {authAPI} from "../api/api";
import {getUserProfile, getUserStatusThunkCreator, setProfileStatus} from "./profileReducer";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"


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
                errorMessage: action.errorMessage
            }
        }

        default: {
            return state;
        }
    }
}


export const authThunkCreator = () => {
    return (dispatch) => {
       return authAPI.authMe().then((data) => {
            let isAuth = false
            let {id, email, login} = data;

            if (id !== undefined) {
                isAuth = true;
            }
            dispatch(setUserData(id, login, email, isAuth));
            return id
        }).then((id)=>{
            dispatch(getUserProfile(id));
            dispatch(getUserStatusThunkCreator(id))
       })
    }
}

export const loginThunkCreator = (data) => {
    return (dispatch) => {
        authAPI.login(data).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            } else {
                dispatch(setUserData(null, null, null, false, true));
                dispatch(setErrorMessage(response.data.messages[0]))
            }

        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            dispatch(setUserData(null, null, null, false));
            dispatch(setProfileStatus(""))
        })
    }
}

export const setUserData = (id, login, email, isAuth, isError = false) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            login,
            email,
            isAuth,
            isError
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
        errorMessage
    }
}