import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../../../redux/profileReducer";
import {useMatch} from "react-router";


class GetProfileData extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id || 2;

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <ProfileData {...this.props} />
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

/*const mapDispatchToProps = (dispatch) => {
    return ;
};*/

const ProfileDataContainer = connect(mapStateToProps,
    {
        setUserProfile,
        getUserProfile
    })(GetMatchUrl);

export default ProfileDataContainer;