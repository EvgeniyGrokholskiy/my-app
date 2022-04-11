import {connect} from "react-redux"
import SendMessage from "./sendMessage"
import {sendMessage} from "../../../../redux/chatReducer"
import {AppStateType} from "../../../../redux/reduxStore"
import {getChatPageState} from "../../../../redux/selectors"


const mapStateToProps = (state: AppStateType) => ({
    state: getChatPageState(state)
})

const SendMessageContainer = connect(mapStateToProps, {sendMessage})(SendMessage)

export default SendMessageContainer