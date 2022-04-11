import {connect} from "react-redux"
import FriendsList from "./friendsList"
import {AppStateType} from "../../../../redux/reduxStore"
import {getFriendListState} from "../../../../redux/selectors"


const mapStateToProps = (state: AppStateType) => {

    return {
        friends: getFriendListState(state)
    }
}

const FriendsListContainer = connect(mapStateToProps, null)(FriendsList)

export default FriendsListContainer