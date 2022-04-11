import React from "react"
import {connect} from "react-redux"
import {Navigate} from "react-router"
import {AppStateType} from "../../redux/reduxStore"
import {initializeApp} from "../../redux/appReducer"
import {IRedirectComponentProps} from "../../types/types"
import {getAuthState, getIsAuthState} from "../../redux/selectors"

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuthState(state),
        props: getAuthState(state),
    }
}

export const withLoginRedirect = (Component: React.JSXElementConstructor<any>) => {

    class RedirectComponent extends React.Component<IRedirectComponentProps> {
        render() {

            if (this.props.isAuth) return <Navigate to={`/profile/`}/>

            return <Component {...this.props} />
        }
    }


    return connect(mapStateToProps, {initializeApp})(RedirectComponent);
}
