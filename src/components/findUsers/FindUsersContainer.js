import React from "react";

import {connect} from "react-redux";
import ListOfUsers from "./listOfUsers";
import {toFollowActionCreator, toUnfollowActionCreator} from "../../redux/findUsersReducer";


const mapStateToProps = (state) => {
    return (
        {
            findUsersPage: state.findUsersPage
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
            }
        }
    )
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers)

export default FindUsersContainer;