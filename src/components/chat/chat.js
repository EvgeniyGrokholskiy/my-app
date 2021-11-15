import React from "react";
import style from "./chat.module.css";
import {ChatSideBar} from "./chatComponents/chatSideBar/chatSideBar";
import {StartNewChat} from "./chatComponents/startNewChatBtn/startNewChat";
import {ChatContent} from "./chatComponents/chatContent/chatContent";
import {SendMessage} from "./chatComponents/sendMessage/sendMessage";

export const Chat = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBar state={props.state}/>
                <StartNewChat/>
            </div>
            <div className={style.content}>
                <ChatContent chatMessage={props.state.chatPage.chatMessageArray} chatName={props.state.chatPage.activeChatName}/>
                <SendMessage state={props.state} />
            </div>
        </div>
    );
}