import store from "../redux/reduxStore"
import {InitialStateType, LoginData} from "../redux/authReducer"
import {ChangeLanguagesType} from "../redux/footerReducer"
import {ChatListArrayItem, ChatMessageArrayItem, SendMessageType, SetActiveChatNameType} from "../redux/chatReducer"
import {FriendsArrayItemType} from "../redux/friendsListReducer";
import {WallMessage} from "../redux/profileReducer";

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


/*****Props Types*******/

export interface ISendMessageProps {
    sendMessage: (message: string) => SendMessageType
}

export interface ISendMessageFormProps {
    sendMessage: (data: any) => void
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
    props: InitialStateType
}

export interface ILoginProps {
    auth: InitialStateType
    getNewCaptcha: () => (dispatch: Dispatch) => Promise<void>
    loginThunkCreator: (loginData: LoginData) => (dispatch: Dispatch) => Promise<void>
}

export interface IMyFormProps {
    auth: InitialStateType
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

export interface INewMessageForm {
    addPost: (message: string) => { type: string, message: string }
}

export interface IWallProps {
    wallMessageArray: Array<WallMessage>
}

export interface IPostOnWall {
    likeCount: number
    message: string
}