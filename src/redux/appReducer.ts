import {authThunkCreator} from "./authReducer"
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const INIT_APP: "MY_APP/APP/INIT_APP" = "MY_APP/APP/INIT_APP"

export interface IInitAppAction {
    type: typeof INIT_APP
}

type ActionsType = IInitAppAction

export type AppInitialStateType = {
    initialized: boolean
}

const initialState: AppInitialStateType = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {

    switch (action.type) {

        case INIT_APP:
            return {
                ...state, initialized: true
            }

        default:
            return state
    }
}
type TInitializeApp = ThunkAction<Promise<void>, AppStateType, any, ActionsType>

export const initializeApp = (): TInitializeApp => async (dispatch) => {
    await dispatch(authThunkCreator())
    dispatch(initApp())
}

const initApp = (): IInitAppAction => {
    return {
        type: INIT_APP,
    }
}