import React from "react";
import ProfileData from "./profileData";
import {connect} from "react-redux";


//
// const ProfileDataContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//                     return(
//                         <ProfileData state={value.getState().profile.profileData} />
//                     )
//                 }
//             }
//
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state)=>{

    return {
        state: state.profile.profileData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const ProfileDataContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileData);

export default ProfileDataContainer;