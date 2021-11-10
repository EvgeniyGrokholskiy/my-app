import React from "react";
import style from "./chat.module.css";
import {ChatSideBar} from "./chatComponents/chatSideBar/chatSideBar";
import {StartNewChat} from "./chatComponents/startNewChatBtn/startNewChat";
import {ChatContent} from "./chatComponents/chatContent/chatContent";

export const Chat = (props) => {
    return (
      <div className={style.chat__wrapper}>
          <div className={style.chat__sideBar}>
              <ChatSideBar />
              <StartNewChat />
          </div>
          <div className={style.chat__content}>
              <ChatContent />
          </div>


      </div>
    );
}