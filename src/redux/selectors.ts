//import {createSelector} from "reselect";

import {AppStateType} from "./reduxStore";

/*************App selectors*******************/

export const getAppState = (state: AppStateType) => state.app

/*****************Auth selectors****************/

export const getAuthState = (state: AppStateType) => state.auth

export const getAuthLogin = (state: AppStateType) => state.auth.login

export const getIsAuthState = (state: AppStateType) => state.auth.isAuth

export const getInitializedState = (state: AppStateType) => state.app.initialized

/*****************ChatPage selectors*************/

export const getChatPageState = (state: AppStateType) => state.chatPage

export const getChatList = (state: AppStateType) => state.chatPage.chatsList

export const getChatMessageArrayState = (state: AppStateType) => state.chatPage.chatMessageArray

export const getActiveChanNameState = (state: AppStateType) => state.chatPage.activeChatName

/***************FindUser selectors*******************/

export const getFindUsersState = (state: AppStateType) => state.findUsersPage.findUsers

/*
export const getFindUsersState = (state:AppStateType) => {  простая логика в селекторе
    return state.findUsersPage.findUsers

export const getFindUsersStateSelector = (state:AppStateType) => {  сложный селектор с обработкой стэйта
    return state.findUsersPage.findUsers.filter(user => true)
}

export const getFindUsersStateRESELECT = createSelector(getFindUsersState,((user)=>{ RESELECT библиотека предоставляет функцию
    return user.filter(user => true)                                                 createSelector которая позволяет оптимизировать рендеринг.
                                                                                     Функция принимает примитивный селектор который достает из стэйта
                                                                                     и отдает нужные данные в сложный селектор, который вызывается в mapStateToProps
                                                                                     производит сложную магию и отдает результат ретурном в переменную(в пропсы).
}))
*/

export const getCurrentPageState = (state: AppStateType) => state.findUsersPage.currentPage

export const getTotalUsersState = (state: AppStateType) => state.findUsersPage.totalUsers

export const getUsersOnPageState = (state: AppStateType) => state.findUsersPage.usersOnPage

export const getIsFetchingState = (state: AppStateType) => state.findUsersPage.isFetching

export const getIsFollowingInProgressState = (state: AppStateType) => state.findUsersPage.isFollowingInProgress

/*********FriendsList selectors***********/

export const getFriendListState = (state: AppStateType) => state.friendsList.friends

export const getIsRefreshState = (state: AppStateType) => state.friendsList.isRefresh

export const getViewAll = (state: AppStateType) => state.friendsList.viewAll

/*********Profile selectors************/

export const getProfileState = (state: AppStateType) => state.profile

export const getProfileStatusState = (state: AppStateType) => state.profile.profileStatus

export const getWallMessageArrayState = (state: AppStateType) => state.profile.wallMessageArray

/*******Footer selectors***********/

export const getLanguages = (state: AppStateType) => state.footer.languages
