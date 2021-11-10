import React from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";

export const NewPost = (props) => {
    return (
        <div className={style.post__wrapper}>
            <p className={style.post__header}>NEW POST</p>
            <textarea className={style.post__textArea} placeholder={"What’s on your mind?"}/>
            <SendIcon className={style.post__send_btn} />
        </div>
    )
}