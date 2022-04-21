import {connect} from "react-redux"
import ChatContent from "./chatContent"
import {AppStateType} from "../../../../redux/reduxStore"
import {getActiveChanNameState, getChatMessageArrayState} from "../../../../redux/selectors"

type TMapStateToProps = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    chatMessage: getChatMessageArrayState(state),
    chatName: getActiveChanNameState(state)
})

const ChatContentContainer = connect<TMapStateToProps, null, any, AppStateType>(mapStateToProps, null)(ChatContent)

export default ChatContentContainer