import React, {Fragment} from "react";
import style from "./chatContent.module.css";
import {IncomingMessage} from "../incomingMessage/incomingMessage";
import {OutgoingMessage} from "../outgoingMessage/outgoingMessage";

export const ChatContent = (props) => {

    let chatToRender = props.chatMessage.map((message) => (message.type === "in") ?
        <IncomingMessage key={message.id} message={message.message}/> :
        <OutgoingMessage key={message.id} message={message.message}/>)

    return (
        <>
            <h6 className={style.header}>Chat with <span
                className={style.chatName}>{props.chatName ? props.chatName : "no data!!!"}</span></h6>
            <div className={style.chatting}>

                {chatToRender}

            </div>
        </>
    )
}