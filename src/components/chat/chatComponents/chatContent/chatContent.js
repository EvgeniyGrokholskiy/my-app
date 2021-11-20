import React, {Fragment} from "react";
import style from "./chatContent.module.css";
import IncomingMessage from "../incomingMessage/incomingMessage";
import OutgoingMessage from "../outgoingMessage/outgoingMessage";

const ChatContent = (props) => {

    const chatMessage = props.state.chatMessageArray;
    const chatName = props.state.activeChatName;

    let chatToRender = chatMessage.map((message) => (message.type === "in") ?
        <IncomingMessage key={message.id} message={message.message}/> :
        <OutgoingMessage key={message.id} message={message.message}/>)

    return (
        <>
            <h6 className={style.header}>Chat with <span
                className={style.chatName}>{chatName ? chatName : "no data!!!"}</span></h6>
            <div className={style.chatting}>

                {chatToRender}

            </div>
        </>
    )
}

export default ChatContent;