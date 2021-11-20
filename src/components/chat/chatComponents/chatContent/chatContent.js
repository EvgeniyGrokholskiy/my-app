import React from "react";
import style from "./chatContent.module.css";

const ChatContent = (props) => {

    return (
        <>
            <h6 className={style.header}>Chat with <span
                className={style.chatName}>{props.chatName ? props.chatName : "no data!!!"}</span></h6>
            <div className={style.chatting}>

                {props.children}

            </div>
        </>
    )
}

export default ChatContent;