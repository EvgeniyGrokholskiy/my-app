import {connect} from "react-redux"
import ChatSideBar from "./chatSideBar"
import {getChatList} from "../../../../redux/selectors"
import {AppStateType} from "../../../../redux/reduxStore"
import {setActiveChatName} from "../../../../redux/chatReducer"


const mapStateToProps = (state: AppStateType) => ({
    chatsList: getChatList(state)
})

const ChatSideBarContainer = connect(mapStateToProps,{setActiveChatName})(ChatSideBar)

export default ChatSideBarContainer