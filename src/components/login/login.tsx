import React from "react"
import MyForm from "./myForm/myForm"
import style from "./login.module.css"
import {ILoginProps} from "../../types/types"


class Login extends React.PureComponent<ILoginProps> {

    render() {
        return (
            <div className={style.wrapper}>
                <h1>Login</h1>
                <MyForm loginThunkCreator={this.props.loginThunkCreator} auth={this.props.auth}
                        getNewCaptcha={this.props.getNewCaptcha}/>
            </div>
        )
    }
}

export default Login;