import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";
import {getAuthState, getIsAuthState} from "../../redux/selectors";
import {initializeApp} from "../../redux/appReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthState(state),
        props: getAuthState(state),
    }
}

export const withLoginRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if(this.props.isAuth) return <Navigate to={`/profile/`} />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToProps,{initializeApp})(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
