import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {chatReducer} from "./chatReducer";
import {profileReducer} from "./profileReducer";
import {newsReducer} from "./newsReducer";
import {musicReducer} from "./musicReducer";
import {settingsReducer} from "./settingsReducer";
import {friendsListReducer} from "./friendsListReducer";
import {findUsersReducer} from "./findUsersReducer";
import {authReducer} from "./authReducer";
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    findUsersPage: findUsersReducer,
    chatPage: chatReducer,
    friendsList: friendsListReducer,
    profile: profileReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settings: settingsReducer,
    auth: authReducer,
    app: appReducer,
    footer: findUsersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

window.__store__ = store

export default store;