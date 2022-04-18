import React from "react"
import {connect} from "react-redux"
import FriendsList from "./friendsList"
import {AppStateType} from "../../../../redux/reduxStore"
import {getFriendListState, getIsRefreshState, getViewAll} from "../../../../redux/selectors"
import {setFriendInList, setIsRefresh, setViewAll} from "../../../../redux/friendsListReducer";


const mapStateToProps = (state: AppStateType) => ({
    viewAll: getViewAll(state),
    friends: getFriendListState(state),
    isRefresh: getIsRefreshState(state)
})

const mapDispatchToProps = {
    setViewAll,
    setIsRefresh,
    setFriendInList
}

const FriendsListContainer: React.FC<any> = connect(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer