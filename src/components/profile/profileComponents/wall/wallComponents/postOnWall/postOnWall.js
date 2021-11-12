import React from "react";
import style from "./postOnWall.module.css";
import avatar from "./img/photo.png";
import {ReactComponent as LikeBtn} from "./img/thumbsUp.svg";
// import {ReactComponent as LikeBtnClicked} from "./img/thumbsUpClicked.svg";

export const PostOnWall = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <img className={style.avatar} src={avatar} alt="" width={"80"} height={"80"}/>
                <p className={style.text}>{props.message}</p>
            </div>
            <LikeBtn className={style.likeBtn} />
            <span className={style.likeCount}>{props.likeCount}</span>
        </div>
    );
}