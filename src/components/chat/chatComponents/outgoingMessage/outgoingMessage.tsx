import React from "react"
import style from "./outgoingMessage.module.css"
import { IOutgoingMessage } from "../../../../types/types"


const OutgoingMessage:React.FC<IOutgoingMessage> = ({message,data}) => {
    return (
        <div className={style.container}>
            <span className={style.messageText}>{message}</span>
            <span className={style.data}>{data}</span>
        </div>
    )
}

export default OutgoingMessage