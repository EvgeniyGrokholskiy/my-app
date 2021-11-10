import React from "react";
import style from "./chatContent.module.css";
import {ReactComponent as AttachBtn} from "./img/paperclip.svg";
import {ReactComponent as SendBtn} from "./img/send_icon.svg";



export const ChatContent = (props) => {
    return (
        <div className={style.container}>
            <h6 className={style.header}>Chat with <span className={style.chatName}>{props.chatName ? props.chatName: "Kyle Fisher" }</span></h6>
            <div className={style.chatting}>

            </div>
            <div className={style.sendMessage}>
                <textarea className={style.messageText} placeholder={"Write your message"}></textarea>
                <button className={style.attachBtn}><AttachBtn /></button>
                <button className={style.sendBtn}><SendBtn /></button>
            </div>

        </div>
    )
}