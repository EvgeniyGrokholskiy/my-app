import {connect} from "react-redux";
import {
    getUsers,
    setFollow,
    setUnfollow
} from "../../redux/findUsersReducer";
import React from "react";
import UserCard from "./userCard";
import Loading from "../commons/loading/loading";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(page, this.props.usersOnPage);
    }


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.usersOnPage);
    }



    render() {

        return (
            <>
                {this.props.isFetching ? <Loading/> : <></>}
                <UserCard totalUsers={this.props.totalUsers}
                          usersOnPage={this.props.usersOnPage}
                          currentPage={this.props.currentPage}
                          findUsers={this.props.findUsers}
                          onPageChanged={this.onPageChanged}
                          isFollowingInProgress={this.props.isFollowingInProgress}
                          toUnfollowThunkCreator={this.props.toUnfollowThunkCreator}
                          toFollowThunkCreator={this.props.toFollowThunkCreator}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return (
        {
            findUsers: state.findUsersPage.findUsers,
            currentPage: state.findUsersPage.currentPage,
            totalUsers: state.findUsersPage.totalUsers,
            usersOnPage: state.findUsersPage.usersOnPage,
            isFetching: state.findUsersPage.isFetching,
            isFollowingInProgress: state.findUsersPage.isFollowingInProgress,
        }
    )

}

const FindUsersContainer = connect(mapStateToProps, {
    getUsersThunkCreator: getUsers,
    toUnfollowThunkCreator: setUnfollow,
    toFollowThunkCreator: setFollow,
})(UsersContainer)

export default FindUsersContainer;