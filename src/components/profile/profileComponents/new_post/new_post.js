import React from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";

export const NewPost = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.header}>NEW POST</p>
            <textarea className={style.textArea} placeholder={"What’s on your mind?"}/>
            <SendIcon className={style.send_btn} />
        </div>
    )
}