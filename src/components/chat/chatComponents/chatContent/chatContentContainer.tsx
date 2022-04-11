import {connect} from "react-redux"
import ChatContent from "./chatContent"
import {AppStateType} from "../../../../redux/reduxStore"
import {getActiveChanNameState, getChatMessageArrayState} from "../../../../redux/selectors"
import React from "react";


const mapStateToProps = (state:AppStateType) => {

    return {
        chatMessage: getChatMessageArrayState(state),
        chatName: getActiveChanNameState(state)
    }
}

const ChatContentContainer:React.FC<any> = connect(mapStateToProps, null)(ChatContent)

export default ChatContentContainer