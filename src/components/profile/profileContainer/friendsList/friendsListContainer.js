import {connect} from "react-redux";
import FriendsList from "./friendsList";
import {getFriendListState} from "../../../../redux/selectors";


const mapStateToProps = (state) => {

    return {
        friends: getFriendListState(state)
    }
}

const FriendsListContainer = connect(mapStateToProps, null)(FriendsList);

export default FriendsListContainer;