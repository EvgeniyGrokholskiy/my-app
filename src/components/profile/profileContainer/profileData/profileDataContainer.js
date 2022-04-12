import {compose} from "redux"
import {connect} from "react-redux"
import GetMatchUrl from "./getMatchUrl"
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    savePhoto,
    setUserProfileData,
    setUserStatusThunkCreator
} from "../../../../redux/profileReducer"
import {withAuthRedirect} from "../../../hoc/authRedirect"
import {authThunkCreator} from "../../../../redux/authReducer"
import {getAuthState, getProfileState, getProfileStatusState} from "../../../../redux/selectors"


const mapStateToProps = (state) => {

    return {
        state: getProfileState(state),
        auth: getAuthState(state),
        profileStatus: getProfileStatusState(state)
    };
}

const ProfileDataContainer = compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getUserStatusThunkCreator,
        setUserStatusThunkCreator,
        authThunkCreator,
        savePhoto,
        setUserProfileData
    }),
    withAuthRedirect)
(GetMatchUrl)

export default ProfileDataContainer;