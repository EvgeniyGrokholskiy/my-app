import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";
import Loading from "../commons/loading/loading";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
           if (!this.props.isAuth){
                return <Navigate to={"/login"} />
            }

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent);

return ConnectedAuthRedirectComponent;
}

