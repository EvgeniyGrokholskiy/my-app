import FriendsList from "./friendsList";
import {connect} from "react-redux";


// const FriendsListContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//                     return(
//                         <FriendsList state={value.getState().friendsList}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// }

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