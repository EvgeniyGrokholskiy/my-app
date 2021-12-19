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
        console.log("render FU");

        return (
            <>
                {this.props.isFetching ? <Loading/> : <></>}
                <UserCard {...this.props} onPageChanged={this.onPageChanged}/>
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