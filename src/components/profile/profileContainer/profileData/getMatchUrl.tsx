import React from "react"
import GetProfileData from "./getProfileData"
import {PathMatch, useMatch} from "react-router"
import {Dispatch, IMatchObj} from "../../../../types/types"
import {AuthInitialStateType} from "../../../../redux/authReducer"
import {ProfileInitialStateType} from "../../../../redux/profileReducer"

export interface IGetMatchUrlProps {
    state: ProfileInitialStateType
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

const GetMatchUrl: React.FC<IGetMatchUrlProps> = (props) => {
    const match:PathMatch<"userId"> | null = useMatch("/profile/:userId")

    return (
        <GetProfileData {...props} match={match}/>
    )
}

export default GetMatchUrl