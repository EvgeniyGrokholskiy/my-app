import {applyMiddleware, combineReducers, createStore} from "redux";
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
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;