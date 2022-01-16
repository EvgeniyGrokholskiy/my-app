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


let reducers = combineReducers({

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

window.__store__ = store

export default store;