import axios from "axios"
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

export class usersApiClass implements IUsersApiClass {
    getUsers(currentPage = 1, pageSize = 5): Promise<any> {
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`,)
            .then((response) => response.data)
    }
}

export const usersAPI = new usersApiClass()


interface IFollowUnfollowApiClass {
    unFollow: (userId: number) => Promise<any>
    follow: (userId: number) => Promise<any>
}

class followUnfollowApiClass implements IFollowUnfollowApiClass {
    unFollow(userId: number): Promise<any> {
        return instance.delete(`follow/${userId}`)
            .then((response) => response.data)
    }

    follow(userId: number): Promise<any> {
        return instance.post(`follow/${userId}`)
            .then((response) => response.data)
    }
}

export const followUnfollowAPI = new followUnfollowApiClass()


interface IAuthApiClass {
    authMe: () => Promise<any>
    login: (loginData: LoginData) => Promise<any>
    getCaptcha: () => Promise<any>
    logout: () => Promise<any>
}

class authApiClass implements IAuthApiClass {
    authMe(): Promise<any> {
        return instance.get(`auth/me/`)
            .then((response) => response.data.data)
    }

    login(loginData: LoginData): Promise<any> {
        return instance.post(`/auth/login`, loginData)
            .then((response) => response.data)
    }

    getCaptcha(): Promise<any> {
        return instance.get(`security/get-captcha-url`)
            .then((response) => response.data.url)
    }

    logout(): Promise<any> {
        return instance.delete(`/auth/login`)
            .then((response) => response)
    }
}

export const authAPI = new authApiClass()


interface IProfileApiClass {
    getUserProfile: (userId: number) => Promise<any>
    getUserStatus: (userId: number) => Promise<any>
    setUserStatus: (status: string) => Promise<any>
    savePhoto: (file: File) => Promise<any>
    setProfileData: (data: IProfile) => Promise<any>
}

class profileApiClass implements IProfileApiClass {
    getUserProfile(userId: number): Promise<any> {
        return instance.get(`profile/${userId}`)
            .then((response) => response.data)
    }

    getUserStatus(userId: number): Promise<any> {
        return instance.get(`/profile/status/${userId}`)
            .then((response) => {
                    return response.data
                }
            )
    }

    setUserStatus(status: string): Promise<any> {
        return instance.put(`/profile/status`, {status})
            .then((response) => {
                    return response.data
                }
            )
    }

    savePhoto(file: File): Promise<any> {
        const formData = new FormData()
        formData.append("image", file)

        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        return instance.put(`/profile/photo`, formData, config)
            .then((response) => {
                    return response.data
                }
            )
    }

    setProfileData(data: IProfile): Promise<any> {
        return instance.put(`/profile/`, data)
            .then((response) => {
                    return response.data
                }
            )
    }
}

export const profileAPI = new profileApiClass()