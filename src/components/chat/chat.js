import React from "react";
import style from "./chat.module.css";
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat";
import {connect} from "react-redux";
import {sendMessage, setActiveChatName, updateMessageInTextarea} from "../../redux/chatReducer";
import ChatSideBar from "./chatComponents/chatSideBar/chatSideBar";
import ChatContent from "./chatComponents/chatContent/chatContent";
import SendMessage from "./chatComponents/sendMessage/sendMessage";
import {withAuthRedirect} from "../hoc/authRedirect";
import {compose} from "redux";


const Chat = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.sideBar}>
                <ChatSideBar
                    state={props.state}
                    setActiveChatName={props.setActiveChatName}
                />
                <StartNewChat/>
            </div>
            <div className={style.content}>
                <ChatContent
                    chatMessage={props.chatMessage}
                    chatName={props.chatName}
                />
                <SendMessage
                    stateSM={props.stateSM}
                    sendMessage={props.sendMessage}
                    updateMessageInTextarea={props.updateMessageInTextarea}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        state: state.chatPage,
        chatMessage: state.chatPage.chatMessageArray,
        chatName: state.chatPage.activeChatName,
        stateSM: state.chatPage
    }
}

const ChatContainer = compose(
    connect(mapStateToProps,{setActiveChatName, sendMessage,updateMessageInTextarea}),
    withAuthRedirect
)(Chat)

export default ChatContainer;