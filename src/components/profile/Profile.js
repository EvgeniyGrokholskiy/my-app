import React from "react";
import style from "./profile.module.css"
import ProfileData from "./profileComponents/profileData/profileData";
import Wall from "./profileComponents/wall/wall";
import FriendsList from "./profileComponents/friendsList/friendsList";
import NewPostContainer from "./profileComponents/new_post/new_postContainer";

const Profile = (props) => {
    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileData/>
                <NewPostContainer state={props.state.profile} dispatch={props.dispatch} />
                <Wall state={props.state.profile} />
            </div>
            <div className={style.rightContainer}>
                <FriendsList state={props.state.friendsList}/>
            </div>
        </div>
    );
};

export default Profile;