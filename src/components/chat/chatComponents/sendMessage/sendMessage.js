import React, {createRef} from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";
import {sendMessageActionCreator, updateMessageInTextareaActionCreator} from "../../../../redux/store";


export const SendMessage = (props) => {

    let textAreaComponent = createRef();

    const sendMessage = () => {

        const newMessage = textAreaComponent.current.value;

        props.dispatch(sendMessageActionCreator(newMessage));
    }

    const updateMessageInTextarea = (event) => {

        const newMessage = event.currentTarget.value;

        props.dispatch(updateMessageInTextareaActionCreator(newMessage));
    }

    return (
        <div className={style.sendMessage}>
            <textarea onChange={updateMessageInTextarea} ref={textAreaComponent} className={style.messageText}
                      placeholder={"Write your message"} value={props.state.newMessage}/>
            <button className={style.attachBtn}><AttachBtn /></button>
            <button onClick={sendMessage} className={style.sendBtn}><SendBtn /></button>
        </div>
    )
}