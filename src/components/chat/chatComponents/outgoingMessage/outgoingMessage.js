import React from "react";
import style from "./outgoingMessage.module.css";

const OutgoingMessage = (props) => {
    return (
        <div className={style.container}>
            <span className={style.messageText}>{props.message}</span>
            <span className={style.data}>{props.data}</span>
        </div>
    );
};

export default OutgoingMessage;