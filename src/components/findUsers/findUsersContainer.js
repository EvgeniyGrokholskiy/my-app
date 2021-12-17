import {connect} from "react-redux";
import {getUsers, setFollow, setUnfollow} from "../../redux/findUsersReducer";
import React from "react";
import UserCard from "./userCard";
import Loading from "../commons/loading/loading";
import {
    getCurrentPageState,
    getFindUsersState,
    getIsFetchingState,
    getIsFollowingInProgressState,
    getTotalUsersState,
    getUsersOnPageState
} from "../../redux/selectors";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.usersOnPage);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }


    render() {
        const {
            totalUsers, usersOnPage, currentPage, findUsers, isFollowingInProgress,
            setUnfollow, setFollow
        } = this.props
        return (
            <>
                {this.props.isFetching ? <Loading/> : <></>}
                <UserCard totalUsers={totalUsers}
                          usersOnPage={usersOnPage}
                          currentPage={currentPage}
                          findUsers={findUsers}
                          onPageChanged={this.onPageChanged}
                          isFollowingInProgress={isFollowingInProgress}
                          setUnfollow={setUnfollow}
                          setFollow={setFollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            //findUsers: getFindUsersStateRESELECT(state), используется при использовании сложной логики в селекторе, что бы оптимизировать рендеринг
            findUsers: getFindUsersState(state),
            currentPage: getCurrentPageState(state),
            totalUsers: getTotalUsersState(state),
            usersOnPage: getUsersOnPageState(state),
            isFetching: getIsFetchingState(state),
            isFollowingInProgress: getIsFollowingInProgressState(state),
        }
    )
}

const FindUsersContainer = connect(mapStateToProps, {
    getUsers,
    setUnfollow,
    setFollow,
})(UsersContainer)

export default FindUsersContainer;