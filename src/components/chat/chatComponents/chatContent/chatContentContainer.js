import React from "react";
import IncomingMessage from "../incomingMessage/incomingMessage";
import OutgoingMessage from "../outgoingMessage/outgoingMessage";
import ChatContent from "./chatContent";
import {connect} from "react-redux";

// const ChatContentContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//
//                     const chatMessage = value.getState().chatPage.chatMessageArray;
//                     const chatName = value.getState().chatPage.activeChatName;
//
//                     let chatToRender = chatMessage.map((message) => (message.type === "in") ?
//                         <IncomingMessage key={message.id} message={message.message} data={message.data}/> :
//                         <OutgoingMessage key={message.id} message={message.message} data={message.data}/>)
//
//                     return(
//                        <ChatContent children={chatToRender} chatName={chatName}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

const mapStateToProps = (state) => {

    const chatMessage = state.chatPage.chatMessageArray;
    const chatName = state.chatPage.activeChatName;

    let chatToRender = chatMessage.map((message) => (message.type === "in") ?
        <IncomingMessage key={message.id} message={message.message} data={message.data}/> :
        <OutgoingMessage key={message.id} message={message.message} data={message.data}/>)

    return {
        children: chatToRender,
        chatName: chatName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const ChatContentContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContent)

export default ChatContentContainer;