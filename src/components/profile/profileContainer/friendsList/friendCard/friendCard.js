import React from "react";
import photo from "./img/photo.png";
import style from "./friendCard.module.css";


const FriendCard = ({name, job}) => {

    return (
        <div className={style.wrapper}>
            <img className={style.photo} src={photo} alt="" height={52} width={52}/>
            <div className={style.headerContainer}>
                <h6 className={style.header}>{name ? name : "no data!!!"}</h6>
                <p className={style.lastMessage}>
                    <span>
                        <img className={style.lastMessageAvatar} src={photo} alt=""/>
                    </span>{job ? job : "no data!!!"}
                </p>
            </div>
        </div>
    );
};

export default FriendCard;