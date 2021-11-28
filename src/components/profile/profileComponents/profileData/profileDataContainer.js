import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../../../redux/profileReducer";

class GetProfileData extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state)=>{

    return {
        state: state.profile
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return ;
};*/

const ProfileDataContainer = connect(mapStateToProps, {setUserProfile})(GetProfileData);

export default ProfileDataContainer;