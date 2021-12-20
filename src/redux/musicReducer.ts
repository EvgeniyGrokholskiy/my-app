import {AnyAction} from "redux";

export type InitialStateType = {}

const initialState:InitialStateType = {}

export const musicReducer = (state = initialState, action:AnyAction) => {
    return state;
}