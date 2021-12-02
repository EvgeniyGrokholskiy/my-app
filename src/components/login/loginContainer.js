import {connect} from "react-redux";
import Login from "./login";
import {loginThunkCreator} from "../../redux/authReducer";
import {compose} from "redux";
import {withLoginRedirect} from "../hoc/loginRedirect";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const LoginContainer = compose(connect(mapStateToProps,
    {
        loginThunkCreator
    }),withLoginRedirect)(Login)

export default LoginContainer