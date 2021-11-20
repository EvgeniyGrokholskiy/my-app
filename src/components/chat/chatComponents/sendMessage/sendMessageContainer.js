import React from "react";
import {sendMessageActionCreator, updateMessageInTextareaActionCreator} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";
import StoreContext from "../../../../StoreContext";


const SendMessageContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                value => {


                    const sendMessage = (newMessage) => {

                        value.dispatch(sendMessageActionCreator(newMessage));
                    };

                    const updateMessageInTextarea = (newMessage) => {

                        value.dispatch(updateMessageInTextareaActionCreator(newMessage));
                    };

                    return (
                        <SendMessage state={value.getState().chatPage}
                                     sendMessage={sendMessage}
                                     updateMessageInTextarea={updateMessageInTextarea} />
                    )
                }
            }
        </StoreContext.Consumer>

    );
};

export default SendMessageContainer;