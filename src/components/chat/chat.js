import React from "react";
import style from "./chat.module.css";
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat";
import ChatSideBarContainer from "./chatComponents/chatSideBar/chatSideBarContainer";
import SendMessageContainer from "./chatComponents/sendMessage/sendMessageContainer";
import ChatContentContainer from "./chatComponents/chatContent/chatContentContainer";

const Chat = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBarContainer/>
                <StartNewChat />
            </div>
            <div className={style.content}>
                <ChatContentContainer />
                <SendMessageContainer />
            </div>
        </div>
    );
};

export default Chat;