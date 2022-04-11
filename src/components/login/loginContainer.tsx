import Login from "./login"
import {compose} from "redux"
import {connect} from "react-redux"
import {getAuthState} from "../../redux/selectors"
import {AppStateType} from "../../redux/reduxStore"
import {withLoginRedirect} from "../hoc/loginRedirect"
import {getNewCaptcha, loginThunkCreator} from "../../redux/authReducer"

const mapStateToProps = (state: AppStateType) => {
    return {
        auth: getAuthState(state)
    }
}

const LoginContainer = compose(connect(mapStateToProps,
    {
        loginThunkCreator,
        getNewCaptcha
    }),withLoginRedirect)(Login)

export default LoginContainer