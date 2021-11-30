import ChatContent from "./chatContent";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        chatMessage: state.chatPage.chatMessageArray,
        chatName: state.chatPage.activeChatName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const ChatContentContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContent)

export default ChatContentContainer;