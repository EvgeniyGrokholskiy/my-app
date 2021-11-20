import React from "react";
import {sendMessageActionCreator, updateMessageInTextareaActionCreator} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";


const SendMessageContainer = (props) => {

    const sendMessage = (newMessage) => {

        props.dispatch(sendMessageActionCreator(newMessage));
    };

    const updateMessageInTextarea = (newMessage) => {

        props.dispatch(updateMessageInTextareaActionCreator(newMessage));
    };

    return (
        <SendMessage state={props.state.chatPage} sendMessage={sendMessage} updateMessageInTextarea={updateMessageInTextarea} />
    );
};

export default SendMessageContainer;