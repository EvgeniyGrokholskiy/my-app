import React from "react"
import {connect} from "react-redux"
import ChatContent from "./chatContent"
import {AppStateType} from "../../../../redux/reduxStore"
import {getActiveChanNameState, getChatMessageArrayState} from "../../../../redux/selectors"


const mapStateToProps = (state: AppStateType) => ({
    chatMessage: getChatMessageArrayState(state),
    chatName: getActiveChanNameState(state)
})

const ChatContentContainer:React.FC<any> = connect(mapStateToProps, null)(ChatContent)

export default ChatContentContainer