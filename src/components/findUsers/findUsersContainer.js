import {connect} from "react-redux";
import {
    setLoaderActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    showPageActionCreator,
    toFollowActionCreator,
    toUnfollowActionCreator
} from "../../redux/findUsersReducer";
import React from "react";
import axios from "axios";
import UserCard from "./userCard";
import Loading from "./loading";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.setLoader(true);
        this.props.showPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${page}`)
            .then((response) => {
                    console.log(response.data);
                    this.props.setUsers(response.data.items, this.props.currentPage);
                    this.props.setLoader(false);
                }
            )
    }


    componentDidMount() {
        this.props.setLoader(true);
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${this.props.currentPage}`)
            .then((response) => {
                    console.log(response.data.items);
                    this.props.setUsers(response.data.items, this.props.currentPage);
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setLoader(false)
                }
            )
    }

    render() {

        return (
            <>
            {this.props.isFetching ? <Loading />: <></>}
                <UserCard totalUsers={this.props.totalUsers}
                          usersOnPage={this.props.usersOnPage}
                          currentPage={this.props.currentPage}
                          findUsers={this.props.findUsers}
                          onPageChanged={this.onPageChanged}
                          toUnfollow={this.props.toUnfollow}
                          toFollow={this.props.toFollow}

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
            },
            setLoader: (isFetching) => {
                dispatch(setLoaderActionCreator(isFetching))
            },
        }
    )
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default FindUsersContainer;