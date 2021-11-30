import {connect} from "react-redux";
import Chat from "./chat";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ChatContainer = connect(mapStateToProps ,mapDispatchToProps)(Chat);

export default ChatContainer;