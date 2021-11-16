import React from "react";
import style from "./chatSideBar.module.css";
import "./chatSidebar.css";
import {ChatHeader} from "./chatHeader/chatHeader";
import {NavLink} from "react-router-dom";

export const ChatSideBar = (props) => {

    const setActiveChat = (event) => {
        props.dispatch(
            {
                type: "SET_ACTIVE_CHAT_NAME",
                activeChatId:event.currentTarget.dataset.number
            });
    }

    let chatsToRender = props.state.chatPage.chatsList.map((chat) => {
        return (
            <NavLink onClick={setActiveChat} key={chat.id} data-number={chat.id} className={`${style.link} chatLink`} to={`/chat/${chat.id}`}>
                <ChatHeader  name={`${chat.name}`} lastMessage={`${chat.lastMessage}`}/>
            </NavLink>
        );
    })

    return (
        <div className={style.wrapper}>
            <p className={style.header}>CHATS</p>

            {chatsToRender}

        </div>
    )
}