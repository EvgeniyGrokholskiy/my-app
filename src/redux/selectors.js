//import {createSelector} from "reselect";

export const getProfileState = (state) => {
    return state.profile
}

export const getAuthState = (state) => {
    return state.auth
}

export const getIsAuthState = (state) => {
    return state.auth.isAuth
}

export const getInitializedState = (state) => {
    return state.app.initialized
}

export const getProfileStatusState = (state) => {
    return state.profile.profileStatus
}

export const getChatPageState = (state) => {
    return state.chatPage
}

export const getChatMessageArrayState = (state) => {
    return state.chatPage.chatMessageArray
}

export const getActiveChanNameState = (state) => {
    return state.chatPage.activeChatName
}

export const getFindUsersState = (state) => {
    return state.findUsersPage.findUsers
}

/*
export const getFindUsersState = (state) => {  простая логика в селекторе
    return state.findUsersPage.findUsers

export const getFindUsersStateSelector = (state) => {  сложный селектор с обработкой стэйта
    return state.findUsersPage.findUsers.filter(user => true)
}

export const getFindUsersStateRESELECT = createSelector(getFindUsersState,((user)=>{ RESELECT библиотека предоставляет функцию
    return user.filter(user => true)                                                 createSelector которая позволяет оптимизировать рендеринг.
                                                                                     Функция принимает примитивный селектор который достает из стэйта
                                                                                     и отдает нужные данные в сложный селектор, который вызывается в mapStateToProps
                                                                                     производит сложную магию и отдает результат ретурном в переменную(в пропсы).
}))
*/

export const getCurrentPageState = (state) => {
    return state.findUsersPage.currentPage
}

export const getTotalUsersState = (state) => {
    return state.findUsersPage.totalUsers
}

export const getUsersOnPageState = (state) => {
    return state.findUsersPage.usersOnPage
}

export const getIsFetchingState = (state) => {
    return state.findUsersPage.isFetching
}

export const getIsFollowingInProgressState = (state) => {
    return state.findUsersPage.isFollowingInProgress
}

export const getFriendListState = (state) => {
    return state.friendsList
}

export const getWallMessageArrayState = (state) => {
    return state.profile.wallMessageArray
}
