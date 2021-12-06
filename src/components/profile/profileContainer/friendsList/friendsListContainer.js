import FriendsList from "./friendsList";
import {connect} from "react-redux";
import {getFriendListState} from "../../../../redux/selectors";


const mapStateToProps = (state) => {
    return {
        state: getFriendListState(state)
    }
}

const FriendsListContainer = connect(mapStateToProps, null)(FriendsList);

export default FriendsListContainer;