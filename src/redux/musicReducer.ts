import {AnyAction} from "redux"

export type InitialStateType = {}

const initialState:InitialStateType = {}

export const musicReducer = (state = initialState, action:AnyAction) => {
    switch (action.type) {
        default:
            return state

    }
}