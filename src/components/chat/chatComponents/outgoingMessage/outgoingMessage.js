import React from "react";
import style from "./outgoingMessage.module.css";

export const OutgoingMessage = (props) => {
    return (
        <div className={style.container}>
            <span className={style.messageText}>{props.message ? props.message : "no data!!!"}</span>
            <span className={style.data}>{"new Date()"}</span>
        </div>
    );
}