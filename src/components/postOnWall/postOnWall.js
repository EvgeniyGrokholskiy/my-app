import React from "react";
import style from "./postOnWall.module.css";
import avatar from "./img/photo.png";
import {ReactComponent as LikeBtn} from "./img/thumbsUp.svg";
// import {ReactComponent as LikeBtnClicked} from "./img/thumbsUpClicked.svg";

export const PostOnWall = (props) => {
    return (
        <div className={style.post_on_wall__wrapper}>
            <div className={style.post_on_wall__card}>
                <img className={style.post_on_wall__avatar} src={avatar} alt="" width={"80"} height={"80"}/>
                <p className={style.post_on_wall__text}>{props.message}</p>
            </div>
            <LikeBtn className={style.post_on_wall__likeBtn} />
            <span className={style.post_on_wall__likeCount}>{props.likeCount}</span>
        </div>
    );
}