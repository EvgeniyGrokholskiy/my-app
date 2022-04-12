import React from "react"
import photo from "../img/userUnknown.png"
import style from "../profileData.module.css"
import {IProfileImageBlockProps} from "../../../../../types/types"
import ChangePhotoButton from "../changePhotoButton/changePhotoButton"


const ProfileImageBlock: React.FC<IProfileImageBlockProps> = ({
                                                                  state,
                                                                  auth,
                                                                  match,
                                                                  savePhoto
                                                              }) => {

    return (
        <div className={style.imageWrapper}>
            {
                state.profile.photos && <img className={style.image}
                                             src={state.profile.photos.large ? state.profile.photos.large : photo}
                                             alt=""/>
            }
            {
                auth.id && !match ? <ChangePhotoButton savePhoto={savePhoto}/> : <></>
            }
        </div>
    )
}

export default ProfileImageBlock;