import React from "react"
import {connect} from "react-redux"
import GetMatchUrl from "./getMatchUrl"
import {AppStateType} from "../../../../redux/reduxStore"
import {withAuthRedirect} from "../../../hoc/authRedirect"
import {authThunkCreator} from "../../../../redux/authReducer"
import {getAuthState, getProfileState, getProfileStatusState} from "../../../../redux/selectors"
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    savePhoto,
    setUserProfileData,
    setUserStatusThunkCreator
} from "../../../../redux/profileReducer"


type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    state: getProfileState(state),
    auth: getAuthState(state),
    profileStatus: getProfileStatusState(state)
})

const mapDispatchToProps = {
    getUserProfile: getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserStatusThunkCreator,
    authThunkCreator,
    savePhoto,
    setUserProfileData
}

const ProfileDataContainer: React.FC<any> = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(withAuthRedirect(GetMatchUrl))

export default ProfileDataContainer;