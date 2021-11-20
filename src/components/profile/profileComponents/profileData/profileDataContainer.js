import React from "react";
import ProfileData from "./profileData";



const ProfileDataContainer = (props) => {

    return (
        <ProfileData state={props.state.profile.profileData} />
    );
};

export default ProfileDataContainer;