import React from "react";
import style from "./chatSideBar.module.css";
import "./chatSidebar.css";
import {ChatHeader} from "./chatHeader/chatHeader";
import {NavLink} from "react-router-dom";

let chats = [
    {name:'Darlene Black', id:'1', lastMessage: 'Hey, how is your project?',},
    {name:'Theresa Steward', id:'2', lastMessage: 'Hi, Dmitry! I have a work for you. We',},
    {name:'Brandon Wilson', id:'3', lastMessage: 'I am Russian and I am learning Engl',},
    {name:'Kyle Fisher', id:'4', lastMessage: 'So, It’s up to you!',},
    {name:'Audrey Alexander', id:'5', lastMessage: 'When you got it?',},
    {name:'Design Conference', id:'6', lastMessage: 'Can you guys help me with it?',},
];

let chatsToRender = chats.map( (chat) => {
    return (
        <NavLink className={`${style.link} chatLink`} to={`/chat/${chat.id}`}>
            <ChatHeader name = {`${chat.name}`} lastMessage ={`${chat.lastMessage}`}/>
        </NavLink>
    );
})

export const ChatSideBar = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.header}>CHATS</p>

            {chatsToRender}

        </div>
    )
}