import React from "react";
import {PathMatch} from "react-router"
import store from "../redux/reduxStore"
import {AppInitialStateType} from "../redux/appReducer";
import {ChangeLanguagesType} from "../redux/footerReducer"
import {FriendsArrayItemType} from "../redux/friendsListReducer";
import {AuthInitialStateType, LoginData} from "../redux/authReducer"
import {IProfileInitialStateType, IWallMessage} from "../redux/profileReducer";
import {ChatListArrayItem, ChatMessageArrayItem, SendMessageType, SetActiveChatNameType} from "../redux/chatReducer"

export type Dispatch = typeof store.dispatch
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
    sendMessage: (message: string) => SendMessageType
}

export interface ISendMessageFormProps {
    sendMessage: (data: any) => void
    message: string
    setMessage:  React.Dispatch<React.SetStateAction<string>>
}

export interface IOutgoingMessage {
    message: string
    data: string
}

export interface IChatContentProps {
    chatMessage: Array<ChatMessageArrayItem>
    chatName: string
}

export interface IChatSideBarProps {
    chatsList: Array<ChatListArrayItem>
    setActiveChatName: (chatId: number) => SetActiveChatNameType
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
    changeLanguages: (languages: string) => ChangeLanguagesType
}

export interface IHeaderProps {
    login: string
    isAuth: boolean
    logoutThunkCreator: () => Promise<void>
}

export interface IAuthProps {
    login: string
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
    getNewCaptcha:  () => (dispatch: Dispatch) => Promise<void>
    loginThunkCreator: (loginData: LoginData) => (dispatch: Dispatch) => Promise<void>
}

export interface ICaptchaProps {
    captcha: string
    getNewCaptcha: () => (dispatch: Dispatch) => Promise<void>
    validator: any
}

export interface IFriendsListProps {
    friends: Array<FriendsArrayItemType>
}

export interface IFriendCardProps {
    name: string
    job: string
}

export interface INewMessageFormProps {
    addPost: (message: string) => { type: string, message: string }
}

export interface IWallProps {
    wallMessageArray: Array<IWallMessage>
}

export interface IPostOnWall {
    likeCount: number
    message: string
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
    getUserProfile: Dispatch
    getUserStatusThunkCreator: Dispatch
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: Dispatch
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IGetMatchUrlProps {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: IMatchObj
    getUserProfile: Dispatch
    getUserStatusThunkCreator: Dispatch
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: Dispatch
    savePhoto: (photo: File) => (dispatch: Dispatch) => Promise<void>
    setUserProfileData: (data: Record<string, any>) => Promise<any>
}

export interface IGetProfileData {
    state: IProfileInitialStateType
    auth: AuthInitialStateType
    profileStatus: string
    match: PathMatch<"userId"> | null
    getUserProfile: Dispatch
    getUserStatusThunkCreator: Dispatch
    setUserStatusThunkCreator: (status: string) => (dispatch: Dispatch) => Promise<void>
    authThunkCreator: Dispatch
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