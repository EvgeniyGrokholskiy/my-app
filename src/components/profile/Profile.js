import React from "react";
import style from "./profile.module.css"
import {ProfileData} from "./profileComponents/profileData/profileData";
import {NewPost} from "./profileComponents/new_post/new_post";
import {Wall} from "./profileComponents/wall/wall";
import {FriendsList} from "./profileComponents/friendsList/friendsList";

export const Profile = (props) => {
    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileData/>
                <NewPost callback={props.addPost} state={props.state.profile} setNewMessage={props.setNewMessage}/>
                <Wall state={props.state.profile}/>
            </div>
            <div className={style.rightContainer}>
                <FriendsList state={props.state.friendsList}/>
            </div>
        </div>
    );
}