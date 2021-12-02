import React from "react";
import style from "./profile.module.css"
import FriendsListContainer from "./profileContainer/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileContainer/profileData/profileDataContainer";
import {connect} from "react-redux";


const Profile = (props) => {

    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileDataContainer/>
            </div>
            <div className={style.rightContainer}>
                <FriendsListContainer/>
            </div>
        </div>
    );
};



const mapStateToProps = (state)  => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}


const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;