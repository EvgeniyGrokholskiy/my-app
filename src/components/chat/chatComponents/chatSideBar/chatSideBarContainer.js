import {setActiveChatName} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";
import {connect} from "react-redux";
import {getChatPageState} from "../../../../redux/selectors";


const mapStateToProps = (state) => {
    return {
        state: getChatPageState(state)
    };
};

const ChatSideBarContainer = connect(mapStateToProps,{setActiveChatName})(ChatSideBar)

export default ChatSideBarContainer;