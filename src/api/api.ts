import axios, {AxiosInstance} from "axios"
import {LoginData} from "../redux/authReducer"
import {IProfile} from "../redux/profileReducer"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a25f1775-4a61-40ba-88c5-97f39319b59b"
    },
    withCredentials: true
})

interface IUsersApiClass {
    getUsers: (currentPage: number, pageSize: number) => Promise<any>
}

class usersApiClass implements IUsersApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.getUsers = this.getUsers.bind(this)
    }

    public getUsers(currentPage = 1, pageSize = 5): Promise<any> {
        return this._instance.get(`users/?count=${pageSize}&page=${currentPage}`,)
            .then((response) => response.data)
    }
}

export const usersAPI = new usersApiClass(instance)

interface IGetFriendsApiClass {
    getFriends: () => Promise<any>
}

class getFriendsApiClass implements IGetFriendsApiClass {

    private _instance: AxiosInstance

    constructor(test: AxiosInstance) {
        this._instance = test
        this.getFriends = this.getFriends.bind(this)
    }

    getFriends(): Promise<any> {
        return this._instance.get("users/?friend=true").then((response)=>response.data.items)
    }
}

export const getFriendsAPI = new getFriendsApiClass(instance)


interface IFollowUnfollowApiClass {
    unFollow: (userId: number) => Promise<any>
    follow: (userId: number) => Promise<any>
}

class followUnfollowApiClass implements IFollowUnfollowApiClass {

    private _instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this._instance = instance
        this.follow = this.follow.bind(this)
        this.unFollow = this.unFollow.bind(this)
    }

    public unFollow(userId: number): Promise<any> {
        return this._instance.delete(`follow/${userId}`)
            .then((response) => response.data)
    }

    public follow(userId: number): Promise<any> {
        return this._instance.post(`follow/${userId}`)
            .then((response) => response.data)
    }
}

export const followUnfollowAPI = new followUnfollowApiClass(instance)


interface IAuthApiClass {
    authMe: () => Promise<any>
    login: (loginData: LoginData) => Promise<any>
    getCaptcha: () => Promise<any>
    logout: () => Promise<any>
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

    public authMe(): Promise<any> {
        return this._instance.get(`auth/me/`)
            .then((response) => response.data.data)
    }

    public login(loginData: LoginData): Promise<any> {
        return instance.post(`/auth/login`, loginData)
            .then((response) => response.data)
    }

    public getCaptcha(): Promise<any> {
        return this._instance.get(`security/get-captcha-url`)
            .then((response) => response.data.url)
    }

    public logout(): Promise<any> {
        return this._instance.delete(`/auth/login`)
            .then((response) => response)
    }
}

export const authAPI = new authApiClass(instance)


interface IProfileApiClass {
    getUserProfile: (userId: number) => Promise<any>
    getUserStatus: (userId: number) => Promise<any>
    setUserStatus: (status: string) => Promise<any>
    savePhoto: (file: File) => Promise<any>
    setProfileData: (data: IProfile) => Promise<any>
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

    public getUserProfile(userId: number): Promise<any> {
        return this._instance.get(`profile/${userId}`)
            .then((response) => response.data)
    }

    public getUserStatus(userId: number): Promise<any> {
        return this._instance.get(`/profile/status/${userId}`)
            .then((response) => {
                    return response.data
                }
            )
    }

    public setUserStatus(status: string): Promise<any> {
        return this._instance.put(`/profile/status`, {status})
            .then((response) => {
                    return response.data
                }
            )
    }

    public savePhoto(file: File): Promise<any> {
        const formData = new FormData()
        formData.append("image", file)

        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        return this._instance.put(`/profile/photo`, formData, config)
            .then((response) => {
                    return response.data
                }
            )
    }

    public setProfileData(data: IProfile): Promise<any> {
        return this._instance.put(`/profile/`, data)
            .then((response) => {
                    return response.data
                }
            )
    }
}

export const profileAPI = new profileApiClass(instance)