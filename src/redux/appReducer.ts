import {Dispatch} from "redux"
import {authThunkCreator} from "./authReducer"

const INIT_APP: "MY_APP/APP/INIT_APP" = "MY_APP/APP/INIT_APP"

export interface IInitAppAction {
    type: typeof INIT_APP
}

export type AppInitialStateType = {
    initialized: boolean
}

const initialState: AppInitialStateType = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: IInitAppAction): AppInitialStateType => {

    switch (action.type) {

        case INIT_APP:
            return {
                ...state, initialized: true
            }

        default:
            return state
    }
}
type TInitializeApp = () => (dispatch: Dispatch<any>) => void

export const initializeApp: TInitializeApp = () => (dispatch: Dispatch<any>) => {
    dispatch(authThunkCreator())
    dispatch(initApp())
}

const initApp = (): IInitAppAction => {
    return {
        type: INIT_APP,
    }
}