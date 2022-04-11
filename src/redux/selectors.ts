//import {createSelector} from "reselect";

import {AppStateType} from "./reduxStore";

export const getAppState = (state: AppStateType) => {
    return state.app
}

export const getProfileState = (state: AppStateType) => {
    return state.profile
}

export const getAuthState = (state: AppStateType) => {
    return state.auth
}

export const getAuthLogin = (state: AppStateType) => {
    return state.auth.login
}

export const getIsAuthState = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getInitializedState = (state: AppStateType) => {
    return state.app.initialized
}

export const getProfileStatusState = (state: AppStateType) => {
    return state.profile.profileStatus
}

export const getChatPageState = (state: AppStateType) => {
    return state.chatPage
}

export const getChatList = (state: AppStateType) => {
    return state.chatPage.chatsList
}

export const getChatMessageArrayState = (state: AppStateType) => {
    return state.chatPage.chatMessageArray
}

export const getActiveChanNameState = (state: AppStateType) => {
    return state.chatPage.activeChatName
}

export const getFindUsersState = (state: AppStateType) => {
    return state.findUsersPage.findUsers
}

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

export const getCurrentPageState = (state: AppStateType) => {
    return state.findUsersPage.currentPage
}

export const getTotalUsersState = (state: AppStateType) => {
    return state.findUsersPage.totalUsers
}

export const getUsersOnPageState = (state: AppStateType) => {
    return state.findUsersPage.usersOnPage
}

export const getIsFetchingState = (state: AppStateType) => {
    return state.findUsersPage.isFetching
}

export const getIsFollowingInProgressState = (state: AppStateType) => {
    return state.findUsersPage.isFollowingInProgress
}

export const getFriendListState = (state: AppStateType) => {
    return state.friendsList.friends
}

export const getWallMessageArrayState = (state: AppStateType) => {
    return state.profile.wallMessageArray
}

export const getLanguages = (state: AppStateType) => state.footer.languages
