import {sendMessageActionCreator, updateMessageInTextareaActionCreator} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";
import {connect} from "react-redux";


// const SendMessageContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//
//
//                     const sendMessage = (newMessage) => {
//
//                         value.dispatch(sendMessageActionCreator(newMessage));
//                     };
//
//                     const updateMessageInTextarea = (newMessage) => {
//
//                         value.dispatch(updateMessageInTextareaActionCreator(newMessage));
//                     };
//
//                     return (
//                         <SendMessage state={value.getState().chatPage}
//                                      sendMessage={sendMessage}
//                                      updateMessageInTextarea={updateMessageInTextarea} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// };

const mapStateToProps = (state) => {
    return {
        state: state.chatPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        },
        updateMessageInTextarea: (newMessage) => {
            dispatch(updateMessageInTextareaActionCreator(newMessage));
        }

    }
}
const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage)

export default SendMessageContainer;