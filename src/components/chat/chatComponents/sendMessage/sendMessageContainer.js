import {sendMessageActionCreator, updateMessageInTextareaActionCreator} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";
import {connect} from "react-redux";


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