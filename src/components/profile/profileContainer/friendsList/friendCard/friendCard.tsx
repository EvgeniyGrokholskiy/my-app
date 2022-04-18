import React from "react"
import photo from "./img/photo.png"
import style from "./friendCard.module.css"
import {IFriendCardProps} from "../../../../../types/types"


const FriendCard: React.FC<IFriendCardProps> = ({name, photos, viewAll}) => {

    return (
        <div className={`${viewAll && style.wrapper_width} ${style.wrapper}`}>
            <img className={style.photo} src={photos.large ? photos.large : photo} alt="" height={52} width={52}/>
            <div className={style.headerContainer}>
                <h6 className={style.header}>{name ? name : "no data!!!"}</h6>
                <p className={style.lastMessage}>
                    <span>
                        <img className={style.lastMessageAvatar} src={photos.small ? photos.small : photo} alt=""/>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default FriendCard