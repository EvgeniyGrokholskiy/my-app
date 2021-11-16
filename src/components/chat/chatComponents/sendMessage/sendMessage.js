import React, {createRef} from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";


export const SendMessage = (props) => {

    let textAreaComponent = createRef();

    const sendMessage = () => {

        const newMessage = textAreaComponent.current.value;

        props.dispatch(
            {
                type: "SEND_MESSAGE_IN_CHAT",
                message: newMessage,
            });
    }

    const setNewMessage = (event) => {
        props.dispatch(
            {
                type:"CHANGE_NEW_MESSAGE_IN_CHAT",
                message:event.currentTarget.value
            });
    }

    return (
        <div className={style.sendMessage}>
            <textarea onChange={setNewMessage} ref={textAreaComponent} className={style.messageText}
                      placeholder={"Write your message"} value={props.state.chatPage.newMessage}/>
            <button className={style.attachBtn}><AttachBtn /></button>
            <button onClick={sendMessage} className={style.sendBtn}><SendBtn /></button>
        </div>
    )
}