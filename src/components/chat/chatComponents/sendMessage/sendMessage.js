import React, {createRef} from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";


export const SendMessage = (props) => {

    let textAreaComponent = createRef();

    const sendMessage = () => {
        props.sendMessage(textAreaComponent.current.value);
        textAreaComponent.current.value = "";
    }

    return (
        <div className={style.sendMessage}>
            <textarea ref={textAreaComponent} className={style.messageText}
                      placeholder={"Write your message"}></textarea>
            <button className={style.attachBtn}><AttachBtn/></button>
            <button onClick={sendMessage} className={style.sendBtn}><SendBtn/></button>
        </div>
    )
}