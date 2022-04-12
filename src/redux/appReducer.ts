import {authThunkCreator} from "./authReducer";

const INIT_APP: "MY_APP/APP/INIT_APP" = "MY_APP/APP/INIT_APP";

export type AppInitialStateType = {
    initialized: boolean
}

const initialState: AppInitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: any):AppInitialStateType => {

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
    return (dispatch: any) => {
        let promise = dispatch(authThunkCreator())
        promise.then(
            dispatch(initApp())
        )
    }
}

type actionType =  { type: typeof INIT_APP }

const initApp = (): actionType => {
    return {
        type: INIT_APP,
    }
}