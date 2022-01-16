import React from "react";
import {
    getCurrentPageState,
    getFindUsersState,
    getIsFetchingState,
    getIsFollowingInProgressState,
    getTotalUsersState,
    getUsersOnPageState
} from "../../redux/selectors";
import UserCard from "./userCard";
import {connect} from "react-redux";
import Loading from "../commons/loading/loading";
import {getUsers, setFollow, setUnfollow} from "../../redux/findUsersReducer";


class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.usersOnPage);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props !== nextProps;
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Loading/> :<></>}
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