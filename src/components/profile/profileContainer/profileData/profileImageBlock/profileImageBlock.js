import React from "react";
import style from "../profileData.module.css";
import photo from "../img/userUnknown.png";
import ChangePhotoButton from "../changePhotoButton/changePhotoButton";

const ProfileImageBlock = (props) => {

    return (
        <div className={style.imageWrapper}>
            <img className={style.image}
                 src={props.state.profile.photos.large ? props.state.profile.photos.large : photo} alt=""/>
            {
                props.auth.id && !props.match ? <ChangePhotoButton savePhoto={props.savePhoto}/> : <></>
            }
        </div>
    )
}

export default ProfileImageBlock;