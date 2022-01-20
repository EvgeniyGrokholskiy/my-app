import {appReducer} from "./appReducer";
import thunkMiddleware from 'redux-thunk';
import {chatReducer} from "./chatReducer";
import {newsReducer} from "./newsReducer";
import {authReducer} from "./authReducer";
import {musicReducer} from "./musicReducer";
import {footerReducer} from "./footerReducer";
import {profileReducer} from "./profileReducer";
import {settingsReducer} from "./settingsReducer";
import {findUsersReducer} from "./findUsersReducer";
import {friendsListReducer} from "./friendsListReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";


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

type RootReducer = typeof rootReducers
export type AppStateType = ReturnType<RootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

// @ts-ignore
window.__store__ = store

export default store;