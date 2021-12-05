import React from "react";
import {Field, Form} from 'react-final-form';
import style from "./login.module.css";
import {validators} from "../utils/validators";
import {Input} from "../commons/formControls/component";


const Login = (props) => {
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <MyForm {...props}/>
        </div>
    )
}

const MyForm = (props) => {

    const error = props.auth.isError;
    const errorMessage = props.auth.errorMessage
    const maxLength30 = validators.maxLengthValidatorCreator(30);
    const validator = validators.composeValidators(validators.required, maxLength30);

    return (
        <Form
            onSubmit={(data) => {
                props.loginThunkCreator(data)
            }}
            validate={(values) => {

            }}
            render={({handleSubmit}) => (
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form__field}>
                        <label className={style.label}>Login</label>
                        <Field name="email" component={Input} placeholder={"Please input login"} validate={validator}/>
                    </div>
                    <div className={style.form__field}>
                        <label className={style.label}>Password</label>
                        <Field name="password" component={Input} placeholder={"Please input password"} type={"password"} validate={validator}/>
                    </div>
                    <div className={style.form__field}>
                        <label className={style.label}>Remember me</label>
                        <Field name="rememberMe" component="input" type={"checkbox"}/>
                    </div>
                    {
                        error ? <span className={style.errorSpan}>{errorMessage}</span> : <></>
                    }
                    <br className={''}/>
                    <button className={style.button} type="submit">Login</button>
                </form>
            )}
        />
    )
}
export default Login;