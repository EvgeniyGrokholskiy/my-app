import React from "react"
import {connect} from "react-redux"
import FriendsList from "./friendsList"
import {AppStateType} from "../../../../redux/reduxStore"
import {getFriendListState, getIsRefreshState, getViewAll} from "../../../../redux/selectors"
import {setFriendInList, setIsRefresh, setViewAll} from "../../../../redux/friendsListReducer";

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

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

const FriendsListContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer