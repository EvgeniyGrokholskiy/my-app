import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../../redux/authReducer";
import {getAuthLogin, getIsAuthState} from "../../../redux/selectors";


class Auth extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {

    return {
        isAuth: getIsAuthState(state),
        login: getAuthLogin(state)
    };
}

const HeaderContainer = connect(mapStateToProps,{logoutThunkCreator})(Auth)

export default HeaderContainer;