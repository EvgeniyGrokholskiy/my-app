import {setActiveChatNameActionCreator} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.chatPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveChat: (chatId) => {
            dispatch(setActiveChatNameActionCreator(chatId));
        }
    }
}

const ChatSideBarContainer = connect(mapStateToProps,mapDispatchToProps)(ChatSideBar)

export default ChatSideBarContainer;