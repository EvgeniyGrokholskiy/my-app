import React from "react";
import style from "./profile.module.css"
import Wall from "./profileComponents/wall/wall";
import NewPostContainer from "./profileComponents/new_post/new_postContainer";
import FriendsListContainer from "./profileComponents/friendsList/friendsListContainer";
import ProfileDataContainer from "./profileComponents/profileData/profileDataContainer";

const Profile = (props) => {
    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileDataContainer state={props.state}/>
                <NewPostContainer state={props.state.profile} dispatch={props.dispatch} />
                <Wall state={props.state.profile} />
            </div>
            <div className={style.rightContainer}>
                <FriendsListContainer state={props.state}/>
            </div>
        </div>
    );
};

export default Profile;