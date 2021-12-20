import {AnyAction} from "redux";

const CHANGE_LANGUAGES = "MY-APP/FOOTER/CHANGE_LANGUAGES";

export type InitialStateType = {
    languages: string,
}

const initialState: InitialStateType = {
    languages: "english",
}

export const footerReducer = (state=initialState,action:AnyAction) => {

    switch (action.type) {
        case CHANGE_LANGUAGES: {
            return {
                ...state,
                languages: action.languages
            }
        }
        default:
            return state
    }
}

type ChangeLanguagesType = {
    type: typeof CHANGE_LANGUAGES
    languages: string
}

export const changeLanguages = (languages:string): ChangeLanguagesType => {
    return {
        type: CHANGE_LANGUAGES,
        languages: languages,
    }
}
