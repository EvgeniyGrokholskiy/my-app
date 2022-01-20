import store from "../redux/reduxStore";

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
export type IsFollowingInProgressType = [id:number]
export type FollowUnfollowFunctionType = (userId:number , status:boolean) => void