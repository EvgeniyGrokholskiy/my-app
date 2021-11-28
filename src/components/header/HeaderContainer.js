import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserData} from "../../redux/authReducer";
import {authMeAPI} from "../../api/api";


class Auth extends React.Component {

    componentDidMount() {

        authMeAPI.authMe().then((data) => {

            let {id, email, login} = data;
            this.props.setUserData(id, login, email);
        })
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

const HeaderContainer = connect(mapStateToProps, {setUserData})(Auth)

export default HeaderContainer;