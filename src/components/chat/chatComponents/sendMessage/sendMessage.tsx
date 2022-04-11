import React from "react"
import {Field, Form} from 'react-final-form'
import style from "./sendMessage.module.css"
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg";
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg"
import {ISendMessageFormProps, ISendMessageProps} from "../../../../types/types"


const SendMessage: React.FC<ISendMessageProps> = ({sendMessage}) => {

    const handleSendMessage = (data: { newMessage: string }) => {
        if (data.newMessage) sendMessage(data.newMessage);
    }

    return (
        <SendMessageForm sendMessage={handleSendMessage}/>
    )
}


const SendMessageForm: React.FC<ISendMessageFormProps> = ({sendMessage}) => {

    return (
        <Form
            onSubmit={(data) => {
                sendMessage(data)
            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessage">
                        {({input, meta}) => (
                            <div className={style.sendMessage}>
                                <textarea className={style.messageText} {...input} placeholder={"Write your message"}/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                <button className={style.attachBtn}><AttachBtn/></button>
                                <button type={"submit"} className={style.sendBtn}><SendBtn/>
                                </button>
                            </div>
                        )}
                    </Field>

                </form>
            )}
        />
    )
}

export default SendMessage