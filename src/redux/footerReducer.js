const CHANGE_LANGUAGES = "MY-APP/FOOTER/CHANGE_LANGUAGES";

const initialState = {
    languages: "english",
}

export const footerReducer = (state=initialState,action) => {

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

export const changeLanguages = (languages) => {
    return {
        type: CHANGE_LANGUAGES,
        languages: languages,
    }
}
