import React from "react"
import {PathMatch} from "react-router"
import {AnyAction, Dispatch} from "redux"
import {IChangeLanguagesAction} from "../redux/footerReducer"
import {IFriendsArrayItem, ISetFriendInListAction, ISetIsRefresh} from "../redux/friendsListReducer"
import {AuthInitialStateType, LoginData} from "../redux/authReducer"
import {AppInitialStateType, IInitAppAction} from "../redux/appReducer"
import {IProfileInitialStateType, ISetLikeToMessageAction, IWallMessage} from "../redux/profileReducer"
import {
    IChatListArrayItem,
    IChatMessageArrayItem,
    ISendMessageAction,
    ISetActiveChatNameAction
} from "../redux/chatReducer"

//export type Dispatch = typeof store.dispatch

export type UsersArrayItemType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string | null
        small: string | null
    }
    status: string | null
    uniqueUrlName: string | null
}
export type IsFollowingInProgressType = [id: number]
export type FollowUnfollowFunctionType = (userId: number, status: boolean) => void

/***********Functions types*********************/

export type TGetDate = () => [day: string, month: string, year: number, hour: string, minute: string]

/******Variables types*******/

export interface IMatchObj {
    params: { userId: string }
    pathname: string
    pathnameBase: string
    pattern: { path: string, caseSensitive: boolean, end: boolean }
}

/*****Props Types*******/

export interface ISendMessageProps {
    sendMessage: (message: string) => ISendMessageAction
}

export interface ISendMessageFormProps {
    sendMessage: (data: any) => void
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

export interface IOutgoingMessage {
    message: string
    data: string
}

export interface IChatContentProps {
    chatMessage: Array<IChatMessageArrayItem>
    chatName: string
}

export interface IChatSideBarProps {
    chatsList: Array<IChatListArrayItem>
    setActiveChatName: (chatId: number) => ISetActiveChatNameAction
}

export interface IChatHeaderProps {
    name: string
    lastMessage: string
}

export interface IIncomingMessageProps {
    data: string
    message: string
}

export interface IFooterProps {
    languages: string
    changeLanguages: (languages: string) => IChangeLanguagesAction
}

export interface IHeaderProps {
    login: string | null
    isAuth: boolean
    logoutThunkCreator: () => Promise<void>
}

export interface IAuthProps {
    login: string | null
    isAuth: boolean
    logoutThunkCreator: () => Promise<void>
}

export interface IRedirectComponentProps {
    isAuth: boolean
    props: AuthInitialStateType
}

export interface ILoginProps {
    auth: AuthInitialStateType
    getNewCaptcha: () => (dispatch: Dispatch) => Promise<void>
    loginThunkCreator: (loginData: LoginData) => (dispatch: Dispatch) => Promise<void>
}

export interface IMyFormProps {
    auth: AuthInitialStateType
    getNewCaptcha: () => (dispatch: Dispatch) => Promise<void>
    loginThunkCreator: (loginData: LoginData) => (dispatch: Dispatch) => Promise<void>
}

export interface ICaptchaProps {
    captcha: string
    getNewCaptcha: () => (dispatch: Dispatch) => Promise<void>
    validator: any
}

export interface IFriendsListProps {
    friends: Array<IFriendsArrayItem>
    isRefresh: boolean
    setIsRefresh: (status: boolean) => ISetIsRefresh
    setFriendInList: (arrayOfFriends: IFriendsArrayItem[]) => ISetFriendInListAction
}

export interface IFriendCardProps {
    name: string,
    photos: { small: null | string, large: null | string }
}

export interface INewMessageFormProps {
    addPost: (message: string) => { type: string, message: string }
}

export interface IWallProps {
    setLikeToMessage: (id: number) => ISetLikeToMessageAction
    wallMessageArray: Array<IWallMessage>
}

export interface IPostOnWall {
    id: number
    likeCount: number
    message: string
    setLikeToMessage: (id: number) => ISetLikeToMessageAction
}

export interface IStatusBarWithHooksProps {
    profileStatus: string
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
}

export interface IChangePhotoButtonProps {
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
}

export interface IProfileImageBlockProps {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    match: PathMatch<"userId"> | null
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
}

export interface IProfileDataHolderProps {
    state: IProfileInitialStateType
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    match: PathMatch<"userId"> | null
    auth: AuthInitialStateType
}

export interface IProfileSetDataFormProps {
    error: boolean
    errorMessage: string
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    state: IProfileInitialStateType
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IProfileDataProps {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: PathMatch<"userId"> | null
    getUserProfile: (userId: number) => (dispatch: Dispatch) => Promise<void>
    getUserStatusThunkCreator: (userId: number) => (dispatch: Dispatch<IInitAppAction | AnyAction>) => Promise<void>
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: () => (dispatch: Dispatch) => Promise<void>
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IGetMatchUrlProps {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: PathMatch<"userId"> | null
    getUserProfile: (userId: number) => (dispatch: Dispatch) => Promise<void>
    getUserStatusThunkCreator: (userId: number) => (dispatch: Dispatch<IInitAppAction | AnyAction>) => Promise<void>
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: () => (dispatch: Dispatch) => Promise<void>
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IGetProfileDataProps {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: PathMatch<"userId"> | null
    getUserProfile: (userId: number) => (dispatch: Dispatch) => Promise<void>
    getUserStatusThunkCreator: (userId: number) => (dispatch: Dispatch<IInitAppAction | AnyAction>) => Promise<void>
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: () => (dispatch: Dispatch) => Promise<void>
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IAppProps {
    app: AppInitialStateType
    initializeApp: () => void
}

export interface IUserCardProps {
    onPageChanged: (page: number) => void
    totalUsers: number
    usersOnPage: number
    currentPage: number
    findUsers: Array<UsersArrayItemType>
    setFollow: (userId: number, flow: boolean) => Promise<void>
    setUnfollow: (userId: number, flow: boolean) => void
    isFollowingInProgress: Array<number>
}

export interface IUsersContainerProps {
    usersOnPage: number
    currentPage: number
    isFetching: boolean
    totalUsers: number
    findUsers: Array<UsersArrayItemType>
    setFollow: (userId: number, flow: boolean) => any
    setUnfollow: (userId: number, flow: boolean) => void
    getUsers: (page: number, usersOnPage: number) => void
    isFollowingInProgress: number[]
}

export interface IPaginationProps {
    totalUsers: number
    usersOnPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
}