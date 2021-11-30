import React from "react";
import style from "./profile.module.css"
import NewPostContainer from "./profileContainer/new_post/new_postContainer";
import FriendsListContainer from "./profileContainer/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileContainer/profileData/profileDataContainer";
import WallContainer from "./profileContainer/wall/wallContainer";
import {Redirect} from "react-router";

const Profile = (props) => {

    if(props.isAuth === false) {
        return <Redirect to={"login"} />
    }

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