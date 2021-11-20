import React from "react";
import {setActiveChatNameActionCreator} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";


const ChatSideBarContainer = (props) => {

    const setActiveChat = (chatId) => {

        props.dispatch(setActiveChatNameActionCreator(chatId));
    }


    return (
        <ChatSideBar setActiveChat={setActiveChat} state={props.state.chatPage} />
    );
};

export default ChatSideBarContainer;