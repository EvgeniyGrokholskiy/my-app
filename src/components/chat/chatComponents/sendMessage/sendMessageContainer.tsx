import {connect} from "react-redux"
import SendMessage from "./sendMessage"
import {sendMessage} from "../../../../redux/chatReducer"
import {AppStateType} from "../../../../redux/reduxStore"
import {getChatPageState} from "../../../../redux/selectors"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    state: getChatPageState(state)
})

const mapDispatchToProps = {
    sendMessage
}

const SendMessageContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(SendMessage)

export default SendMessageContainer