import {connect} from "react-redux"
import ChatSideBar from "./chatSideBar"
import {getChatList} from "../../../../redux/selectors"
import {AppStateType} from "../../../../redux/reduxStore"
import {setActiveChatName} from "../../../../redux/chatReducer"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    chatsList: getChatList(state)
})

const mapDispatchToProps = {
    setActiveChatName
}

const ChatSideBarContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, {setActiveChatName})(ChatSideBar)

export default ChatSideBarContainer