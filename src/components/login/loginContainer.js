import {connect} from "react-redux";
import Login from "./login";
import {authThunkCreator, setCaptchaUrl, loginThunkCreator, getNewCaptcha} from "../../redux/authReducer";
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
        authThunkCreator,
        getNewCaptcha
    }),withLoginRedirect)(Login)

export default LoginContainer