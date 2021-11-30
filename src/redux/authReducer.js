import {authMeAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


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