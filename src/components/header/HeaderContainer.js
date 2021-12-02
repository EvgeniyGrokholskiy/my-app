import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunkCreator, logoutThunkCreator, setUserData} from "../../redux/authReducer";


class Auth extends React.Component {

    componentDidMount() {


    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {

    return {
        state: state.auth
    };
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        setUserData
    }
}*/

const HeaderContainer = connect(mapStateToProps,
    {
        setUserData,
        authThunkCreator,
        logoutThunkCreator
    })(Auth)

export default HeaderContainer;