import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {useMatch} from "react-router";
import ProfileData from "./profileData";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    savePhoto, setUserProfileData,
    setUserStatusThunkCreator
} from "../../../../redux/profileReducer";
import WallContainer from "../wall/wallContainer";
import {withAuthRedirect} from "../../../hoc/authRedirect";
import NewPostContainer from "../new_post/new_postContainer";
import StatusBarWithHooks from "../status/statusBarWithHooks";
import {authThunkCreator} from "../../../../redux/authReducer";
import {getAuthState, getProfileState, getProfileStatusState} from "../../../../redux/selectors";


class GetProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null
        }
    }

    getUserData = (userId) => {
        this.props.getUserProfile(userId);
        this.props.getUserStatusThunkCreator(userId);
        this.setState({
            userId: userId
        })
    }

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id;
        if (!userId) return;
        this.getUserData(userId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props !== nextProps || this.props.profileStatus !== nextProps.profileStatus || this.props.profile?.profile !== nextProps.profile?.profile
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id
        if (userId !== prevState.userId) {
            this.getUserData(userId);
        }
    }

    render() {
        return (
            <>
                <ProfileData {...this.props} userId={this.userId}/>
                <StatusBarWithHooks
                    //id={this.props.auth.id}
                    //getUserProfile={this.props.getUserProfile}
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