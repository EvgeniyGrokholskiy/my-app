import React from "react";
import style from "./profile.module.css"
import NewPostContainer from "./profileComponents/new_post/new_postContainer";
import FriendsListContainer from "./profileComponents/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileComponents/profileData/profileDataContainer";
import WallContainer from "./profileComponents/wall/wallContainer";

const Profile = (props) => {

    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileDataContainer/>
                <NewPostContainer />
                <WallContainer />
            </div>
            <div className={style.rightContainer}>
                <FriendsListContainer/>
            </div>
        </div>
    );
};

export default Profile;