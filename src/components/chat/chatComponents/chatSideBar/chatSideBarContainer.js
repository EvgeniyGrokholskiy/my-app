import {setActiveChatNameActionCreator} from "../../../../redux/chatReducer";
import ChatSideBar from "./chatSideBar";
import {connect} from "react-redux";


// const ChatSideBarContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//
//                     const setActiveChat = (chatId) => {
//
//                         value.dispatch(setActiveChatNameActionCreator(chatId));
//                     }
//
//                     return (
//                         <ChatSideBar setActiveChat={setActiveChat} state={value.getState().chatPage} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };

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