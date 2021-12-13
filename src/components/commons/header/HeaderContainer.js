import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunkCreator, logoutThunkCreator, setUserData} from "../../../redux/authReducer";
import {getAuthState} from "../../../redux/selectors";


class Auth extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {

    return {
        state: getAuthState(state)
    };
}

const HeaderContainer = connect(mapStateToProps,
    {
        setUserData,
        authThunkCreator,
        logoutThunkCreator
    })(Auth)

export default HeaderContainer;