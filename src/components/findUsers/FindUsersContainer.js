import {connect} from "react-redux";
import ListOfUsers from "./listOfUsers";
import {setUsersActionCreator, toFollowActionCreator, toUnfollowActionCreator} from "../../redux/findUsersReducer";


const mapStateToProps = (state) => {
    return (
        {
            findUsers: state.findUsersPage.findUsers
        }
    )

}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            toFollow: (userID) => {
                dispatch(toFollowActionCreator(userID));
            },

            toUnfollow: (userID) => {
                dispatch(toUnfollowActionCreator(userID));
            },

            setUsers: (users) => {
                dispatch(setUsersActionCreator(users));
            }
        }
    )
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers)

export default FindUsersContainer;