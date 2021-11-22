import FriendsList from "./friendsList";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.friendsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;