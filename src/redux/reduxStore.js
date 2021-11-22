import {combineReducers, createStore} from "redux";
import {chatReducer} from "./chatReducer";
import {profileReducer} from "./profileReducer";
import {newsReducer} from "./newsReducer";
import {musicReducer} from "./musicReducer";
import {settingsReducer} from "./settingsReducer";
import {friendsListReducer} from "./friendsListReducer";
import {findUsersReducer} from "./findUsersReducer";

let reducers = combineReducers({
    findUsersPage: findUsersReducer,
    chatPage: chatReducer,
    friendsList: friendsListReducer,
    profile: profileReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settings: settingsReducer
});

let store = createStore(reducers);

export default store;