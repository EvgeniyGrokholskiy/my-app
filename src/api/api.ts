import axios, {AxiosInstance} from "axios"
import {LoginData} from "../redux/authReducer"
import {IProfile} from "../redux/profileReducer"
import {UsersArrayItemType} from "../types/types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a25f1775-4a61-40ba-88c5-97f39319b59b"
    },
    withCredentials: true
})

export enum ResponseCode {
    success = 0,
    error = 1,
    captchaIsRequired = 10
}

type TGetUsersData = { items: Array<UsersArrayItemType>, totalCount: number, "error": null | string }

export type TAxiosResponse<T> = {
    url: string
    data: T
    resultCode: number
    messages: string
}

interface IUsersApiClass {
    getUsers: (currentPage: number, pageSize: number) => Promise<TGetUsersData>
}

class usersApiClass implements IUsersApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.getUsers = this.getUsers.bind(this)
    }

    public getUsers(currentPage = 1, pageSize = 5) {
        return this._instance.get<TGetUsersData>(`users/?count=${pageSize}&page=${currentPage}`,)
            .then((response) => response.data)
    }
}

export const usersAPI = new usersApiClass(instance)

interface IGetFriendsApiClass {
    getFriends: () => Promise<Array<UsersArrayItemType>>
}

class getFriendsApiClass implements IGetFriendsApiClass {

    private _instance: AxiosInstance

    constructor(test: AxiosInstance) {
        this._instance = test
        this.getFriends = this.getFriends.bind(this)
    }

    getFriends()  {
        return this._instance.get<TGetUsersData>("users/?friend=true").then((response) => response.data.items)
    }
}

export const getFriendsAPI = new getFriendsApiClass(instance)


export interface IFollowUnfollowApiClass {
    unFollow: (userId: number) => Promise<TAxiosResponse<{}>>
    follow: (userId: number) => Promise<TAxiosResponse<{}>>
}

class followUnfollowApiClass implements IFollowUnfollowApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.follow = this.follow.bind(this)
        this.unFollow = this.unFollow.bind(this)
    }

    public unFollow(userId: number) {
        return this._instance.delete<TAxiosResponse<{}>>(`follow/${userId}`)
            .then((response) => response.data)
    }

    public follow(userId: number) {
        return this._instance.post<TAxiosResponse<{}>>(`follow/${userId}`)
            .then((response) => response.data)
    }
}

export const followUnfollowAPI = new followUnfollowApiClass(instance)

type TAuthMeData = { id: number, email: string, login: string }
type TLoginData = { userId: number }

interface IAuthApiClass {
    authMe: () => Promise<TAuthMeData>
    login: (loginData: LoginData) => Promise<TAxiosResponse<TLoginData>>
    getCaptcha: () => Promise<string>
    logout: () => Promise<TAxiosResponse<{}>>
}

class authApiClass implements IAuthApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.authMe = this.authMe.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.getCaptcha = this.getCaptcha.bind(this)
    }

    public authMe() {
        return this._instance.get<TAxiosResponse<TAuthMeData>>(`auth/me/`)
            .then((response) => response.data.data)
    }

    public login(loginData: LoginData) {
        return instance.post<TAxiosResponse<TLoginData>>(`/auth/login`, loginData)
            .then((response) => response.data)
    }

    public getCaptcha() {
        return this._instance.get<TAxiosResponse<{}>>(`security/get-captcha-url`)
            .then((response) => response.data.url)
    }

    public logout() {
        return this._instance.delete<TAxiosResponse<{}>>(`/auth/login`)
            .then((response) => response.data)
    }
}

export const authAPI = new authApiClass(instance)


type TSavePhotoResponseData = {photos:{large: string, small: string}}

interface IProfileApiClass {
    getUserProfile: (userId: number) => Promise<IProfile>
    getUserStatus: (userId: number) => Promise<string>
    setUserStatus: (status: string) => Promise<TAxiosResponse<{}>>
    savePhoto: (file: File) => Promise<TAxiosResponse<TSavePhotoResponseData>>
    setProfileData: (data: IProfile) => Promise<TAxiosResponse<IProfile>>
}

class profileApiClass implements IProfileApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.getUserProfile = this.getUserProfile.bind(this)
        this.getUserStatus = this.getUserStatus.bind(this)
        this.setUserStatus = this.setUserStatus.bind(this)
        this.setProfileData = this.setProfileData.bind(this)
        this.savePhoto = this.savePhoto.bind(this)
    }

    public getUserProfile(userId: number): Promise<IProfile> {
        return this._instance.get<IProfile>(`profile/${userId}`)
            .then((response) => response.data)
    }

    public getUserStatus(userId: number): Promise<string> {
        return this._instance.get<string>(`/profile/status/${userId}`)
            .then((response) => {
                    return response.data
                }
            )
    }

    public setUserStatus(status: string): Promise<TAxiosResponse<{}>> {
        return this._instance.put<TAxiosResponse<{}>>(`/profile/status`, {status})
            .then((response) => {
                    return response.data
                }
            )
    }

    public savePhoto(file: File): Promise<TAxiosResponse<TSavePhotoResponseData>> {
        const formData = new FormData()
        formData.append("image", file)

        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        return this._instance.put<TAxiosResponse<TSavePhotoResponseData>>(`/profile/photo`, formData, config)
            .then((response) => {
                    return response.data
                }
            )
    }

    public setProfileData(data: IProfile) {
        return this._instance.put<TAxiosResponse<IProfile>>(`/profile/`, data)
            .then((response) => {
                    return response.data
                }
            )
    }
}

export const profileAPI = new profileApiClass(instance)