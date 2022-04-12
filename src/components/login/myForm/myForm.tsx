import React from "react"
import style from "./myForm.module.css"
import Captcha from "../captcha/captcha"
import {Field, Form} from "react-final-form"
import {IMyFormProps} from "../../../types/types"
import {validators} from "../../utils/validators"
import {LoginData} from "../../../redux/authReducer"
import {Input} from "../../commons/formControls/component"


const MyForm: React.FC<IMyFormProps> = ({auth, loginThunkCreator, getNewCaptcha}) => {

    const error = auth.isError;
    const errorMessage = auth.errorMessage;
    const captcha = auth.captcha;
    const maxLength30 = validators.maxLengthValidatorCreator(30);
    const validator = validators.composeValidators(validators.required, maxLength30);

    return (
        <Form
            onSubmit={(data: LoginData) => {
                loginThunkCreator(data)
            }}
            render={({handleSubmit}) => (
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form__field}>
                        <label className={style.label}>Login</label>
                        <Field name="email" component={Input} placeholder={"Please input login"} validate={validator}/>
                    </div>
                    <div className={style.form__field}>
                        <label className={style.label}>Password</label>
                        <Field name="password" component={Input} placeholder={"Please input password"} type={"password"}
                               validate={validator}/>
                    </div>
                    <div className={style.form__field}>
                        <label className={style.label}>Remember me</label>
                        <Field name="rememberMe" component="input" type={"checkbox"}/>
                    </div>
                    {
                        (error && captcha) &&
                        <Captcha captcha={captcha} validator={validator} getNewCaptcha={getNewCaptcha}/>
                    }
                    {
                        error && <span className={style.errorSpan}>{errorMessage}</span>
                    }
                    <br className={''}/>
                    <button className={style.button} type="submit">Login</button>
                </form>
            )}
        />
    )
}

export default MyForm