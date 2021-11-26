import {connect} from "react-redux";
import ListOfUsers from "./listOfUsers";
import {
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    showPageActionCreator,
    toFollowActionCreator,
    toUnfollowActionCreator
} from "../../redux/findUsersReducer";


const mapStateToProps = (state) => {
    return (
        {
            findUsers: state.findUsersPage.findUsers,
            currentPage: state.findUsersPage.currentPage,
            totalUsers: state.findUsersPage.totalUsers,
            usersOnPage: state.findUsersPage.usersOnPage,
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

            setUsers: (users, page) => {
                dispatch(setUsersActionCreator(users, page));
            },

            showPage: (page) => {
                dispatch(showPageActionCreator(+page));
            },

            setTotalUsersCount: (totalUsers) => {
                dispatch(setTotalUsersCountActionCreator(totalUsers))
            }
        }
    )
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers)

export default FindUsersContainer;