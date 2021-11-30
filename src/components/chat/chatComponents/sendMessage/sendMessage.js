import React from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";


const SendMessage = (props) => {

    const sendMessage = (event) => {

        const newMessage = event.currentTarget.parentElement.firstChild.value;

        if (newMessage) props.sendMessage(newMessage);
    };

    const updateMessageInTextarea = (event) => {

        const newMessage = event.currentTarget.value;

        props.updateMessageInTextarea(newMessage);
    };

    return (
        <div className={style.sendMessage}>
            <textarea onChange={updateMessageInTextarea} className={style.messageText}
                      placeholder={"Write your message"} value={props.stateSM.newMessage}/>
            <button className={style.attachBtn}><AttachBtn /></button>
            <button onClick={sendMessage} className={style.sendBtn}><SendBtn /></button>
        </div>
    );
};

export default SendMessage;