import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";
import {getInitializedState, getIsAuthState} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthState(state),
        initialized: getInitializedState(state)
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!window.sessionStorage.getItem("isAuth")/*this.props.isAuth*/) {
                return <Navigate to={"/login"}/>
            }

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

