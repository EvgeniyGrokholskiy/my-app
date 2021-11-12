import React from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";



export const SendMessage = (props) => {
    return (
        <div className={style.sendMessage}>
            <textarea className={style.messageText} placeholder={"Write your message"}></textarea>
            <button className={style.attachBtn}><AttachBtn /></button>
            <button className={style.sendBtn}><SendBtn /></button>
        </div>
    )
}