import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        props: state.auth
    }
}

export const withLoginRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if(this.props.isAuth) return <Navigate to={`/profile`} />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}