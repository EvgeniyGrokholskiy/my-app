import React from "react";
import style from "./chat.module.css";
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat";
import ChatContent from "./chatComponents/chatContent/chatContent";
import ChatSideBarContainer from "./chatComponents/chatSideBar/chatSideBarContainer";
import SendMessageContainer from "./chatComponents/sendMessage/sendMessageContainer";

const Chat = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBarContainer state={props.state} dispatch={props.dispatch} />
                <StartNewChat />
            </div>
            <div className={style.content}>
                <ChatContent state={props.state.chatPage} />
                <SendMessageContainer state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default Chat;