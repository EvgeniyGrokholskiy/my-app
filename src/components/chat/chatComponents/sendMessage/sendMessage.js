import React from "react";
import style from "./sendMessage.module.css";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg";
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";
import {Field, Form} from 'react-final-form'


const SendMessage = (props) => {

    const sendMessage = (data) => {

        if (data.newMessage) props.sendMessage(data.newMessage);
    };
    return (
        <SendMessageForm sendMessage={sendMessage}/>
    );
};


const SendMessageForm = (props) => {
    return (
        <Form
            onSubmit={(data) => {
                props.sendMessage(data)
            }}
            validate={(data) => {}}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessage">
                        {({input, meta}) => (
                            <div className={style.sendMessage}>
                                <textarea className={style.messageText} {...input} placeholder={"Write your message"}/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                <button className={style.attachBtn}><AttachBtn/></button>
                                <button type={"submit"} className={style.sendBtn}><SendBtn/></button>
                            </div>
                        )}
                    </Field>

                </form>
            )}
        />
    )
}

export default SendMessage;