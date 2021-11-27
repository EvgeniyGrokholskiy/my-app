import {setActiveChatName} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.chatPage
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        setActiveChat: (chatId) => {
            dispatch(setActiveChatName(chatId));
        }
    }
}*/

const ChatSideBarContainer = connect(mapStateToProps,{setActiveChatName})(ChatSideBar)

export default ChatSideBarContainer;