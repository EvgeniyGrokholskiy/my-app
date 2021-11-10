import React from "react";
import style from "./chatHeader.module.css";
import photo from "./img/photo.png";

export const ChatHeader = (props) => {
    return (
      <div className={`${style.wrapper} ${props.active ? style.active : ""}`}>
          <img className={style.photo} src={photo} alt="" height={52} width={52}/>
          <div className={style.headerContainer}>
              <h6 className={style.header}>{props.name ? props.name: "Darlene Black"}</h6>
              <p className={style.lastMessage}><span><img className={style.lastMessageAvatar} src={photo} alt=""/></span>{props.lastMessage ? props.lastMessage : "Hey, how is your project?"}</p>
          </div>
      </div>
    );
}