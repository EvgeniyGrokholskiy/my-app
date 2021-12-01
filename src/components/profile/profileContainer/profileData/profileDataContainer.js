import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";
import {editProfileStatus, getUserProfile, setProfileStatus, setUserProfile} from "../../../../redux/profileReducer";
import {useMatch} from "react-router";
import {withAuthRedirect} from "../../../hoc/authRedirect";
import {compose} from "redux";
import NewPostContainer from "../new_post/new_postContainer";
import WallContainer from "../wall/wallContainer";


class GetProfileData extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id || 2;

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <>
                <ProfileData {...this.props} />
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
        state: state.profile,
        auth: state.auth
    };
};

const ProfileDataContainer = compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile,setProfileStatus,editProfileStatus}),
    withAuthRedirect)
(GetMatchUrl)

export default ProfileDataContainer;