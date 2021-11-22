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
            toFollow: (id) => {
                dispatch(toFollowActionCreator(id));
            },

            toUnfollow: (id) => {
                dispatch(toUnfollowActionCreator(id));
            }
        }
    )
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers)

export default FindUsersContainer