import React from "react";
import style from "./profile.module.css"
import FriendsListContainer from "./profileContainer/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileContainer/profileData/profileDataContainer";


const Profile = () => {

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

export default Profile;