import style from "../profileData.module.css";
import React from "react";

const ChangePhotoButton = (props) => {

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <label className={style.changePhotoLabel}> Change main photo
            <input onChange={onMainPhotoSelected} type={"file"} className={style.setPhoto} />
        </label>
    )
}

export default ChangePhotoButton