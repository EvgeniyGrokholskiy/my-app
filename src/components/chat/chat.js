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
              <ChatSideBar />
              <StartNewChat />
          </div>
          <div className={style.content}>
                  <ChatContent chatName = "Kyle Fisher" />
                  <SendMessage />
          </div>
      </div>
    );
}