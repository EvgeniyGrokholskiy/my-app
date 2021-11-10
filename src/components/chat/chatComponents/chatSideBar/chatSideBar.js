import React from "react";
import style from "./chatSideBar.module.css";
import {ChatHeader} from "./chatHeader/chatHeader";

export const ChatSideBar = (props) => {
    return (
        <div className={style.chatSideBar__wrapper}>
            <p className={style.chatSideBar__header}>CHATS</p>
            <ChatHeader name = "Darlene Black" lastMessage = "Hey, how is your project?"/>
            <ChatHeader name = "Theresa Steward" lastMessage = "Hi, Dmitry! I have a work for you. We"/>
            <ChatHeader name = "Brandon Wilson" lastMessage = "I am Russian and I am learning Engl" />
            <ChatHeader name = "Kyle Fisher" lastMessage = "So, It’s up to you!" active={true} />
            <ChatHeader name = "Audrey Alexander" lastMessage = "When you got it?" />
            <ChatHeader name = "Design Conference" lastMessage = "Can you guys help me with it?" />
        </div>
    )
}