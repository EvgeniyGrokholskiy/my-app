import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {IAuthProps} from "../../../types/types"
import {AppStateType} from "../../../redux/reduxStore"
import {logoutThunkCreator} from "../../../redux/authReducer"
import {getAuthLogin, getIsAuthState} from "../../../redux/selectors"


class Auth extends React.Component<IAuthProps> {

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}
                    logoutThunkCreator={this.props.logoutThunkCreator}/>
        )
    }
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuthState(state),
    login: getAuthLogin(state)
})

const mapDispatchToProps = {
    logoutThunkCreator
}

const HeaderContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Auth)

export default HeaderContainer;