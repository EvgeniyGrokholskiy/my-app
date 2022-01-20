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
import {FollowUnfollowFunctionType, UsersArrayItemType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    usersOnPage: number
    currentPage: number
    isFetching: boolean
    totalUsers: number
    findUsers: Array<UsersArrayItemType>
    setFollow: FollowUnfollowFunctionType
    setUnfollow: FollowUnfollowFunctionType
    getUsers: (page:number, usersOnPage:number) => void
    isFollowingInProgress: Array<number>
}

class UsersContainer extends React.Component<PropsType> {

    onPageChanged = (page:number) => {
        this.props.getUsers(page, this.props.usersOnPage);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    shouldComponentUpdate(nextProps:PropsType) {
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

const mapStateToProps = (state:AppStateType) => {
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

// @ts-ignore
const FindUsersContainer = connect(mapStateToProps, {getUsers,setUnfollow,setFollow,})(UsersContainer)

export default FindUsersContainer;