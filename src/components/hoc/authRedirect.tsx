import React from "react"
import {connect} from "react-redux"
import {Navigate} from "react-router"
import {AppStateType} from "../../redux/reduxStore"
import {getInitializedState, getIsAuthState} from "../../redux/selectors"

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuthState(state),
        initialized: getInitializedState(state)
    }
}

export const withAuthRedirect = (Component: React.JSXElementConstructor<any>) => {

    class RedirectComponent extends React.Component {
        render() {

            if (!window.sessionStorage.getItem("isAuth")/*this.props.isAuth*/) {
                return <Navigate to={"/"}/>
            }

            return <Component {...this.props} />
        }
    }


    return connect(mapStateToProps)(RedirectComponent);
}

