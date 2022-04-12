import React, {ChangeEvent} from "react"
import style from "../profileData.module.css"
import {IChangePhotoButtonProps} from "../../../../../types/types"


const ChangePhotoButton: React.FC<IChangePhotoButtonProps> = ({savePhoto}) => {

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            savePhoto(event.target.files[0])
        }
    }

    return (
        <label className={`${style.changePhotoLabel} ${style.button}`}> Change main photo
            <input onChange={onMainPhotoSelected} type={"file"} className={style.setPhoto}/>
        </label>
    )
}

export default ChangePhotoButton