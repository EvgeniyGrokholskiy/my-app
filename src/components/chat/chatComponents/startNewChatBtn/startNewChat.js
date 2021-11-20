import React from "react";
import style from "./startNewChatBtn.module.css";

const StartNewChat = () => {
    return (
        <div className={style.wrapper}>
            <button className={style.startBtn}>START NEW CHAT</button>
        </div>
    )
}

export default StartNewChat;