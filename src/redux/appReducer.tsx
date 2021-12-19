import {authThunkCreator} from "./authReducer";

const INIT_APP: "MY_APP/APP/INIT_APP" = "MY_APP/APP/INIT_APP";

type initialStateType = {
    initialized: boolean
}

const initialState:initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action:actionType) => {

    switch (action.type) {

        case INIT_APP: {

            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}

export const initializeApp = () => {
    return (dispatch:any) => {
        let promise = dispatch(authThunkCreator())
        promise.then(
            dispatch(initApp())
        )
    }
}

type actionType = {
    type: "MY_APP/APP/INIT_APP"
}

const initApp = () => {
    return {
        type: INIT_APP,
    }
}