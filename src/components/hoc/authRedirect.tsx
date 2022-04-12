import React from "react"
import {connect} from "react-redux"
import {Navigate} from "react-router"
import {AppStateType} from "../../redux/reduxStore"
import {getInitializedState, getIsAuthState} from "../../redux/selectors"


export const withAuthRedirect = (Component: React.JSXElementConstructor<any>) => {

    class RedirectComponent extends React.Component {
        render() {

            if (!window.sessionStorage.getItem("isAuth")) {
                return <Navigate to={"/"}/>
            }

            return <Component {...this.props} />
        }
    }

    const mapStateToProps = (state: AppStateType) => ({
        isAuth: getIsAuthState(state),
        initialized: getInitializedState(state)
    })

    return connect(mapStateToProps)(RedirectComponent);
}

