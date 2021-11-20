import React from "react";
import style from "./incomingMessage.module.css";
import Photo from "./img/photo.png"

const IncomingMessage = (props) => {
    return (
        <div className={style.container}>
            <span className={style.messageText}>{props.message}</span>
            <span className={style.data}>{props.data}</span>
            <img className={style.photo} src={Photo} alt="" height={46} width={46}/>
        </div>
    )
};

export default IncomingMessage;