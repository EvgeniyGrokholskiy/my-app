import React from "react";
import style from "./chat.module.css";
import ChatSideBar from "./chatComponents/chatSideBar/chatSideBar";
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat";
import ChatContent from "./chatComponents/chatContent/chatContent";
import SendMessage from "./chatComponents/sendMessage/sendMessage";

const Chat = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBar state={props.state.chatPage} dispatch={props.dispatch} />
                <StartNewChat />
            </div>
            <div className={style.content}>
                <ChatContent state={props.state.chatPage} />
                <SendMessage state={props.state.chatPage} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default Chat;