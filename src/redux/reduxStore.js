import {combineReducers, createStore} from "redux";
import {chatReducer} from "./chatReducer";
import {profileReducer} from "./profileReducer";
import {newsReducer} from "./newsReducer";
import {musicReducer} from "./musicReducer";
import {settingsReducer} from "./settingsReducer";
import {friendsListReducer} from "./friendsListReducer";
import {findUsersReducer} from "./findUsersReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    findUsersPage: findUsersReducer,
    chatPage: chatReducer,
    friendsList: friendsListReducer,
    profile: profileReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settings: settingsReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store;