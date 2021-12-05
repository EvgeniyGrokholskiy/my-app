import {authThunkCreator} from "./authReducer";

const INIT_APP = "INIT_APP"


const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {

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
    return (dispatch) => {
        let promise = dispatch(authThunkCreator())
        promise.then(
            dispatch(initApp())
        )
    }
}


const initApp = () => {
    return {
        type: INIT_APP,
    }
}