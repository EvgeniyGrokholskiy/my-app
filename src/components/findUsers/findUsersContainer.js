import {connect} from "react-redux";
import {
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    showPageActionCreator,
    toFollowActionCreator,
    toUnfollowActionCreator
} from "../../redux/findUsersReducer";
import React from "react";
import axios from "axios";
import UserCard from "./userCard";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.showPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${page}`)
            .then((response) => {
                    console.log(response.data);
                    this.props.setUsers(response.data.items, this.props.currentPage);
                }
            )
    }


    componentDidMount() {
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${this.props.currentPage}`)
            .then((response) => {
                    console.log(response.data.items);
                    this.props.setUsers(response.data.items, this.props.currentPage);
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    render() {

        return (
            <UserCard totalUsers={this.props.totalUsers}
                      usersOnPage={this.props.usersOnPage}
                      currentPage={this.props.currentPage}
                      findUsers={this.props.findUsers}
                      onPageChanged={this.onPageChanged}
                      toUnfollow={this.props.toUnfollow}
                      toFollow={this.props.toFollow}

            />
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


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default FindUsersContainer;