import React from "react";
import {Field, Form} from 'react-final-form';
import style from "./login.module.css";


const Login = (props) => {
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <MyForm {...props}/>
        </div>
    )
}

const MyForm = (props) => {

    return (
        <Form
            onSubmit={(data) => {
                props.loginThunkCreator(data)
            }}
            validate={(data) => {
                console.log(data)
            }}
            onChange={(data) => {
                console.log(data);
            }}
            render={({handleSubmit}) => (
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form__field}>
                        <label>Login</label>
                        <hr className={style.hr}/>
                        <Field name="email" component="input" placeholder="Please input login"/>
                    </div>
                    <div className={style.form__field}>
                        <label>Password</label>
                        <hr className={style.hr}/>
                        <Field name="password" component="input" placeholder="Please input password"/>
                    </div>
                    <div className={style.form__field}>
                        <label>Remember me</label>
                        <Field name="rememberMe" component="input" type={"checkbox"}/>
                        <hr className={style.hr}/>
                    </div>
                    {/*<h2>An Arbitrary Reusable Input Component</h2>
                    <div>
                        <label>Interests</label>
                        <Field name="interests" component={"input"}/>
                    </div>

                    <h2>Render Function</h2>
                    <Field
                        name="bio"
                        render={({input, meta}) => (
                            <div>
                                <label>Bio</label>
                                <textarea {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    />

                    <h2>Render Function as Children</h2>
                    <Field name="phone">
                        {({input, meta}) => (
                            <div>
                                <label>Phone</label>
                                <input type="text" {...input} placeholder="Phone"/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>*/}
                    <button type="submit">Login</button>
                </form>
            )}
        />
    )
}
export default Login;