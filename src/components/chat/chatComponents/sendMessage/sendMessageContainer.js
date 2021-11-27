import {sendMessage, updateMessageInTextarea} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.chatPage
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessage(newMessage));
        },
        updateMessageInTextarea: (newMessage) => {
            dispatch(updateMessageInTextarea(newMessage));
        }

    }
}*/

const SendMessageContainer = connect(mapStateToProps, {sendMessage, updateMessageInTextarea})(SendMessage)

export default SendMessageContainer;