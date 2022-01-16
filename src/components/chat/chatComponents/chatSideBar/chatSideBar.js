import React from "react";
import "./chatSidebar.css";
import {NavLink} from "react-router-dom";
import style from "./chatSideBar.module.css";
import ChatHeader from "./chatHeader/chatHeader";


const ChatSideBar = ({chatsList,setActiveChatName}) => {

    let chatsToRender = chatsList.map((chat) => {

        const setActiveChat = () => setActiveChatName(chat.id)

        return (
            <NavLink onClick={setActiveChat} key={chat.id} className={`${style.link} chatLink`} to={`/chat/${chat.id}`}>
                <ChatHeader  name={`${chat.name}`} lastMessage={`${chat.lastMessage}`}/>
            </NavLink>
        );
    });

    return (
        <div className={style.wrapper}>
            <p className={style.header}>CHATS</p>
            {
                chatsToRender
            }
        </div>
    );
};

export default ChatSideBar;