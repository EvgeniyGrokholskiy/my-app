import Login from "./login"
import {connect} from "react-redux"
import {getAuthState} from "../../redux/selectors"
import {AppStateType} from "../../redux/reduxStore"
import {withLoginRedirect} from "../hoc/loginRedirect"
import {getNewCaptcha, loginThunkCreator} from "../../redux/authReducer"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    auth: getAuthState(state)
})

const mapDispatchToProps = {
    loginThunkCreator,
    getNewCaptcha
}

const LoginContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(withLoginRedirect(Login))

export default LoginContainer