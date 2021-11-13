import React from "react";
import style from "./friendCard.module.css";
import photo from "./img/photo.png";


export const FriendCard = (props) => {

    return (
        <div className={style.wrapper}>
            <img className={style.photo} src={photo} alt="" height={52} width={52}/>
            <div className={style.headerContainer}>
                <h6 className={style.header}>{props.state.name ? props.state.name : "no data!!!"}</h6>
                <p className={style.lastMessage}>
                    <span>
                        <img className={style.lastMessageAvatar} src={photo} alt=""/>
                    </span>{props.state.job ? props.state.job : "no data!!!"}
                </p>
            </div>
        </div>
    );
}