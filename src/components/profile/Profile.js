import React from "react";
import style from "./profile.module.css"
import {ProfileData} from "./profileComponents/profileData/profileData";
import {NewPost} from "./profileComponents/new_post/new_post";
import {Wall} from "./profileComponents/wall/wall";

export const Profile = (props) => {
    return (
        <div className={style.gridContainer}>
            <div className={style.leftContainer}>
                <ProfileData/>
                <NewPost/>
                <Wall wallMessageArray={props.state.wallMessageArray}/>
            </div>
            <div className={style.rightContainer}>

            </div>
        </div>
    );
}