import {AnyAction} from "redux";

export type InitialStateType = {}

const initialState:InitialStateType = {}

export const newsReducer = (state = initialState, action:AnyAction) => {
    return state;
}