import {connect} from "react-redux";
import Login from "./login";
import {authThunkCreator, loginThunkCreator} from "../../redux/authReducer";
import {compose} from "redux";
import {withLoginRedirect} from "../hoc/loginRedirect";
import {getAuthState} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        auth: getAuthState(state)
    }
}

const LoginContainer = compose(connect(mapStateToProps,
    {
        loginThunkCreator,
        authThunkCreator
    }),withLoginRedirect)(Login)

export default LoginContainer