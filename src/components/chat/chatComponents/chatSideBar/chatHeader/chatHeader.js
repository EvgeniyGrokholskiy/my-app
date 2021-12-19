import React from "react";
import style from "./chatHeader.module.css";
import photo from "./img/photo.png";

const ChatHeader = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.photo} src={photo} alt="" height={52} width={52}/>
            <div className={style.headerContainer}>
                <h6 className={style.header}>{props.name ? props.name : "no data!!!"}</h6>
                <p className={style.lastMessage}>
                    <span>
                        <img className={style.lastMessageAvatar} src={photo} alt=""/>
                    </span>
                    {props.lastMessage ? props.lastMessage : "no data!!!"}
                </p>
            </div>
        </div>
    );
};

export default ChatHeader;