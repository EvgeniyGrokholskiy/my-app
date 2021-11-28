import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../../redux/authReducer";


class Auth extends React.Component {

    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me/", {
            withCredentials: true
        })
            .then((response) => {
                let {id, email, login} = response.data.data;
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