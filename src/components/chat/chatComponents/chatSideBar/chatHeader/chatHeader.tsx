import React from "react"
import photo from "./img/photo.png"
import style from "./chatHeader.module.css"
import {IChatHeaderProps} from "../../../../../types/types"


const ChatHeader: React.FC<IChatHeaderProps> = ({name, lastMessage}) => {
    return (
        <div className={style.wrapper}>
            <img className={style.photo} src={photo} alt="" height={52} width={52}/>
            <div className={style.headerContainer}>
                <h6 className={style.header}>{name ? name : "no data!!!"}</h6>
                <p className={style.lastMessage}>
                    <span>
                        <img className={style.lastMessageAvatar} src={photo} alt=""/>
                    </span>
                    {lastMessage ? lastMessage : "no data!!!"}
                </p>
            </div>
        </div>
    )
}

export default ChatHeader