import React from "react";
import style from "./chatSideBar.module.css";
import "./chatSidebar.css";
import {ChatHeader} from "./chatHeader/chatHeader";
import {NavLink} from "react-router-dom";
import {setActiveChatNameActionCreator} from "../../../../redux/chatReducer";


export const ChatSideBar = (props) => {

    const setActiveChat = (event) => {

        props.dispatch(setActiveChatNameActionCreator(event.currentTarget.dataset.number));
    }

    let chatsToRender = props.state.chatsList.map((chat) => {

        return (
            <NavLink onClick={setActiveChat} key={chat.id} data-number={chat.id} className={`${style.link} chatLink`} to={`/chat/${chat.id}`}>
                <ChatHeader  name={`${chat.name}`} lastMessage={`${chat.lastMessage}`}/>
            </NavLink>
        );
    });

    return (
        <div className={style.wrapper}>
            <p className={style.header}>CHATS</p>

            {chatsToRender}

        </div>
    );
};