import React from "react";
import {ProfileData} from "./profileComponents/profileData/profileData";
import {NewPost} from "./profileComponents/new_post/new_post";
import {Wall} from "./profileComponents/wall/wall";


export const Profile = (props) => {
    return (
        <>
        <ProfileData />
        <NewPost />
        <Wall />
        </>
    );
}