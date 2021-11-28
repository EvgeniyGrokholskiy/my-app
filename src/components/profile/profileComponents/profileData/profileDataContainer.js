import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../../../redux/profileReducer";
import {useMatch} from "react-router";


class GetProfileData extends React.Component {

    componentDidMount() {

        let userID = this.props.match ? this.props.match.params.userId : 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then((response) =>{
                console.log(response.data.fullName);
                this.props.setUserProfile(response.data)
            })
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
        <GetProfileData {...props} match={match} />
    )
}

const mapStateToProps = (state)=>{

    return {
        state: state.profile
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return ;
};*/

const ProfileDataContainer = connect(mapStateToProps, {setUserProfile})(GetMatchUrl);

export default ProfileDataContainer;