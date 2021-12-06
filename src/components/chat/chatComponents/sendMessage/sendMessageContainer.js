import {sendMessage} from "../../../../redux/chatReducer";
import SendMessage from "./sendMessage";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.chatPage
    };
};

const SendMessageContainer = connect(mapStateToProps, {sendMessage})(SendMessage)

export default SendMessageContainer;