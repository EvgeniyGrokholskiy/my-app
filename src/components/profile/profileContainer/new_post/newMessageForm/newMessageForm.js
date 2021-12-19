import {validators} from "../../../../utils/validators";
import {Field, Form} from "react-final-form";
import style from "./newMessageForm.module.css";
import {ReactComponent as SendIcon} from "../img/send_icon.svg";
import React from "react";

const NewMessageForm = React.memo((props) => {

    const addPost = (data) => {
        if (data.newMessage) props.addPost(data.newMessage);
    }

    const maxLength300 = validators.maxLengthValidatorCreator(300);
    return (
        <Form
            onSubmit={(data) => {
                addPost(data)
            }}
            validate={(data) => {

            }}

            keepDirtyOnReinitialize

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessage" validate={maxLength300}>
                        {({input, meta}) => (
                            <>
                                <div className={style.wrapper}>
                                    <p className={style.header}>NEW POST</p>
                                    <textarea className={style.textArea} {...input}
                                              placeholder={"What’s on your mind?"}/>

                                    <button type={"submit"} className={style.button}><SendIcon className={style.svg}/>
                                    </button>
                                    {meta.touched && meta.error && <span className={style.errorMessage}>{meta.error}</span>}
                                </div>
                            </>
                        )}
                    </Field>
                </form>
            )}
        />
    )
},function areEqual(prevProps, nextProps) {
return prevProps === nextProps;
})

export default NewMessageForm;