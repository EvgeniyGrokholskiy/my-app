import React from "react";
import ProfileData from "./profileData";
import StoreContext from "../../../../StoreContext";



const ProfileDataContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                value => {
                    return(
                        <ProfileData state={value.getState().profile.profileData} />
                    )
                }
            }

        </StoreContext.Consumer>
    );
};

export default ProfileDataContainer;