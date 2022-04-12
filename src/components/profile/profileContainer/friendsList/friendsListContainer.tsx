import React from "react"
import {connect} from "react-redux"
import FriendsList from "./friendsList"
import {AppStateType} from "../../../../redux/reduxStore"
import {getFriendListState} from "../../../../redux/selectors"


const mapStateToProps = (state: AppStateType) => ({
    friends: getFriendListState(state)
})

const FriendsListContainer: React.FC<any> = connect(mapStateToProps, null)(FriendsList)

export default FriendsListContainer