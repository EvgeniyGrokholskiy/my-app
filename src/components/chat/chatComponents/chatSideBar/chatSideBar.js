import React from "react";
import style from "./chatSideBar.module.css";
import "./chatSidebar.css";
import {ChatHeader} from "./chatHeader/chatHeader";
import {NavLink} from "react-router-dom";

export const ChatSideBar = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.header}>CHATS</p>
            <NavLink className={`${style.link} chatLink`} to={'/chat/1'}>
                <ChatHeader name = "Darlene Black" lastMessage = "Hey, how is your project?"/>
            </NavLink>
            <NavLink className={`${style.link} chatLink`} to={'/chat/2'}>
                <ChatHeader name = "Theresa Steward" lastMessage = "Hi, Dmitry! I have a work for you. We"/>
            </NavLink>
            <NavLink className={`${style.link} chatLink`} to={'/chat/3'}>
                <ChatHeader name = "Brandon Wilson" lastMessage = "I am Russian and I am learning Engl" />
            </NavLink>
            <NavLink className={`${style.link} chatLink`} to={'/chat/4'}>
                <ChatHeader name = "Kyle Fisher" lastMessage = "So, It’s up to you!" active={true} />
            </NavLink>
            <NavLink className={`${style.link} chatLink`} to={'/chat/5'}>
                <ChatHeader name = "Audrey Alexander" lastMessage = "When you got it?" />
            </NavLink>
            <NavLink className={`${style.link} chatLink`} to={'/chat/6'}>
                <ChatHeader name = "Design Conference" lastMessage = "Can you guys help me with it?" />
            </NavLink>
        </div>
    )
}