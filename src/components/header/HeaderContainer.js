import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunkCreator, setUserData} from "../../redux/authReducer";
import {authMeAPI} from "../../api/api";


class Auth extends React.Component {

    componentDidMount() {

        this.props.authThunkCreator();
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
        authThunkCreator
    })(Auth)

export default HeaderContainer;