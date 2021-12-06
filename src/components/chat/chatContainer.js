import React from "react";
import style from "./chat.module.css";
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/authRedirect";
import {compose} from "redux";
import ChatContentContainer from "./chatComponents/chatContent/chatContentContainer";
import ChatSideBarContainer from "./chatComponents/chatSideBar/chatSideBarContainer";
import SendMessageContainer from "./chatComponents/sendMessage/sendMessageContainer";


const Chat = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBarContainer/>
                <StartNewChat/>
            </div>
            <div className={style.content}>
                <ChatContentContainer/>
                <SendMessageContainer/>
            </div>
        </div>
    );
};

const ChatContainer = compose(
    connect(null,null),
    withAuthRedirect
)(Chat)

export default ChatContainer;