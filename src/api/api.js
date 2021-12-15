import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a25f1775-4a61-40ba-88c5-97f39319b59b"
    },
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`,)
            .then((response) => response.data)
    }
}

export const followUnfollowAPI = {
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then((response) => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then((response) => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me/`)
            .then((response) => response.data.data)
    },

    login(loginData) {
        return instance.post(`/auth/login`, loginData)
            .then((response) => {
                return response.data
            })
    },

    logout() {
        return instance.delete(`/auth/login`)
            .then((response) => {
                return response
            })
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) => response.data)
    },

    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then((response) => {
                    return response.data
                }
            )
    },

    setUserStatus(status) {
        return instance.put(`/profile/status`, {status})
            .then((response) => {
                    return response.data
                }
            )
    },

    savePhoto(file) {
        const formData = new FormData()
        formData.append("image",file)

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        return instance.put(`/profile/photo`, formData, config)
            .then((response) => {
                    return response.data
                }
            )
    },

    setProfileData(data) {
        return instance.put(`/profile/`, data)
            .then((response) => {
                    return response.data
                }
            )
    },
}
