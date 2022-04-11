import {appReducer} from "./appReducer"
import thunkMiddleware from 'redux-thunk'
import {chatReducer} from "./chatReducer"
import {newsReducer} from "./newsReducer"
import {authReducer} from "./authReducer"
import {musicReducer} from "./musicReducer"
import {footerReducer} from "./footerReducer"
import {profileReducer} from "./profileReducer"
import {settingsReducer} from "./settingsReducer"
import {findUsersReducer} from "./findUsersReducer"
import {friendsListReducer} from "./friendsListReducer"
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, combineReducers, createStore} from "redux"


let rootReducers = combineReducers({

    app: appReducer,
    auth: authReducer,
    footer: footerReducer,
    chatPage: chatReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    profile: profileReducer,
    settings: settingsReducer,
    findUsersPage: findUsersReducer,
    friendsList: friendsListReducer,
});

export type RootReducer = typeof rootReducers
export type AppStateType = ReturnType<RootReducer>

const store = createStore(rootReducers, /* preloadedState, */ composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store