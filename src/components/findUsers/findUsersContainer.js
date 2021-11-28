import {connect} from "react-redux";
import {
    followingInProgress,
    setLoader,
    setTotalUsersCount,
    setUsers,
    showPage,
    toFollow,
    toUnfollow
} from "../../redux/findUsersReducer";
import React from "react";
import UserCard from "./userCard";
import Loading from "./loading";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.setLoader(true);
        this.props.showPage(page);

        usersAPI.getUsers(page, this.props.usersOnPage)
            .then((data) => {

                    this.props.setUsers(data.items, this.props.currentPage);
                    this.props.setLoader(false);
                }
            )
    }


    componentDidMount() {

        this.props.setLoader(true);

        usersAPI.getUsers(this.props.currentPage, this.props.usersOnPage)
            .then((data) => {

                    this.props.setUsers(data.items, this.props.currentPage);
                    this.props.setTotalUsersCount(data.totalCount)
                    this.props.setLoader(false)
                }
            )
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
                          toUnfollow={this.props.toUnfollow}
                          toFollow={this.props.toFollow}
                          followingInProgress={this.props.followingInProgress}
                          isFollowingInProgress={this.props.isFollowingInProgress}


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

/*const mapDispatchToProps = (dispatch) => {
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
            },
            setLoader: (isFetching) => {
                dispatch(setLoaderActionCreator(isFetching))
            },
        }
    )
}*/


const FindUsersContainer = connect(mapStateToProps, {
    toFollow,
    toUnfollow,
    setUsers,
    showPage,
    setTotalUsersCount,
    setLoader,
    followingInProgress,
})(UsersContainer)

export default FindUsersContainer;