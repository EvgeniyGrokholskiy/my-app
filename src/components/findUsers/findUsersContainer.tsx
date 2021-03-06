import React from "react"
import UserCard from "./userCard"
import {connect} from "react-redux"
import Loading from "../commons/loading/loading"
import {AppStateType} from "../../redux/reduxStore"
import {IUsersContainerProps} from "../../types/types"
import {getUsers, setFollow, setUnfollow} from "../../redux/findUsersReducer"
import {
    getCurrentPageState,
    getFindUsersState,
    getIsFetchingState,
    getIsFollowingInProgressState,
    getTotalUsersState,
    getUsersOnPageState
} from "../../redux/selectors"


class UsersContainer extends React.Component<IUsersContainerProps> {

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.usersOnPage);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    shouldComponentUpdate(nextProps: IUsersContainerProps) {
        return this.props !== nextProps;
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Loading/> : <></>}
                <UserCard {...this.props} onPageChanged={this.onPageChanged}/>
            </>
        )
    }
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    //findUsers: getFindUsersStateRESELECT(state), используется при использовании сложной логики в селекторе, что бы оптимизировать рендеринг
    findUsers: getFindUsersState(state),
    currentPage: getCurrentPageState(state),
    totalUsers: getTotalUsersState(state),
    usersOnPage: getUsersOnPageState(state),
    isFetching: getIsFetchingState(state),
    isFollowingInProgress: getIsFollowingInProgressState(state),
})

const mapDispatchToProps = {
    getUsers,
    setFollow,
    setUnfollow,
}


const FindUsersContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)


export default FindUsersContainer