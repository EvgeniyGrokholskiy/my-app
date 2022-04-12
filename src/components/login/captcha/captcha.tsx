import React from "react"
import {Field} from "react-final-form"
import style from "./captca.module.css"
import {ICaptchaProps} from "../../../types/types"
import {Input} from "../../commons/formControls/component"


const Captcha: React.FC<ICaptchaProps> = ({captcha, getNewCaptcha, validator}) => {

    return (
        <div className={style.form__field}>
            <img className={style.captcha} src={captcha} alt={"captcha"}/>
            <button onClick={getNewCaptcha}>Get new Captcha</button>
            <Field name="captcha" component={Input} placeholder={"Please enter characters from the image"}
                   validate={validator}/>
        </div>
    )
}

export default Captcha