import ChatContent from "./chatContent";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    const chatMessage = state.chatPage.chatMessageArray;
    const chatName = state.chatPage.activeChatName;

    return {
        chatMessage: chatMessage,
        chatName: chatName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const ChatContentContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContent)

export default ChatContentContainer;