import React from "react"
import {connect} from "react-redux"
import FriendsList from "./friendsList"
import {AppStateType} from "../../../../redux/reduxStore"
import {getFriendListState, getIsRefreshState} from "../../../../redux/selectors"
import {setFriendInList, setIsRefresh} from "../../../../redux/friendsListReducer";


const mapStateToProps = (state: AppStateType) => ({
    friends: getFriendListState(state),
    isRefresh: getIsRefreshState(state)
})

const mapDispatchToProps = {
    setIsRefresh,
    setFriendInList
}

const FriendsListContainer: React.FC<any> = connect(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer