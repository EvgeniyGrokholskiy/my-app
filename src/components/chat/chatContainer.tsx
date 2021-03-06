import React from "react"
import {connect} from "react-redux"
import style from "./chat.module.css"
import {AppStateType} from "../../redux/reduxStore"
import {withAuthRedirect} from "../hoc/authRedirect"
import StartNewChat from "./chatComponents/startNewChatBtn/startNewChat"
import ChatContentContainer from "./chatComponents/chatContent/chatContentContainer"
import ChatSideBarContainer from "./chatComponents/chatSideBar/chatSideBarContainer"
import SendMessageContainer from "./chatComponents/sendMessage/sendMessageContainer"


const Chat = () => {

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
    )
}

const ChatContainer = connect<null,null,{},AppStateType>(null, null)(withAuthRedirect(Chat))

export default ChatContainer;