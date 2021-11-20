import React from "react";
import {setActiveChatNameActionCreator} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";
import StoreContext from "../../../../StoreContext";


const ChatSideBarContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
                value => {

                    const setActiveChat = (chatId) => {

                        value.dispatch(setActiveChatNameActionCreator(chatId));
                    }

                    return (
                        <ChatSideBar setActiveChat={setActiveChat} state={value.getState().chatPage} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default ChatSideBarContainer;