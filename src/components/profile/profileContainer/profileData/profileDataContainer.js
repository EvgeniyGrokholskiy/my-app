import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";
import {
    editProfileStatus,
    getUserProfile,
    getUserStatusThunkCreator,
    setProfileStatus,
    setUserProfile,
    setUserStatusThunkCreator
} from "../../../../redux/profileReducer";
import {useMatch} from "react-router";
import {compose} from "redux";
import NewPostContainer from "../new_post/new_postContainer";
import WallContainer from "../wall/wallContainer";
import StatusBar from "../status/statusBar";
import {authThunkCreator} from "../../../../redux/authReducer";
import {withAuthRedirect} from "../../../hoc/authRedirect";
import {getAuthState, getProfileState, getProfileStatusState} from "../../../../redux/selectors";
import StatusBarWithHooks from "../status/statusBarWithHooks";


class GetProfileData extends React.Component {

    state = {
        userId: this.props.auth.id
    }


    componentDidMount() {
        this.props.authThunkCreator().then((data) => {
            console.log(data);
            let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id
            this.props.getUserProfile(userId)
            this.props.getUserStatusThunkCreator(userId)
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.auth.id !== this.props.auth.id) {
            this.setState({
                userId: this.props.auth.id
            })
        }
    }

    render() {
        return (
            <>
                <ProfileData {...this.props} />
                <StatusBarWithHooks setProfileStatus={this.props.setProfileStatus}
                           editProfileStatus={this.props.editProfileStatus}
                           state={this.props.state}
                           auth={this.props.auth}
                           profileStatus={this.props.profileStatus}
                           getUserStatusThunkCreator={this.props.getUserStatusThunkCreator}
                           setUserStatusThunkCreator={this.props.setUserStatusThunkCreator}
                />
                <NewPostContainer/>
                <WallContainer/>
            </>
        )
    }
}

const GetMatchUrl = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <GetProfileData {...props} match={match}/>
    )
}

const mapStateToProps = (state) => {

    return {
        state: getProfileState(state),
        auth: getAuthState(state),
        profileStatus: getProfileStatusState(state)
    };
};

const ProfileDataContainer = compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        setProfileStatus,
        editProfileStatus,
        getUserStatusThunkCreator,
        setUserStatusThunkCreator,
        authThunkCreator
    }),
    /*withAuthRedirect*/)
(GetMatchUrl)

export default ProfileDataContainer;