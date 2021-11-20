import React from "react";
import IncomingMessage from "../incomingMessage/incomingMessage";
import OutgoingMessage from "../outgoingMessage/outgoingMessage";
import StoreContext from "../../../../StoreContext";
import ChatContent from "./chatContent";

const ChatContentContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                value => {

                    const chatMessage = value.getState().chatPage.chatMessageArray;
                    const chatName = value.getState().chatPage.activeChatName;

                    let chatToRender = chatMessage.map((message) => (message.type === "in") ?
                        <IncomingMessage key={message.id} message={message.message} data={message.data}/> :
                        <OutgoingMessage key={message.id} message={message.message} data={message.data}/>)

                    return(
                       <ChatContent children={chatToRender} chatName={chatName}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default ChatContentContainer;