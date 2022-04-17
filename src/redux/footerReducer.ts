const CHANGE_LANGUAGES = "MY-APP/FOOTER/CHANGE_LANGUAGES"

export interface IChangeLanguagesAction {
    type: typeof CHANGE_LANGUAGES
    languages: string
}

export interface IFooterInitialState {
    languages: string,
}

const initialState: IFooterInitialState = {
    languages: "English",
}

export const footerReducer = (state: IFooterInitialState = initialState, action: IChangeLanguagesAction): IFooterInitialState => {

    switch (action.type) {

        case CHANGE_LANGUAGES:
            return {
                ...state,
                languages: action.languages
            }

        default:
            return state
    }
}

export const changeLanguages = (languages: string): IChangeLanguagesAction => {
    return {
        type: CHANGE_LANGUAGES,
        languages: languages,
    }
}
