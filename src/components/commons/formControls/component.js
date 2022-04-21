import React from "react"
import style from "./component.module.css"

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.wrapper}>
            <input
                className={`${style.input} ${(hasError ? style.error : "")} `}  {...input} {...props} />
                {hasError && <span className={style.errorMessage}>{meta.error}</span>}
        </div>
    )
}