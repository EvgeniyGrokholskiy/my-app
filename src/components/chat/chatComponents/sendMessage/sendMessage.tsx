import React, {useState} from "react"
import style from "./sendMessage.module.css"
import {ISendMessageProps} from "../../../../types/types"
import {ReactComponent as SendBtn} from "../chatContent/img/send_icon.svg"
import {ReactComponent as AttachBtn} from "../chatContent/img/paperclip.svg"


const SendMessage: React.FC<ISendMessageProps> = ({sendMessage}) => {

    const [message, setMessage] = useState<string>("")

    const handleSendMessage = () => {
        if (message) {
            sendMessage(message)
            setMessage("")
        }
    }

    return (
        <div className={style.sendMessage}>
            <textarea className={style.messageText} placeholder={"Write your message"} value={message}
                      onChange={(event => {
                          setMessage(event.target.value)
                      })}/>
            <button className={style.attachBtn}><AttachBtn/></button>
            <button className={style.sendBtn} onClick={handleSendMessage}><SendBtn/>
            </button>
        </div>
    )
}

export default SendMessage