import React from "react";
import style from "./chatContent.module.css";
import {ReactComponent as AttachBtn} from "./img/paperclip.svg";
import {ReactComponent as SendBtn} from "./img/send_icon.svg";
import {IncomingMessage} from "../incomingMessage/incomingMessage";
import {OutgoingMessage} from "../outgoingMessage/outgoingMessage";



export const ChatContent = (props) => {
    return (
        <div className={style.container}>
            <h6 className={style.header}>Chat with <span className={style.chatName}>{props.chatName ? props.chatName: "no data!!!" }</span></h6>
            <div className={style.chatting}>
                <IncomingMessage message = "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!" />
                <OutgoingMessage message = "Hi, Kyle. How are you doing? Did you get that job yesterday?" />
                <IncomingMessage message = "Nope, they kicked me out of the office!" />
                <OutgoingMessage message = "Wow! I can invite you in my new project. We need a product designer right now!" />
                <IncomingMessage message = "It’ll be great! I need this job, but..." />
                <IncomingMessage message = "So, it’s up to you!" />
            </div>
            <div className={style.sendMessage}>
                <textarea className={style.messageText} placeholder={"Write your message"}></textarea>
                <button className={style.attachBtn}><AttachBtn /></button>
                <button className={style.sendBtn}><SendBtn /></button>
            </div>

        </div>
    )
}