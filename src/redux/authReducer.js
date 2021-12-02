import {authMeAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
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

        default: {
            return state;
        }
    }
}


export const authThunkCreator = () => {
    return (dispatch) => {
        authMeAPI.authMe().then((data) => {
            let isAuth = false
            let {id, email, login} = data;

            if (id !== undefined) {
                isAuth = true;
            }
            dispatch(setUserData(id, login, email, isAuth));
        })
    }
}

export const loginThunkCreator = (data) => {
    return (dispatch) => {
        authMeAPI.login(data).then((response)=>{
            dispatch(login(response.userId))
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authMeAPI.logout().then((response)=>{
            dispatch(logout())
        })
    }
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

export const login = (userId)=> {
    return {
        type: LOGIN,
        isAuth: true,
        id: userId
    }
}

export const logout = (userId)=> {
    return {
        type: LOGOUT,
        isAuth: false
    }
}